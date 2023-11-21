import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OnlineStudySchema } from '../types/OnlineStudySchema';

const initialState: OnlineStudySchema = {
    
};

export const OnlineStudySlice = createSlice({
    name: 'OnlineStudy',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
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

export const { actions: OnlineStudyActions } = OnlineStudySlice;
export const { reducer: OnlineStudyReducer } = OnlineStudySlice;