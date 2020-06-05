import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';

import reducers from './ducks';
import sagas from './sagas';

const persistConfig = {
  key: '@fashionista/persist',
  storage,
  whitelist: ['cart'],
};

const persistedReducers = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducers, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);
sagaMiddleware.run(sagas);

export { store, persistor };
