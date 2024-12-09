import { IUser } from '@/types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState{
  user:IUser|null
}

const initialState: UserState = {
  user:null,
};

const userSlice = createSlice({
  name: 'app/confirmation-dialog',
  initialState,
  reducers: {
    setUser(state,{payload}:PayloadAction<IUser>){
      state.user = payload 
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
