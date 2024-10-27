import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WebSocketVideoStream from '@/pages/webSocket';
import Main from '@/pages/main';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="camera" element={<WebSocketVideoStream />} />
      </Routes>
    </BrowserRouter>
  );
};
