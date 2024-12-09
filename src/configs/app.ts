import { routes } from "../constants/route";

export const BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_DEV_BASE_URL || "http://localhost:8000/api/"
  : "https://api.taskbear.online/api/";
export const TOKEN_TYPE = "Bearer ";
export const REQUEST_HEADER_AUTH_KEY = "Authorization";
export const PERSIST_STORE_NAME = "TASK_BEAR_WEB_TOKEN_INFO";
export const AUTH_ENTRY_PATH = "/";
export const UN_AUTH_ENTRY_PATH = routes.signIn;
export const GOOGLE_API_KEY = "AIzaSyCKyvBtUwt1c-jyaJCZOytTaOswWUb0WyE";
export const VISION_URL = `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_API_KEY}`;
export const PAGE_LIMIT = 10;
