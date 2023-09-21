import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSchema } from '@app/providers/storeProvider/model/types/appSchema.ts';

const initialState: AppSchema = {
  isAuthDialogOpen: false
};

export const AuthDialogSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsAuthDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthDialogOpen = action.payload
    }
  }
});

export const { actions: AppActions } = AuthDialogSlice;
export const { reducer: AppReducer } = AuthDialogSlice;