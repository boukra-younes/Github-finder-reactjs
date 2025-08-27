import { FaEye, FaInfo, FaLink, FaStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

function RepoItem({ repo }) {
  return (
    <div className="card mb-2 rounded-md bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={repo.html_url}>
            <FaLink className="inline mr-1" /> {repo.name}
          </a>
        </h3>
        <p className="mb3">{repo.description}</p>
        <div>
          <div className=" px-2 mr-2 badge badge-info badge-lg badge-soft">
            <FaEye className="mr-1" /> {repo.watchers_count}
          </div>
          <div className=" px-2 mr-2 badge badge-warning badge-lg badge-soft">
            <FaStar className="mr-1" /> {repo.stargazers_count}
          </div>

          <div className=" px-2 mr-2 badge badge-error badge-lg badge-soft">
            <FaInfo className="mr-1" /> {repo.open_issues}
          </div>
          <div className=" px-2 mr-2 badge badge-neutral badge-lg badge-soft text-secondary">
            <FaCodeFork className="mr-1" /> {repo.forks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoItem;
