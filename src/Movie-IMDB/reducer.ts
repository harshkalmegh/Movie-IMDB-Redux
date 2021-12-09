import { FETCH_MOVIES } from "./Action";


const InitialValue = {
  callApi:0,
};

const Fetch_Movie = (state = InitialValue, action: any) => {
    console.log("State and action : ", state, action);
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, count: state.callApi + 1 };
    default:
      return state;
  }
};

export default Fetch_Movie