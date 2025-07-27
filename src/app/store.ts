import { IMovieFeatured, SetFeatureAction } from '@/types/interfaces.d'
import moviesSlice from '@/features/movies/moviesSlice'
import { configureStore, Middleware } from '@reduxjs/toolkit'

export const saveToStorage: Middleware = () => (next) => (action) => {
  const act = action as SetFeatureAction
  if (act.type.endsWith('/setFeature')) {
    sessionStorage.setItem('lastSeenMovieId', act.payload.Id)
  }
  return next(act)
}

export const addDateInMovie: Middleware = () => (next) => (action) => {
  const act = action as SetFeatureAction
  if (act.type.endsWith('/setFeature') && act.payload) {
    const obj: IMovieFeatured = {
      ...act.payload,
      lastClick: new Date().toJSON(),
    }
    act.payload = obj
  }
  return next(act)
}
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
