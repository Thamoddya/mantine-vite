import { Navigate, Outlet } from 'react-router-dom';
import Loading from '../components/core/Loading';
import { UN_AUTH_ENTRY_PATH } from '../configs/app';
import useAuth from '../hooks/useAuth';

export default function ProtectRoute() {
  const { isLoading, authenticated } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  return authenticated ? <Outlet /> : <Navigate to={UN_AUTH_ENTRY_PATH} />;
}
