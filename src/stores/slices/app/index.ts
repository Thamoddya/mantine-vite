import { IGoogleData } from '@/types/auth';
import { combineReducers } from '@reduxjs/toolkit';
import googleSigninReducer from './googleLoginSessionSlice';
import user, { UserState } from './userSlice';

const reducer = combineReducers({
  user,
  googleData: googleSigninReducer,
});

export type AppState = {
  user: UserState;
  googleData: IGoogleData;
};
export * from './googleLoginSessionSlice';
export * from './userSlice';

export default reducer;
