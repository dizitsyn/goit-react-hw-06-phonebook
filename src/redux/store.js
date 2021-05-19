import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loger from "redux-logger";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const ContsctsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  loger,
];

const store = configureStore({
  reducer: {
    contacts: persistReducer(ContsctsPersistConfig, reducer),
  },
  middleware,
});

const persistor = persistStore(store);

export default { store, persistor };
// const rootReducer = combineReducers({
//   contacts: reducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
