import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const HiddenVideo = styled.video`
  display: none;
`;

const StreamDisplay = styled.img`
  width: 960px;
  height: 720px;
  object-fit: contain;
  /* transform: scaleX(-1); */
`;

const MessageOverlay = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
`;

const Message = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  background-color: ${(props) =>
    props.$type === 'error'
      ? 'rgba(239, 68, 68, 0.8)'
      : 'rgba(34, 197, 94, 0.8)'};
  color: white;
`;

export default function WebSocketVideoStream() {
  const [errorMessage, setErrorMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const localVideoRef = useRef(null);
  const wsRef = useRef(null);
  const streamRef = useRef(null);

  const setupCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 960, height: 720 },
      });

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
        streamRef.current = stream;
        await localVideoRef.current.play();
        setStatusMessage('Camera connected');
        setupWebSocket();
      }
    } catch (error) {
      console.error('Camera access failed:', error);
      setErrorMessage(
        'Failed to access the camera. Please check your browser settings and permissions.'
      );
    }
  };

  const setupWebSocket = () => {
    const serverAddress = import.meta.env.VITE_SERVER_URL;
    wsRef.current = new WebSocket(serverAddress);

    console.log(serverAddress);

    wsRef.current.onopen = () => {
      setStatusMessage('Connected');
      sendFrame();
    };

    wsRef.current.onmessage = (event) => {
      const remoteVideo = document.getElementById('remoteVideo');
      if (remoteVideo) {
        remoteVideo.src = URL.createObjectURL(event.data);
      }
    };

    wsRef.current.onclose = () => {
      setStatusMessage('Reconnecting...');
      setTimeout(setupWebSocket, 1000);
    };

    wsRef.current.onerror = (error) => {
      console.error('WebSocket error:', error);
      setErrorMessage('Connection error. Please check your connection.');
    };
  };

  const sendFrame = () => {
    if (wsRef.current?.readyState === WebSocket.OPEN && localVideoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = 960;
      canvas.height = 720;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.drawImage(localVideoRef.current, 0, 0, 960, 720);
        canvas.toBlob(
          (blob) => {
            if (blob && wsRef.current) {
              wsRef.current.send(blob);
              setTimeout(sendFrame, 100);
            }
          },
          'image/jpeg',
          0.5
        );
      }
    }
  };

  useEffect(() => {
    setupCamera();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <Container>
      <HiddenVideo ref={localVideoRef} autoPlay muted />

      <StreamDisplay id="remoteVideo" alt="Video stream" />

      <MessageOverlay>
        {errorMessage && <Message $type="error">{errorMessage}</Message>}
        {statusMessage && <Message $type="success">{statusMessage}</Message>}
      </MessageOverlay>
    </Container>
  );
}
