import { configureStore } from '@reduxjs/toolkit'
import { menuReducer } from '../reducer/menuReducer'



export const store = configureStore({
  reducer: {
  Menu: menuReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch