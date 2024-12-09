import { RootState } from '@/stores';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export type AppThunkDispatch = ThunkDispatch<RootState, any, UnknownAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
