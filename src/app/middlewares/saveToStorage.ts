import { SetFeatureAction } from '@/types/interfaces'
import { Middleware } from '@reduxjs/toolkit'

/**
 * Middleware that listens for `/setFeature` actions
 * and saves the last seen movie ID to `sessionStorage`
 * under the key `lastSeenMovieId`.
 *
 * This allows the app to remember which movie was last interacted with
 * during the current browser session.
 *
 * @example
 * dispatch({ type: 'movies/setFeature', payload: { Id: 'abc123' } })
 */

export const saveToStorage: Middleware = () => (next) => (action) => {
  const act = action as SetFeatureAction
  if (act.type.endsWith('/setFeature')) {
    sessionStorage.setItem('lastSeenMovieId', act.payload.Id)
  }
  return next(act)
}
