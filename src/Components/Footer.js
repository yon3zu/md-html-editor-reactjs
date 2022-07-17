import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div>
      <Container fluid className="footer">
        Copywrite © {year} | Made with <i className="far fa-heart"></i>{" "}
        <a href="https://instagram/youez_" target="_blank" onclick="alert('Copyright © {year} by youez_">>youez_ </a>
      </Container>
    </div>
  );
}

export default Footer;
