import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
	loading: boolean;
	error: string | null;
}

const initialState: RegistrationState = {
	loading: false,
	error: null,
};

const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		registrationRequest(state) {
			state.loading = true;
			state.error = null;
		},
		registrationSuccess(state) {
			state.loading = false;
		},
		registrationFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { registrationRequest, registrationSuccess, registrationFailure } = registrationSlice.actions;

export default registrationSlice.reducer;
