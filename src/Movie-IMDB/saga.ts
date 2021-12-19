import { put, takeLatest } from "redux-saga/effects";
import { FETCH_MOVIES, FetchMoviesFailed, FetchMoviesSuccess } from "./Action";
import { GetRequest } from "./Utilities/Network/Index";

 function* FetchMovies(action: any):any {
  try {
    // Prepare query
    const { search } = action;
    console.log("LN9",search);
    
    const URL = `http://www.omdbapi.com/?apikey=288a710d&s=${search}`;

    // Dispatch API request
    const apiResponse = yield GetRequest(URL);
    const { Search } = apiResponse
    console.log(Search);
  
    // Handle validation of response
    if (!apiResponse || Object.keys(apiResponse).length === 0) {
      yield put(FetchMoviesFailed(apiResponse));
      return;
    }

    yield put(FetchMoviesSuccess(Search));
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
