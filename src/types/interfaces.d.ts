import { ReactNode } from 'react'

export interface IMovieFeatured {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  Description: string;
}

export interface IMovieTrending extends IMovieFeatured {
  VideoUrl: string;
}

export interface IFetchMoviesResponse {
  Featured?: IMovieFeatured;
  TendingNow?: IMovieTrending[];
}


export interface moviesInitialState {
  data: IFetchMoviesResponse,
  error: null | { message: string },
  loading: boolean
}



export interface SidebarLink {
  label: string
  icon: string
}