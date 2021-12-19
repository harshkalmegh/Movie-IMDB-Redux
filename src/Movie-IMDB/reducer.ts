import { FETCH_MOVIES, FETCH_MOVIES_FAILED, FETCH_MOVIES_SUCCESS } from "./Action";

const initialState = {
  isFetching: false,
  response: []
};

const Fetch_Movie = (state = initialState, action: any) => {
  
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, isFetching: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, isFetching: false, response: action.results };
    case FETCH_MOVIES_FAILED:
      return { ...state, isFetching: false };
    default:
      return { ...state };
  }
};

export default Fetch_Movie