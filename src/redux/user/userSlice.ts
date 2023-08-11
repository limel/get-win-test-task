// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
	email: string;
	password: string;
}

const initialState: User = {
	email: '',
	password: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setEmail(state, action: PayloadAction<string>) {
			state.email = action.payload;
		},
		setPassword(state, action: PayloadAction<string>) {
			state.password = action.payload;
		},
	},
});

export const { setEmail, setPassword } = userSlice.actions;
export default userSlice.reducer;
