import { createSlice } from '@reduxjs/toolkit'

interface preview {
	previewUrl: string
}

const initialState: preview = {
	previewUrl: '',
}

export const PreviewInfo = createSlice({
	name: 'preview',
	initialState,
	reducers: {
		updatePreviewUrl: (state: preview, action: any) => {
			state.previewUrl = action.payload
		},
	},
})

export const { updatePreviewUrl } = PreviewInfo.actions

export default PreviewInfo.reducer
