import { IUser } from '@/types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SessionState {
  signedIn: boolean;
  token: string | null;
  user: IUser| null;
  isLoading: boolean;
}

const initialState: SessionState = {
  signedIn: false,
  token: null,
  user: null,
  isLoading: false,
};

const sessionSlice = createSlice({
  name: 'auth/session',
  initialState,
  reducers: {
    signInSuccess(state, { payload }: PayloadAction<{ token: string; user: IUser }>) {
      state.signedIn = true;
      state.token = payload.token;
      state.user = payload.user;
    },
    signOutSuccess(state) {
      state.signedIn = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const { signInSuccess, signOutSuccess } = sessionSlice.actions;
export default sessionSlice.reducer;
