import { Route, Routes } from 'react-router-dom';
import authRoute from '../configs/routes/authRoute';
import protectRoute from '../configs/routes/protectRoute';
import publicRoute from '../configs/routes/publicRoute';
import AppLayout from '../layouts/AppLayout';
import AuthLayout from '../layouts/AuthLayout';
import NotFound from '../pages/NotFound';
import AuthRoute from './AuthRoute';
import ProtectRoute from './ProtectRoute';
import PublicRoute from './PublicRoute';

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/" element={<AppLayout />}>
          {publicRoute.map(({ key, path, component: Component }) => (
            <Route key={key} path={path} element={<Component />} />
          ))}
        </Route>
      </Route>
      <Route path="/" element={<ProtectRoute />}>
        <Route path="/" element={<AppLayout />}>
          {protectRoute.map(({ key, path, component: Component }) => (
            <Route key={key} path={path} element={<Component />} />
          ))}
        </Route>
      </Route>
      <Route path="/" element={<AuthRoute />}>
        <Route path="/" element={<AuthLayout />}>
          {authRoute.map(({ key, path, component: Component }) => (
            <Route key={key} path={path} element={<Component />} />
          ))}
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
