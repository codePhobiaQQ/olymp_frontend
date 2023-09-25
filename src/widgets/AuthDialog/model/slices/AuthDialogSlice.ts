import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthDialogSchema, tabType} from '../types/AuthDialogSchema';
import {LAST_ACTIVE_TAB_LS_KEY, PREV_REGISTRATION_TAB_LS_KEY} from "@widgets/AuthDialog/lib/consts/localstorage.ts";

const initialState: AuthDialogSchema = {
  isLoading: false,
  isOpen: false,
  activeTab: 'login'
};

export const AuthDialogSlice = createSlice({
  name: 'AuthDialog',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setActiveTab: (state, action: PayloadAction<tabType>) => {
      state.activeTab = action.payload
      localStorage.setItem(LAST_ACTIVE_TAB_LS_KEY, action.payload)

      // Prev registration tab
      if ((['registration_shared', 'registration_students', 'registration_universities', 'registration_teachers'] as tabType[]).includes(action.payload)) {
        localStorage.setItem(PREV_REGISTRATION_TAB_LS_KEY, action.payload)
      }
    },
    initDialog: (state, _) => {
      console.log('initTabItem')
      const initTabItem = localStorage.getItem(LAST_ACTIVE_TAB_LS_KEY) as tabType || 'login'
      console.log('initTabItem', initTabItem)
      state.activeTab = initTabItem
    }
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

export const {actions: AuthDialogActions} = AuthDialogSlice;
export const {reducer: AuthDialogReducer} = AuthDialogSlice;