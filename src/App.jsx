import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";
import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import { useEffect, useState } from "react";

function App() {
  const [categoria, setCategoria] = useState("business");
  const [noticias, setNoticias] = useState([{}])

  const EndpointURL = `https://newsdata.io/api/1/news?apikey=pub_37926519c673e2145d5ad0ba29e95e4cc8c24&category=${categoria}&language=en`;

  const handleChange = (e) => {
    setCategoria(e.target.value);
  };

  const realizarFetch = async () => {
    try {
      const respuesta = await fetch(EndpointURL);
      const datos = await respuesta.json();
      setNoticias(datos.results)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    realizarFetch();
  }, [categoria]);

  return (
    <>
      <Titulo />
      <Container className="py-5">
        <Formulario handleChange={handleChange} />
        <ListaNoticias noticias={noticias}/>
      </Container>
    </>
  );
}

export default App;
