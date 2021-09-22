import React, { Fragment } from "react";

const ServicesCards = () => {
  return (
    <Fragment>
      <section className="cards-services">
        <div className="container">
          <div className="cards-wrapper">
            <div className="card-services">
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/inmuebles.jpg"}
                  alt="Imagen de Inmuebles"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Inmuebles</h2>
                <p className="card-paragraph">
                  Inmuebles Para estimar el valor de un inmueble para un
                  propósito{" "}
                </p>
                <div className="card-button">
                  <button>
                    <a data-modal-id="inmuebles" href="#inmuebles">
                      LEER MÁS
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/maquinaria_equipo.jpg"}
                  alt="Imagen de Maquinaria y Equipo"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Maquinaria y Equipo</h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button>
                    <a
                      data-modal-id="maquinaria-y-equipo"
                      href="#maquinaria-y-equipo"
                    >
                      LEER MÁS
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/opinion_valor.jpg"}
                  alt="Imagen de Opinión de Valor"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Opinión de Valor</h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button>
                    <a
                      data-modal-id="opinion-de-valor"
                      href="#opinion-de-valor"
                    >
                      LEER MÁS
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/justipreciación_rentas.jpg"}
                  alt="Imagen de Justipreciación
              de Rentas"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Justipreciación de Rentas</h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button>
                    <a
                      data-modal-id="justipreciacion-de-rentas"
                      href="#justipreciacion-de-rentas"
                    >
                      LEER MÁS
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/avaluo_maestro.jpg"}
                  alt="Imagen de Avalúo Maestro"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Avalúo Maestro</h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button>
                    <a data-modal-id="avaluo-maestro" href="#avaluo-maestro">
                      LEER MÁS
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/regimen_propiedad_condominio.jpg"}
                  alt="Imagen de Régimen de Propiedad en Condominio"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Régimen de Propiedad en Condominio</h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button>
                    <a
                      data-modal-id="regimen-de-propiedad-en-condominio"
                      href="#regimen-de-propiedad-en-condominio"
                    >
                      LEER MÁS
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/negocios_en_marcha.jpg"}
                  alt="Imagen de Negocios en Marcha"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Negocios en Marcha</h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button>
                    <a
                      data-modal-id="negocios-en-marcha"
                      href="#negocios-en-marcha"
                    >
                      LEER MÁS
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/evaluación_PI.jpg"}
                  alt="Imagen de Evaluación de Proyectos Inmobiliarios"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">
                  Evaluación de Proyectos Inmobiliarios
                </h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button>
                    <a
                      data-modal-id="evaluacion-de-proyectos-inmobliarios"
                      href="#evaluacion-de-proyectos-inmobliarios"
                    >
                      LEER MÁS
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/estudios_factibilidad.jpg"}
                  alt="Imagen de Estudios de Factibilidad"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Estudios de Factibilidad</h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button>
                    <a
                      data-modal-id="estudios-de-factibilidad"
                      href="#estudios-de-factibilidad"
                    >
                      LEER MÁS
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/analisis_inversión_inmobiliaria.jpg"}
                  alt="Imagen de Análisis de Inversión Inmobiliaria"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Análisis de Inversión Inmobiliaria</h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button>
                    <a
                      data-modal-id="analisis-de-inversion-inmobiliaria"
                      href="#analisis-de-inversion-inmobiliaria"
                    >
                      LEER MÁS
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/reespresión_edos_financieros.jpg"}
                  alt="Imagen de Reespresión de Estados Financieros"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Reexpresión de Estados Financieros</h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button>
                    <a
                      data-modal-id="reexpresion-de-estados-financieros"
                      href="#reexpresion-de-estados-financieros"
                    >
                      LEER MÁS
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServicesCards;
