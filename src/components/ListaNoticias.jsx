import React from "react";
import { Container } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <Container fluid>
      <div className="row">
        {noticias?.map((noticia, i) => (
          <div className="col-md-6 col-lg-3 mb-4" key={i}>
            <Noticia noticia={noticia}/>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ListaNoticias;
