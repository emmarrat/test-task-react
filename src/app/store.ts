import {configureStore} from "@reduxjs/toolkit";
import { discountsReducer } from '@/dispatchers/discountsSlice.ts';

export const store = configureStore({
    reducer: {
      discounts: discountsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;