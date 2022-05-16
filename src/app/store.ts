import { configureStore } from "@reduxjs/toolkit";

import { slice } from "../features/ui/slice";
import { usersApi } from "./services/users";

export const store = configureStore({
  reducer: { [usersApi.reducerPath]: usersApi.reducer, ui: slice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
