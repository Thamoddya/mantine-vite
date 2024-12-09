import axios from "axios";
import {
  BASE_URL,
  PERSIST_STORE_NAME,
  REQUEST_HEADER_AUTH_KEY,
  TOKEN_TYPE,
} from "../configs/app";
import store, { signOutSuccess } from "../stores";
import deepParseJson from "./deepParseJson";

const unauthorizedCode = [401];

const http = axios.create({
  timeout: 60000,
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME);
    const persistData = deepParseJson(rawPersistData);

    let accessToken = (persistData as any).auth.session.token;
    if (!accessToken) {
      const { auth } = store.getState();
      accessToken = auth.session.token;
    }

    if (accessToken) {
      if (config.headers) {
        config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response && unauthorizedCode.includes(response.status)) {
      store.dispatch(signOutSuccess());
    }

    return Promise.reject(error);
  }
);

export default http;
