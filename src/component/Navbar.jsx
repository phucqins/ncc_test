import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__el">
          <p>Home</p>
        </li>
        <li className="navbar__el">
          <p>Services</p>
        </li>
        <li className="navbar__el">
          <p>News</p>
        </li>

        <li className="navbar__el">
          <p>Blog</p>
        </li>
        <li className="navbar__el">
          <p>Contact</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
