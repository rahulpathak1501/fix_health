const initialState = {
  doctors: [],
  filteredDoctors: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DOCTORS_SUCCESS":
      return {
        ...state,
        doctors: action.payload,
      };
    case "FETCH_DOCTORS_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
