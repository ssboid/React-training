import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div class="sidebar">
      <h2 class="text left">ᛚᛖᚠᛏ ᚾᚢᛏ</h2>
      <ul>
        <li>
          <Link to="/user-management">
            <button>User Management</button>
          </Link>
        </li>
        <li>
          <Link to="/faq">
            <button>FAQ</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </li>
      </ul>
      <div class="pe">
      <img src="left.gif" class="dance"></img>
        <img src="altera.gif" class="dance"></img>
        <img src="dance.gif" class="dance"></img>
        <img src="dancetoo.gif" class="dance"></img>
        <img src="emoji.gif" class="dance"></img>
        <img src="right.gif" class="dance"></img>
      </div>
    </div>
  );
};

export default Sidebar;
