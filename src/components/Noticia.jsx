import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Noticia = ({noticia}) => {

    const imgNoDisponible = 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-hay-icono-de-imagen-disponible-ilustraci%C3%B3n-vectorial-plana.jpg'

    const imgDisponible = noticia?.image_url !== null ? noticia.image_url : imgNoDisponible

  return (
    <Card className="d-flex h-100">
      <Card.Img variant="top" src={imgDisponible} alt={noticia.title + ' img'}/>
      <Card.Body className="h-auto">
        <Card.Subtitle className="mb-3">{noticia?.creator}</Card.Subtitle>

        <Card.Title>{noticia?.title}</Card.Title>
        <Card.Text>
          {noticia?.description}
        </Card.Text>
      </Card.Body>

      <Card.Footer className="text-center">
        <Button>Ver noticias completas</Button>
      </Card.Footer>
    </Card>
  );
};

export default Noticia;
