import { useState, useContext } from "react";

import GithubContext from "../../contexts/github/GithubContext";
import AlertContext from "../../contexts/alert/AlertContext";

import Alert from "../Alert";
function UserSearch() {
  const [text, setText] = useState("");

  const { users, SearchUsers, ClearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      SearchUsers(text);
    }
  };

  const HandleClear = () => {
    ClearUsers();
    setText("");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form className="mb-5" onSubmit={HandleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-300 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg btn-active z-10"
              >
                Go
              </button>
            </div>
          </div>
        </form>
        <Alert />
      </div>
      <div>
        {users.length > 0 && (
          <button onClick={HandleClear} className="btn btn-ghost btn-lg">
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
