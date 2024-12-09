//Google Login Data Session Sclice
import { IGoogleData } from '@/types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IGoogleData = {
  accessToken: '',
  displayName: '',
  email: '',
  photoURL: '',
  uid: '',
  isExternalSignUp: false,
  firstName: '',
  lastName: '',
};

const googleLoginSessionSlice = createSlice({
  name: 'app/googleLoginSessionSlice',
  initialState,
  reducers: {
    setGoogleData(state, { payload }: PayloadAction<IGoogleData>) {
      state.accessToken = payload.accessToken;
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.uid = payload.uid;
      state.isExternalSignUp = payload.isExternalSignUp;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
  },
});

export const { setGoogleData } = googleLoginSessionSlice.actions;
export default googleLoginSessionSlice.reducer;
