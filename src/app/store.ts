import moviesSlice from '@/features/movies/moviesSlice'
import { configureStore } from '@reduxjs/toolkit'
import { addDateInMovie } from './middlewares/addDateInMovie'
import { saveToStorage } from './middlewares/saveToStorage'

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(addDateInMovie, saveToStorage),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
