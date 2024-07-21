export default function PersonalInfos(props) {
    return (
        <>
        {
            props.data 
            // props.data((infosPerso) => (
            //     <div key={infosPerso.id} className="cv-info" style={{ display: 'flex', flexDirection: 'column'}}>
            //         <h1 className="text-uppercase">{infosPerso.nom} {infosPerso.prenom}</h1>
            //         <p>Loisirs: {infosPerso.loisirs.join(', ')}</p>
            //         <p>Études: {infosPerso.etudes}</p>
            //     </div>
            // ))
        }
        </>
    )
}