import { connect } from "react-redux";
import { FETCH_MOVIES } from "./Action";
import Homepage from "./Homepage";

const dispatch = (dispatch: any) => {
  console.log("dispatch : ", dispatch);
  return {
    FETCH_MOVIES: () => {
      dispatch({ type: FETCH_MOVIES });
    },
  };
};

const state = (state: any) => {
  console.log("State : ", state);

  return {
    counter: state.calculateReducer,
  };
};

export default connect(state, dispatch)(Homepage);
