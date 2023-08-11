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

		const { email, password } = yield select(state => state.user);

		// @ts-ignore
		const response = yield call(registrationApi, { email, password });
		console.log(response);
		yield put(registrationSuccess());
	} catch (error) {
		if (error) {
			// @ts-ignore
			yield put(registrationFailure(error.message as string));
		}
	}
}

export function* registrationSaga() {
	yield takeLatest('registration/registrationPost', handleRegistration);
}
