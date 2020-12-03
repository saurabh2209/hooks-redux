import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'authType',
//   storage: storage,
// };
// const pReducer = persistReducer(persistConfig, rootReducer);

// import logger from 'redux-logger'

export default function configureStore(initialState={}) {
 const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
 );

 // const persistor = persistStore(store);
 window.store = store;

 return store
}
