import React from "react";
import "./PageNotFound.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="notFound-section">
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
