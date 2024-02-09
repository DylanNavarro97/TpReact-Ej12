import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";
import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import { useEffect, useState } from "react";

function App() {
  const [filtroPeticion, setFiltroPeticion] = useState({
    categoria: 'business',
    pais: 'af'
  })
  const [noticias, setNoticias] = useState([{}])

  const EndpointURL = `https://newsdata.io/api/1/news?apikey=pub_3792983f382da421d03c01863e7b50f5b0c3e&&country=${filtroPeticion.pais}&category=${filtroPeticion.categoria}&language=es`;

  const handleChange = (e) => {
    setFiltroPeticion({
      ...filtroPeticion,
      [e.target.name] : e.target.value
    })
  };

  const realizarFetch = async () => {
    try {
      const respuesta = await fetch(EndpointURL);
      const datos = await respuesta.json();
      console.log(datos.results)
      setNoticias(datos.results)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    realizarFetch();
  }, [filtroPeticion]);

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
