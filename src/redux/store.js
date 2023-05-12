// import { createStore } from 'redux';
// import noteReducer from './noteReducer';

// const store = createStore(noteReducer);

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import noteReducer from "./reducers";

const notesReducerConfig = {
  key: 'note',
  storage,
  whitelist: ['notes']
};

export const store = configureStore({
  reducer: {
      notesData: persistReducer(notesReducerConfig, noteReducer),
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);