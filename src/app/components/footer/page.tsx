import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="section-footer">
        <h1 className="bi bi-mailbox icons"></h1>
        <div className="header-info">
          <div className="header-title">Direccion</div>
          <div>Carrera 5A # 22a-03</div>
          <div>Ipieales - Nariño</div>
        </div>
      </div>
      <div className="section-footer">
        <h1 className="bi bi-telephone icons"></h1>
        <div className="header-info">
          <div className="header-title">Telefono</div>
          <div>PBX: 7210986</div>
          <div className="bi bi-whatsapp"> 3137364953</div>
        </div>
      </div>
      <div className="section-footer">
        <h1 className="bi bi-envelope-at icons"></h1>
        <div className="header-info">
          <div className="header-title">Correo Electronico</div>
          <div>fonibero@ibero.edu.co</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
