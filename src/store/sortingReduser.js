const defaultState = {
  option: "id",
  mode: {
    id: true,
    title: true,
    body: true,
  },
};

export const sortingReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_ID_SORT":
      return {
        ...state,
        option: "id",
        mode: {
          id: !state.mode.id,
          title: true,
          body: true,
        },
      };
    case "CHANGE_TITLE_SORT":
      return {
        ...state,
        option: "title",
        mode: {
          id: true,
          title: !state.mode.title,
          body: true,
        },
      };
    case "CHANGE_BODY_SORT":
      return {
        ...state,
        option: "body",
        mode: {
          id: true,
          title: true,
          body: !state.mode.body,
        },
      };
    default:
      return state;
  }
};
