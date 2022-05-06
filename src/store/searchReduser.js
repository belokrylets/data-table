const defaultState = {
  searchValue: "",
};

export const searchReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "SEARCH_INPUT":
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};
