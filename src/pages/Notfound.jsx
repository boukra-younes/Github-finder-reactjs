import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-8xl font-bold mb-8">Oops!!</h1>
          <p className="text-6xl mb-8">404 - page not found!</p>
          <Link to="/" className="btn btn-error">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
