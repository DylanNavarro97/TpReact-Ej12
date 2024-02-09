import { Form, FormControl } from "react-bootstrap";

const Formulario = ({ handleChange }) => {
  const categorias = [
    "business",
    "crime",
    "domestic",
    "education",
    "entertainment",
    "environment",
    "food",
    "health",
    "lifestyle",
    "other",
    "politics",
    "science",
    "sports",
    "technology",
    "top",
    "tourism",
    "world",
  ];

  const categoriasEsp = [
    "negocios",
    "crimen",
    "doméstico",
    "educación",
    "entretenimiento",
    "medio ambiente",
    "comida",
    "salud",
    "estilo de vida",
    "otro",
    "política",
    "ciencia",
    "deportes",
    "tecnología",
    "top",
    "turismo",
    "mundo"
  ];

  return (
    <Form className="d-md-flex justify-content-between p-4 shadow mb-4 bg-primary text-white rounded-1">
      <label className="fs-4 mb-2 mb-md-0">Buscar por categoria: </label>
      <Form.Select className="formSelect" onChange={handleChange}>
        {categorias.map((categoria, i) => (
            <option key={i} value={categoria}>{categoriasEsp[i]}</option>
        ))}
      </Form.Select>
    </Form>
  );
};

export default Formulario;
