import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WebSocketVideoStream from '@/pages/webSocket';
import Main from '@/pages/main';
import { Manual } from '../pages/manual';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="camera" element={<WebSocketVideoStream />} />
        <Route path="manual" element={<Manual />} />
      </Routes>
    </BrowserRouter>
  );
};
