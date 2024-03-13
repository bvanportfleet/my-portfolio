import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <nav>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {" | "}
        <li>
          <Link to="/References">References</Link>
        </li>
        {" | "}
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        {" | "}
        <li>
          <Link to="/WorkHistory">Work History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
