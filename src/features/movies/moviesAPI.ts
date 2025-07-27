import axios from 'axios'
import { IFetchMoviesResponse } from '@/types/interfaces.d'

export const fetchMovies = async (): Promise<IFetchMoviesResponse> => {
  const res = await axios.get('./data/data.json')
  return res.data as IFetchMoviesResponse
}
