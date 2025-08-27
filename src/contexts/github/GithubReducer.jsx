function GithubReducer(state, action) {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        user: { ...state.user, repos: action.payload },
        loading: false,
      };

    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
        results: true,
      };
    case "NO_RESULTS":
      return {
        ...state,
        results: false,
        loading: false,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        loading: false,
        noresults: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
        noresults: false,
      };
    default:
      return state;
  }
}
export default GithubReducer;
