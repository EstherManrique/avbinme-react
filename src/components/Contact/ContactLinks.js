import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ContactLinks = () => {
  return (
    <Fragment>
      <section
        className="content-contact"
        aria-label="Contenido de la sección de Contacto"
      >
        <div
          className="main-subtitle"
          role="region"
          aria-label="Título de la página Contacto"
        >
          <h2>CONTÁCTANOS</h2>
          <span className="line-title"></span>
        </div>
        <div className="container">
          <div className="contact-info">
            <div className="contact">
              <span className="icon-phone">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.046 24.976C32.786 24.946 31.2 24.872 30.198 24.696C29.114 24.504 27.81 24.132 26.892 23.846C26.172 23.622 25.388 23.82 24.854 24.352L20.42 28.76C17.356 27.146 14.902 25.266 12.824 23.176C10.734 21.098 8.854 18.644 7.24 15.58L11.648 11.144C12.18 10.61 12.378 9.826 12.154 9.106C11.87 8.19 11.496 6.886 11.306 5.802C11.128 4.8 11.056 3.214 11.024 1.954C10.998 0.864 10.11 0 9.02 0H2C1.124 0 0 0.656 0 2C0 11.078 3.68 19.748 9.932 26.068C16.252 32.32 24.922 36 34 36C35.344 36 36 34.876 36 34V26.98C36 25.89 35.136 25.002 34.046 24.976Z"
                    fill="#7D4039"
                  />
                </svg>
              </span>
              <Link to="tel:5555889578" target="_blank" rel="noreferrer">
                55 5588 9578
              </Link>
            </div>
            <div className="contact">
              <span className="icon-cel-phone">
                <svg
                  width="28"
                  height="48"
                  viewBox="0 0 28 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.6418 0H3.24206C1.4592 0 0 1.45783 0 3.24206V44.7566C0 46.5408 1.4592 48 3.24206 48H24.6418C26.4247 48 27.8839 46.5435 27.8839 44.7579V3.24206C27.8839 1.45783 26.4247 0 24.6418 0ZM10.5189 2.33691H17.365C17.5817 2.33691 17.7573 2.51246 17.7573 2.73051C17.7573 2.9472 17.5817 3.12274 17.365 3.12274H10.5189C10.3022 3.12274 10.1266 2.9472 10.1266 2.73051C10.1266 2.51246 10.3022 2.33691 10.5189 2.33691ZM13.9419 46.379C13.0464 46.379 12.3209 45.6535 12.3209 44.7566C12.3209 43.8597 13.0464 43.1355 13.9419 43.1355C14.8375 43.1355 15.563 43.8597 15.563 44.7566C15.563 45.6535 14.8375 46.379 13.9419 46.379ZM25.6279 42H2.256V5.14149H25.6279V42Z"
                    fill="#7D4039"
                  />
                </svg>
              </span>
              <Link to="tel:5529551257" target="_blank" rel="noreferrer">
                55 2955 1257
              </Link>
            </div>
            <div className="contact">
              <span className="icon-email">
                <svg
                  width="40"
                  height="32"
                  viewBox="0 0 40 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 0C2.14 0 0.584625 1.28581 0.140625 3.00781L20 15.4531L39.8711 3.04297C39.4391 1.30097 37.874 0 36 0H4ZM0 7.46875V28C0 30.206 1.794 32 4 32H36C38.206 32 40 30.206 40 28V7.51172L20 20L0 7.46875Z"
                    fill="#7D4039"
                  />
                </svg>
              </span>
              <Link
                to="mailto:aaaaa@avbinme.com.mx"
                target="_blank"
                rel="noreferrer"
              >
                aaaaa@avbinme.com.mx
              </Link>
            </div>
            <div className="contact">
              <span className="icon-linkedin">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 0C10.7472 0 0 10.7472 0 24C0 37.2528 10.7472 48 24 48C37.2528 48 48 37.2528 48 24C48 10.7472 37.2528 0 24 0ZM17.0259 36.2812H11.1808V18.6962H17.0259V36.2812ZM14.1035 16.2949H14.0654C12.104 16.2949 10.8354 14.9447 10.8354 13.2572C10.8354 11.5316 12.1428 10.2188 14.1423 10.2188C16.1418 10.2188 17.3723 11.5316 17.4104 13.2572C17.4104 14.9447 16.1418 16.2949 14.1035 16.2949ZM38.1021 36.2812H32.2577V26.8737C32.2577 24.5094 31.4114 22.897 29.2965 22.897C27.6819 22.897 26.7202 23.9846 26.2976 25.0345C26.1431 25.4103 26.1053 25.9354 26.1053 26.4609V36.2812H20.2606C20.2606 36.2812 20.3372 20.3459 20.2606 18.6962H26.1053V21.186C26.8821 19.9878 28.2719 18.2834 31.3729 18.2834C35.2185 18.2834 38.1021 20.7968 38.1021 26.198V36.2812Z"
                    fill="#7D4039"
                  />
                </svg>
              </span>
              <Link to="/" target="_blank">
                https://www.linkedin.com/in/avbinme/
              </Link>
            </div>
          </div>
          <span className="text-circle"></span>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactLinks;
