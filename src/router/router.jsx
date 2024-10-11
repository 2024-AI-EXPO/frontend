import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { Main } from '../pages/Main';
import { Error } from '../pages/Error';
import { Learn } from '../pages/Learn';
import { Inquiry } from '../pages/Inquiry';
import { Devs } from '../pages/Devs';
import { Docs } from '../pages/Docs';
import WebSocketVideoStream from '../pages/WebSocket';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="learn" element={<Learn />} />
          <Route path="inquiry" element={<Inquiry />} />
          <Route path="devs" element={<Devs />} />
          <Route path="docs" element={<Docs />} />
          <Route path="camera" element={<WebSocketVideoStream />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
