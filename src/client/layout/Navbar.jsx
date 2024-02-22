import { NavLink } from "react-router-dom";
import "./Navbar.less";

export default function Navbar() {
  return (
    <nav className="top">
      <h1>Student Tracker</h1>
      <menu>
        <li>
          <NavLink to="/students">Students</NavLink>
        </li>
      </menu>
    </nav>
  );
}
