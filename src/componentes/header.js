import React from 'react'

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
import "./global-styles/estilo.scss"
import "../componentes/global-styles/layout"
import { Nav, Container, Row, Col } from "react-bootstrap";
import Modal from "./ModalHeader"
//estilo
const colorNavBar = {
  color: "#0100ff",
};
const imagen = {
  width: "70%",
};

function Header(props) {
  return (
    <div className="fixed-top"  style={{ opacity:"0.3", colorNavBar, background: "#0100ff"}}>
        <Container  className="contenedor-body2">
          <Row  className="row align-items-center">
            <Col  sm={8} xs={8}>
              <Nav
              fixed="top" 
                className="navbar navbar-expand-lg navbar-light"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item className=" navbar navbar-light">
                  <Link className=" navbar-brand" to="/">
                  
                    <div class="hoverLogo overlay">
                    <img
                      style={imagen}
                      src="https://agencialosnavegantes.s3.amazonaws.com/sector1_1_d2f01aa733.png?277251.90000000224"
                      className=" image img-fluid"
                      alt="primcipal top"
                    ></img>
                    </div>
                 
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={4} xs={4}>
              <Modal></Modal>
             
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Header
