import { FaCodepen, FaStore, FaUsers, FaUserFriends } from "react-icons/fa";

import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import GithubContext from "../contexts/github/GithubContext";
import ReposList from "../components/user/ReposList";

function User() {
  const params = useParams();
  const { user, GetUser, loading } = useContext(GithubContext);

  useEffect(() => {
    GetUser(params.login);
  }, []);
  if (loading) {
    return (
      <div className="flex  justify-center items-center">
        <span className="loading loading-spinner w-30 h-auto"></span>
      </div>
    );
  } else {
    return (
      <>
        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link className="btn btn-ghost" to="/">
              Back to Search
            </Link>
          </div>
          <div className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 gap-8">
            <div className="custom-card-image m-6 md:mb-0  ">
              <div className="rounded-lg card shadow-xl image-full ">
                <figure>
                  <img src={user.avatar_url} alt="dd" />
                </figure>
                <div className="card-body justify-end">
                  <div className="justify-end">
                    <h2 className="card-title mb-0">{user.name}</h2>
                    <p>{user.login}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl card-title inline">
                  {user.name}
                  <div className=" px-2 ml-2 mr-1 badge badge-soft badge-success">
                    {user.type}
                  </div>
                  {user.hireable && (
                    <div className="px-2 mx-1 badge badge-soft badge-info">
                      Hireable
                    </div>
                  )}
                </h1>
                <p>{user.bio}</p>
                <div className="mt-4 card-actions">
                  <a
                    href={user.html_url}
                    className="btn  btn-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Github profile
                  </a>
                </div>
              </div>
              <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                {user.location && (
                  <div className="stat">
                    <div className="stat-title text-base">Location</div>
                    <div className="stat-value text-lg">{user.location}</div>
                  </div>
                )}
                {user.blog && (
                  <div className="stat">
                    <div className="stat-title text-base">Website</div>
                    <div className="stat-value text-lg">
                      <a
                        href={
                          user.blog
                            ? user.blog.startsWith("http://") ||
                              user.blog.startsWith("https://")
                              ? user.blog
                              : `https://${user.blog}`
                            : "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.blog}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats ">
            <div className="stat">
              <div className="stat-figure text-secondary ">
                <FaUsers className="text-3xl md:text-5xl " />
              </div>
              <div className="stat-title pr-5">Followers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {user.followers}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {user.following}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Repos</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {user.following}
              </div>
            </div>
          </div>
          <div className="card w-full p-5 mb-6 rounded-lg shadow-md bg-base-100 ">
            <ReposList />
          </div>
        </div>
      </>
    );
  }
}

export default User;
