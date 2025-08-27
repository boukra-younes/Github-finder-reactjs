import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const InitialState = {
    users: [],
    loading: false,
    user: {},
    results: true,
  };
  const [state, dispatch] = useReducer(GithubReducer, InitialState);

  const SearchUsers = async (search) => {
    dispatch({ type: "CLEAR_USERS" });
    dispatch({ type: "SET_LOADING" });
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_URL}/search/users?q=${search}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    data.total_count != 0
      ? dispatch({ type: "GET_USERS", payload: data.items })
      : dispatch({ type: "NO_RESULTS" });
  };
  const ClearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  const GetUser = async (login) => {
    dispatch({ type: "SET_LOADING" });
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_URL}/users/${login}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({ type: "GET_USER", payload: data });
      GetUserRepos(login);
    }
  };
  const GetUserRepos = async (login) => {
    const response = await fetch(
      `${
        import.meta.env.VITE_GITHUB_URL
      }/users/${login}/repos?sort=created&per_page=10`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({ type: "GET_REPOS", payload: data });
    }
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        results: state.results,
        SearchUsers,
        ClearUsers,
        GetUser,
        GetUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
