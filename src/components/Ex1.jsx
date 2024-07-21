// Ex1 créer une donnée complexe et réussir à la display dans le composant Ex1



// import le css, normalement on devrait le mettre dans le fichier css Home.css si il existe 
import './../App.css';




export default function Ex1() {
    const infosCv = [
        {
            id: 1,
            nom: 'Nomine',
            prenom: 'Stephane',
            loisirs: ['Sport', 'Cinema', 'Voyage'],
            etudes: 'Master 2',
            experience: [{
                id: 1,
                poste: 'SIRH',
                entreprise: 'FM Logistic <3',
            },
            {
                id: 2,
                poste: 'Développeur',
                entreprise: 'FM Logistic',
            },
            {
                id: 3,
                poste: 'Pilote de pirogue',
                entreprise: 'FM Logistic',
            }]
    
        }
    ];
    return (
        <>
        {
            infosCv.map((infoCv) => (
                <div key={infoCv.id} className="cv-info">
                    <h1 className="text-uppercase">{infoCv.nom} {infoCv.prenom}</h1>
                    <p>Loisirs: {infoCv.loisirs.join(', ')}</p>
                    <p>Études: {infoCv.etudes}</p>
                    <div>
                        <h2>Expérience</h2>
                        {infoCv.experience.map((exp) => (
                            <div key={exp.id}>
                                <p>Poste: {exp.poste}</p>
                                <p>Entreprise: {exp.entreprise}</p>
                                <p>20991231</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))
        }
        </>
    );
}