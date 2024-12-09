import AppRoute from '../routes/AppRoute';
import { Suspense } from 'react';
import Loading from '../components/core/Loading';

export default function RootLayout() {
  return (
    <Suspense fallback={<Loading />}>
      <AppRoute />
    </Suspense>
  );
}