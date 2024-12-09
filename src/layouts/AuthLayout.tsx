import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function AuthLayout() {
  return (
    <div className="antialiased">
      <Header />
      <Outlet />
    </div>
  );
}
