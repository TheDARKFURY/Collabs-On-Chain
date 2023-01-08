import { configureStore } from '@reduxjs/toolkit'
import FormReducers from '../features/member'
import CollabInfo from '../features/collabInfo'
import PreviewInfo from '../features/previewInfo'
export const store = configureStore({
	reducer: {
		FormReducers: FormReducers,
		collabInfo: CollabInfo,
		previewInfo: PreviewInfo,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
