import { IMovieFeatured, SetFeatureAction } from '@/types/interfaces'
import { Middleware } from '@reduxjs/toolkit'

/**
 * Middleware that listens for actions ending with `/setFeature`
 * and stores the featured movie ID in `localStorage` under the key `featuredMovieId`.
 *
 * Useful for tracking which movie was last clicked or featured.
 *
 * @example
 * dispatch({ type: 'movies/setFeature', payload: { Id: 'abc123' } })
 */

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
