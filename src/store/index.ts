import { configureStore, Middleware } from '@reduxjs/toolkit';
import usuario from './reducers/usuario';
import viagem from './reducers/viagem';
import filtro from './reducers/filtro';
import snackbar from './reducers/snackbar';
import carrinho from './reducers/carrinho';
import createDebugger from 'redux-flipper';
import { viagensApi } from './reducers/viagem/middlewares';
import { filtroListener } from './reducers/filtro/middlewares';
import createSagaMiddleware from 'redux-saga';
import carrinhoSaga from './reducers/carrinho/sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [
  viagensApi.middleware,
  filtroListener.middleware,
  sagaMiddleware
];

if (__DEV__) {
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: {
    [viagensApi.reducerPath]: viagensApi.reducer,
    usuario,
    viagem,
    filtro,
    snackbar,
    carrinho
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(...middlewares)
  ,
});

sagaMiddleware.run(carrinhoSaga);

export default store;