import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <div className="px-10 py-10 h-full ">
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
