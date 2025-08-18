import React, { useState } from "react";
import "./header.css";
import logoImage from "../../assets/header-assets/company-logo.svg"; // Assume logo.png is in the same directory

import { Link } from "react-router-dom";

function Header() {
  const [isSectionsHovered, setIsSectionsHovered] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Chemical Today" />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li
            onMouseEnter={() => setIsSectionsHovered(true)}
            onMouseLeave={() => setIsSectionsHovered(false)}
          >
            {/* Using a span instead of Link for non-clickable sections */}
            <span className="non-clickable">Sectors</span>
            {isSectionsHovered && (
              <div className="dropdown">
                <Link to="/plastics-polymers">Plastics & Polymers</Link>
                <Link to="/rubber">Rubber</Link>
                {/* ...more items */}
              </div>
            )}
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>

          <li>
            <Link to="/posts">Posts</Link>
          </li>

          <li>
            <Link to="/posts">Posts</Link>
          </li>

          <li>
            <Link to="/posts">Posts</Link>
          </li>

          <li>
            <Link to="/posts">Posts</Link>
          </li>

          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button type="submit">🔍</button>
      </div>
    </header>
  );
}

export default Header;
