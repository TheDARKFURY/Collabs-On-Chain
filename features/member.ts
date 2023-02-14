import { createSlice } from '@reduxjs/toolkit'

interface members {
	name: string
	memberAddress: string
	role: string
	xp: number
	nft: string
	ipfsHash: string
	minted: boolean
}
interface FormInfo {
	MemberArray: Array<members>
	memberCount: number
}

const initialState: FormInfo = {
	memberCount: 0,
	MemberArray: [],
}

export const FormMemberSlice = createSlice({
	name: 'FormSlice',
	initialState,
	reducers: {
		addNewMember: (state: FormInfo, action: any) => {
			state.MemberArray = [...state.MemberArray, action.payload]
			state.memberCount = state.memberCount + 1
		},
		removeMember: (state: FormInfo, action: any) => {
			state.MemberArray = state.MemberArray.filter((arr: members) => {
				return arr.memberAddress != action.payload
			})
			state.memberCount -= 1
		},
		updateFull: (state: FormInfo, action: any) => {
			state.MemberArray = action.payload
		},
	},
})

export const { removeMember, addNewMember, updateFull } =
	FormMemberSlice.actions

export default FormMemberSlice.reducer
