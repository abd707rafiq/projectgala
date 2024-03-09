import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import basketReducer from './basketSlice';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';
import userReducer from './userslice';

// Combine all reducers
const rootReducer = combineReducers({
  basket: basketReducer,
  cart: cartReducer,
  category: categoryReducer,
  user: userReducer,
});

// Config for persisting the entire Redux store
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create the Redux persistor
export const persistor = persistStore(store);
