
import rootReducer from './reducers'
import rootSaga from './saga';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { execOnce } from 'next/dist/next-server/lib/utils';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}
const persistConfig = {
  key: 'propmanagement',
  storage:storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const initializeStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
        reducer:persistedReducer,
        pre:initialState,
        middleware:[...getDefaultMiddleware({thunk:false,serializableCheck:false}),sagaMiddleware]

    });
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

// export const wrapper = createWrapper(initializeStore, { debug: false })