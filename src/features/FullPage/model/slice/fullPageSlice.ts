import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FullPageSchema, fullpageType } from '../types/fullPage'

const initialState: FullPageSchema = {
	fullpageApi: undefined,
	sectionId: '',
}

export const fullpageSlice = createSlice({
	name: 'fullpage',
	initialState,
	reducers: {
		setFullpageApi: (state, action: PayloadAction<fullpageType>) => {
			state.fullpageApi = action.payload
		},
		setFullpageActiveSection: (state, action: PayloadAction<string>) => {
			state.sectionId = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { actions: fullpageActions } = fullpageSlice
export const { reducer: fullpageReducer } = fullpageSlice
