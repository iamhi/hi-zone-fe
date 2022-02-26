/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
	name: 'userData',
	initialState: {
		uuid: '',
		username: '',
		roles: [],
		email: '',
	},
	reducers: {
		setUserData(state, action) {
			state.uuid = action.payload.uuid;
			state.username = action.payload.username;
			state.roles = action.payload.roles;
			state.email = action.payload.email;
		},
	},
});

export const {
	setUserData,
} = userDataSlice.actions;

export const selectUserUuid = (state) => state.userData.uuid;

export const selectUsername = (state) => state.userData.username;

export const selectRoles = (state) => state.userData.roles;

export const selectEmail = (state) => state.userData.email;

export const selectIsAdmin = (state) => state.userData.roles.includes('ADMIN');

export default userDataSlice.reducer;
