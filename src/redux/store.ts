import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from "../reducer/productReducer";
import { basketReducer } from "../reducer/basketReducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    //@ts-ignore
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends  {[key: string]: (...arg: any[])=>any}  > = ReturnType<PropertiesTypes<T>>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch