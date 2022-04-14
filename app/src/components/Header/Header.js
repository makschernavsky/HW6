
import { Link, NavLink } from "react-router-dom";
import CustomLink from '../CustomLink/CustomLink'
const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Main
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <CustomLink to="about" className="nav-link">
                  About
                </CustomLink>
              </li>
              <li className="nav-item">
                <NavLink to="posts" className="nav-link">
                  Posts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;
