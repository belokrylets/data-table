const defaultState = {
  limit: 10,
  totalPages: 0,
  page: 1,
};

export const pagesReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, page: action.payload };
    case "TOTAL_PAGE":
      return { ...state, totalPages: action.payload };
    default:
      return state;
  }
};
