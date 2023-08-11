import axios from 'axios';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { registrationRequest, registrationSuccess, registrationFailure } from './registrationSlice';

function registrationApi({ email, password }: { email: string; password: string }) {
	return axios('https://api.prof.world/v2.0/profile/registration/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		data: {
			email,
			password,
			ref: 'https//google.com',
		},
	});
}

function* handleRegistration() {
	try {
		yield put(registrationRequest());

		// Get user data from the user slice
		const { email, password } = yield select(state => state.user);
		console.log(email, password);
		// Make an API call to register the user
		const response = yield call(registrationApi, { email, password });
		console.log(response);
		yield put(registrationSuccess());
	} catch (error) {
		yield put(registrationFailure(error.message));
	}
}

export function* registrationSaga() {
	yield takeLatest('registration/registrationPost', handleRegistration);
}
