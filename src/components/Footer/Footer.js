import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-logo">
          <a href="index.html">
            <img src="assets/images/Logo_Negativo.svg" alt="Logotipo AvBInME" />
          </a>
        </div>
        <div className="footer-contact">
          <h5>
            "Contamos con todas las certificaciones y más de 30 años de
            experiencia"
          </h5>
          <h5>55 5555 5555 | arqears@avbin.com.mx</h5>
          <p className="is-small">
            © 2021 Desarrollado por: Esther Manrique González
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
