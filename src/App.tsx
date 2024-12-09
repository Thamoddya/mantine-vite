
import { MantineProvider } from "@mantine/core";
import '@mantine/notifications/styles.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './stores';
import { theme } from "./theme";

import { Notifications } from '@mantine/notifications';
import RootLayout from './layouts/RootLayout';
export default function App() {
  return <MantineProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Notifications />
          <RootLayout />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </MantineProvider>;
}
