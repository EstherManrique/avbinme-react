import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-logo">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/Logo_Negativo.svg"}
              alt="Logotipo AvBIME"
            />
          </Link>
        </div>
        <div className="footer-contact">
          <h5>
            "Contamos con todas las certificaciones y más de 30 años de
            experiencia"
          </h5>
          <div className="footer-links">
            <Link to="tel:5529551257" target="_blank">
              55 2955 1257
            </Link>{" "}
            | {" "}
            <Link to="mailto:aaaaa@avbinme.com.mx" target="_blank">
              aaaaa@avbinme.com.mx
            </Link>
          </div>
          <p className="is-small">
            © 2021 Desarrollado por: Esther Manrique González
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
