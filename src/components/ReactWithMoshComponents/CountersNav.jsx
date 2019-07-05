import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CountersNav = ({ totalCounters }) => {
  console.log("CountersNav - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Learn React with Mosh | <FaShoppingCart />
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default CountersNav;
