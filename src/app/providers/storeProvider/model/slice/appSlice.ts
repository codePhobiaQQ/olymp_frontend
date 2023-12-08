import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSchema } from '@app/providers/storeProvider/model/types/appSchema.ts';

const initialState: AppSchema = {
  isAuthDialogOpen: false,
  isMenuOpen: false
};

export const AuthDialogSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsAuthDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthDialogOpen = action.payload
    },
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload
    }
  }
});

export const { actions: AppActions } = AuthDialogSlice;
export const { reducer: AppReducer } = AuthDialogSlice;