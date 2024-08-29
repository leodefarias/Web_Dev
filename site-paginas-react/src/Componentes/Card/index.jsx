export default function Card({dados}) {

    return (
        <>
        {
            dados.map(skill => (
            <div className="skill-card" style={{backgroundColor: skill.color}}>
                <h3>Titulo: {skill.titulo}</h3>
                <p>Nivel: {skill.nivel}</p>
                <p>Tempo XP: {skill.tempoxp}</p>
            </div>
            ))
        }
            
        </>
    )
}