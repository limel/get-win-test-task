import { all } from 'redux-saga/effects';
import { registrationSaga } from '../registration/registrationSaga';
function* rootSaga() {
	yield all([registrationSaga()]);
}

export default rootSaga;
