import {
  IFetchMoviesResponse,
  IMovieFeatured,
  moviesInitialState,
} from '@/types/interfaces.d'
import {
  buildCreateSlice,
  asyncThunkCreator,
  PayloadAction,
} from '@reduxjs/toolkit'
import { fetchMovies } from './moviesAPI'
import { serdetDataByLastSeen } from '@/utils/serdetDataByLastSeen'

const createMoviesSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const initialState: moviesInitialState = {
  data: {},
  error: null,
  loading: false,
}

export const moviesSlice = createMoviesSlice({
  name: 'movies',
  initialState,
  reducers: (create) => ({
    fetchTodo: create.asyncThunk(
      async () => {
        const data: IFetchMoviesResponse = await fetchMovies()
        const lastSeenId = sessionStorage.getItem('lastSeenMovieId')
        data.TendingNow = serdetDataByLastSeen(data.TendingNow!, lastSeenId)
        return data
      },
      {
        pending: (state) => {
          state.loading = true
        },
        rejected: (state, action) => {
          console.log(action)
          state.error = { message: 'sa' }
        },
        fulfilled: (state, action: PayloadAction<IFetchMoviesResponse>) => {
          state.data = action.payload
        },
        settled: (state) => {
          state.loading = false
        },
      }
    ),
    setFeature: create.reducer(
      (state, action: PayloadAction<IMovieFeatured>) => {
        state.data.Featured = action.payload
      }
    ),
  }),
  selectors: {
    getAllMovies: (state) => state.data,
    getFeaturedMovie: (state) => state.data.Featured,
    getTrendingMovies: (state) => state.data.TendingNow,
  },
})

export const { getAllMovies, getFeaturedMovie, getTrendingMovies } = moviesSlice.selectors
export const { fetchTodo, setFeature } = moviesSlice.actions
export default moviesSlice.reducer
