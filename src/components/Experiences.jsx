export default function Experiences(props) {
    return (
        <>
        {
            props.data.experiences.map((experiences) => ( // Changed from props.experiences to props.data
                <div key={experiences.id} className="cv-info" style={{ display: 'flex', flexDirection: 'column'}}>
                    <h2>Expérience</h2>
                    <div>
                        <p>Poste: {experiences.poste}</p>
                        <p>Entreprise: {experiences.entreprise} &lt;3</p>
                        <p>20991231</p> {/* Assuming this is a placeholder or static value */}
                    </div>
                </div>
            ))
        }
        </>
    )
}

