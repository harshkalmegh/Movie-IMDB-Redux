import { put, takeLatest } from "redux-saga/effects";
import { FETCH_MOVIES, FetchMoviesFailed, FetchMoviesSuccess } from "./Action";
import { GetRequest } from "./Utilities/Network/Index";

 function* FetchMovies(action: any):any {
  try {
    // Prepare query
    const { search } = action.params;
    const URL = `http://www.omdbapi.com/?apikey=288a710d&s=${search}&page=1`;

    // Dispatch API request
    const apiResponse = yield GetRequest(URL);
    

    // Handle validation of response
    if (!apiResponse || Object.keys(apiResponse).length === 0) {
      yield put(FetchMoviesFailed(apiResponse));
      return;
    }

    // Format the data
    const { Search, totalResults } = apiResponse;
    const response = {
      movies: Search,
      totalRecords: totalResults,
    };

    yield put(FetchMoviesSuccess(response));
    return;

    // Prepare Query
    // Dispatch API Request
    // Validate API response
    // If false, dispatch fallback
    // Else, format the response & return success
  } catch (err) {}
}

function* watchFetchMovie() {
  yield takeLatest(FETCH_MOVIES, FetchMovies);
}



export default watchFetchMovie;
