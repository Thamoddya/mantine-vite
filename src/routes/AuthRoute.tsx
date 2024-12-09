import { Navigate, Outlet } from 'react-router-dom';
import Loading from '../components/core/Loading';
import { AUTH_ENTRY_PATH } from '../configs/app';
import useAuth from '../hooks/useAuth';

export default function AuthRoute() {
  const { isLoading, authenticated } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  return !authenticated ? <Outlet /> : <Navigate to={AUTH_ENTRY_PATH} />;
}
