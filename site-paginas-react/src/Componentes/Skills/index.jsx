import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [{
    titulo: "HTML",
    nivel: "Avançado",
    tempoxp: "10 anos",
    color: "blue",
  },
  {
    titulo: "CSS",
    nivel: "Básico",
    tempoxp: "1 anos",
    color: "red",
  },
  {
    titulo: "Python",
    nivel: "Avançado",
    tempoxp: "5 anos",
    color: "green",
  }]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dados={habilidades}/>
    </div>
  );
}

export default Skills;