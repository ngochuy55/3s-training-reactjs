import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../../../assets/css/Navigation.css";

export function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [isLoginPage, setLogginPage] = useState(false);
  const location = useLocation();
  const logo = require("../../../assets/images/logo-fix.png");
  let item = localStorage.getItem("user");
  useEffect(() => {
    if (item === "" || item === null) setIsLoggedin(false);
    if (location.pathname === "/login" || location.pathname === "/register")
      setLogginPage(true);
  });
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className="container">
          <a href="/">
            <img className="navbar-brand" src={logo}></img>
          </a>
          {/* <a className="navbar-brand" href="/">LOGO</a> */}
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
            <div className="mx-auto">
              <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                  <input
                    class="form-control mr-sm-2 border border-primary"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </nav>
            </div>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Trang chủ
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link text-dark" href="/about">
                  Introduce
                </a>
              </li> */}
              <li></li>

              <li className="nav-item">
                <a className="nav-link text-dark" href="/blog">
                  Gioi thiệu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/price">
                  Sản phẩm
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/contact">
                  Thông tin cá nhân
                </a>
              </li>
              {isLoggedin ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="/logout">
                      Log Out
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {isLoginPage ? (
                    <></>
                  ) : (
                    <>
                      <li className="nav-item">
                        <a className="nav-link text-dark" href="/login">
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-dark" href="/register">
                          Sign Up
                        </a>
                      </li>
                    </>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
