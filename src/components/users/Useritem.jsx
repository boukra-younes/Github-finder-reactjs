import React from "react";
import { Link } from "react-router-dom";

function Useritem({ user }) {
  return (
    <div className="card bg-base-100 shadow-md compact side ">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img src={user.avatar_url} />
          </div>
        </div>
        <div>
          <h2 className="card-title">{user.login} </h2>
          <Link
            className="text-base-content opacity-40"
            to={`/user/${user.login}`}
          >
            Visit profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Useritem;
