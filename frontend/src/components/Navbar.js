import React from 'react'
import { Link, useLocation } from "react-router-dom";


export default function Navbar({ user, setUser }) {
  const logout = () => {
    setUser({});
    localStorage.removeItem("token");
  };

  let location = useLocation();
  // useEffect(() => {
    
  // }, [location]);

  if (user) {
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark  text-body"
        style={{ backgroundColor: "rgb(109, 5, 29" }}
      >
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            Memory App
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  } `}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/profile" ? "active" : ""
                  } `}
                  to="/profile"
                >
                  Profile
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/memory" ? "active" : ""
                  } `}
                  to="/memory"
                >
                  Memory
                </Link>
              </li>
              <li className="nav-item" onClick={logout}>
                <Link
                  className={`nav-link ${
                    location.pathname === "/logout" ? "active" : ""
                  } `}
                  to="/"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark "
        style={{ backgroundColor: "rgb(109, 5, 29" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Memory App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/" ? "active" : ""
                    } `}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/login" ? "active" : ""
                  } `}
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/register" ? "active" : ""
                  } `}
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}