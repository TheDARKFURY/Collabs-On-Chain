import { createSlice } from '@reduxjs/toolkit'

interface collab {
	collabName: string
	LeadName: string
	Description: string
	AdminWallet: string
}

const initialState: collab = {
	collabName: '',
	LeadName: '',
	Description: '',
	AdminWallet: '',
}

export const CollabInfo = createSlice({
	name: 'collab',
	initialState,
	reducers: {
		addCollabName: (state: collab, action: any) => {
			state.collabName = action.payload
		},
		addLeadName: (state: collab, action: any) => {
			state.LeadName = action.payload
		},
		addDescription: (state: collab, action: any) => {
			state.Description = action.payload
		},
		addAdminWallet: (state: collab, action: any) => {
			state.AdminWallet = action.payload
		},
	},
})

export const { addAdminWallet, addCollabName, addDescription, addLeadName } =
	CollabInfo.actions

export default CollabInfo.reducer