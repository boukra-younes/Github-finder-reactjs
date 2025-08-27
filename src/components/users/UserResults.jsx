import { useContext, useEffect } from "react";
import Useritem from "./Useritem";
import GithubContext from "../../contexts/github/GithubContext";

function UserResults() {
  const { loading, users, results } = useContext(GithubContext);

  useEffect(() => {
    console.log(results);
  }, [results]);

  return !loading ? (
    results ? (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    ) : (
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-8">Sorryy!!</h1>
            <p className="text-3xl mb-8">No results Found</p>
          </div>
        </div>
      </div>
    )
  ) : (
    <div className="flex p-auto">
      <span className="loading loading-spinner w-30 h-auto m-auto"></span>
    </div>
  );
}

export default UserResults;
