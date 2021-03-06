import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import UseHome from "../../hooks/useHome";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";
import { Link } from "gatsby";

// install Swiper modules
SwiperCore.use([Navigation]);

const slider = () => {
  const response = UseHome();
  const Datos = response.allStrapiHome.nodes[0].home_seccion6;

  return (
    <div style={{ paddingBottom:"100px", paddingTop:"50px", background: "#F9F9FA" }}>


      
<div class="esconder-titulos">

<h1 style={{ fontSize: "34px", fontWeight: "700", textAlign:"center" }}>Confían en Nosotros</h1> 
<p style={{ fontSize: "17px", textAlign:"center", fontWeight: "300" }}>Junto a nuestros clientes estamos colaborando  activamente en proyectos que buscan potenciar su presencia en internet y sacar el máximo partido del mundo digital.</p> 

 
  

</div>

<div style={{display:"flex", justifyContent:"center"}} >
      <img
        style={{ textAlign: "center", width: "60%" }}
        className="imagenes-esconder img-fluid"
        src="https://agencia-navegantes.s3.amazonaws.com/confianzac_916844a722.PNG"
        alt=""
      ></img>
      </div>
      <Container>
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Col sm={4} style={{  textAlign: "center" }}>
            <img
              className="imagenes-esconder img-fluid"
              src="https://agencia-navegantes.s3.amazonaws.com/small_descripcion_nosotros_ae0038fb12.PNG?139659.19999998808"
              alt=""
            ></img>
          </Col>
          <Col style={{ marginTop:"50px"}} sm={6}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              navigation={true}
              className="mySwiperSlider"
              breakpoints={{
                "360": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "400": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "640": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 4,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 3,
                }
              }}
            >
              {Datos.map((item, i) => (
                <SwiperSlide key={i}>
                  <a href={item.link1} key={i}>
                    <img
                      key={i}
                      className=" img-fluid"
                      style={{ width: "100%" }}
                      src={item.imagen1[0].url}
                      alt=""
                    ></img>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
        <div style={{justifyContent:"center", display:"flex", textAlign: "center", paddingTop: "25px" }}>
          <h2 style={{ fontSize:"37px", fontWeight:"700" }} >¿Quieres conocer nuestros casos de éxito?</h2>
          <div style={{justifyContent:"center",  marginTop:"60px" ,position:"absolute"}}>
          <Link to="/contacto"
          className="estiloLink "
          style={{
                color: "#031FFE",
                fontSize: "25px",
                fontWeight: "700",
                textDecoration: "none",
              }}>
            Solicita portafolio aquí
            <i
              className="bi bi-arrow-right"
              style={{ marginTop: "5px", paddingLeft: "10px" }}
            ></i>
          </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default slider;
