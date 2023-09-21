import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthDialogSchema } from '../types/AuthDialogSchema';

const initialState: AuthDialogSchema = {
  isLoading: false,
  isOpen: false
};

export const AuthDialogSlice = createSlice({
  name: 'AuthDialog',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  }
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: AuthDialogActions } = AuthDialogSlice;
export const { reducer: AuthDialogReducer } = AuthDialogSlice;