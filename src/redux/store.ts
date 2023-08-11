import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import registrationReducer from './registration/registrationSlice';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		user: userReducer,
		registration: registrationReducer,
	},
	middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
sagaMiddleware.run(rootSaga);
