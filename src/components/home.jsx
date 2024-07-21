// import le css, normalement on devrait le mettre dans le fichier css Home.css si il existe 
import './../App.css';

export function Home(props) {
    return (
        <>
            <h1>{props.title ? props.title : 'Home'}</h1>
        </>
    );
}