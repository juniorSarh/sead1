
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/image.png";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="SEAD1 Logo" />
        <h2>SEAD1</h2>
      </div>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
