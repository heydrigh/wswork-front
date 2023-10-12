import Dashboard from '@pages/Dashboard';
import Home from '@pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { RoutesEnum } from './routes';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Dashboard} element={<Dashboard />} />

        <Route path={RoutesEnum.Home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
