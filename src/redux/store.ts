import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reducer/menuReducer";
import cartReducer from "../reducer/cartReducer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<
  T extends { [key: string]: (...arg: any[]) => any }
> = ReturnType<PropertiesTypes<T>>;
