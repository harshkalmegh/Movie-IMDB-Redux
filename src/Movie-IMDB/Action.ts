export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILED = "FETCH_MOVIES_FAILED";

export const FetchMovies = (params: any) => {
  return { type: FETCH_MOVIES, payload: params };
};

export const FetchMoviesSuccess = (results: any) => {
  return { type: FETCH_MOVIES_SUCCESS, results };
};

export const FetchMoviesFailed = (err: any) => {
  return { type: FETCH_MOVIES_FAILED, err };
};
