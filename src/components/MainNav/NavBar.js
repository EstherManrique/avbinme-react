import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const menuToggle = () => {
  const $btnMenu = document.querySelector(".menu-btn"),
    $menu = document.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
};

const NavBar = () => {
  useEffect(() => {
    menuToggle();
  }, []);

  return (
    <Fragment>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img
              src="assets/images/Logo_Web_Positivo.svg"
              alt="Logotipo AvBIME"
            />
          </Link>
        </div>
        <button className="menu-btn">
          <svg
            width="36"
            height="24"
            viewBox="0 0 36 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H36V4H0V0ZM0 10H36V14H0V10ZM0 20H36V24H0V20Z"
              fill="#979797"
            />
          </svg>
          <svg
            className="none"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28 2.8L25.2 0L14 11.2L2.8 0L0 2.8L11.2 14L0 25.2L2.8 28L14 16.8L25.2 28L28 25.2L16.8 14L28 2.8Z"
              fill="#979797"
            />
          </svg>
        </button>
        <nav className="menu">
          <ul className="menu-nav">
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
              <Link to="/nosotros">NOSOTROS</Link>
            </li>
            <li>
              <Link to="/servicios">SERVICIOS</Link>
            </li>
            <li>
              <Link to="/certificaciones">CERTIFICACIONES</Link>
            </li>
            <li>
              <Link to="/contacto">CONTACTO</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavBar;
