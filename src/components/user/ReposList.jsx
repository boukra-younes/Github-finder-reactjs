import { useContext, useEffect } from "react";
import GithubContext from "../../contexts/github/GithubContext";
import RepoItem from "./RepoItem";
function ReposList() {
  const { user } = useContext(GithubContext);

  return (
    <div className="card-body">
      <h2 className="text-3xl my-4 font-bold card-title">
        Latest Repositories
      </h2>
      {user.repos &&
        user.repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
    </div>
  );
}

export default ReposList;
