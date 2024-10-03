import { configureStore } from '@reduxjs/toolkit'
import filetreeslice from './features/filetreeslice'
// ...

export const store = configureStore({
  reducer: {
    fileTree:filetreeslice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch