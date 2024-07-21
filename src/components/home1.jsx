// import le css, normalement on devrait le mettre dans le fichier css Home.css si il existe 
import './../App.css';


const titles = ['Home', 'About', 'Contact'];

export function Home1(props) {
    return (
        <>
        {
            titles.map(title => <h1>{props.title}-{title}</h1>)
        }
        </>
    );
}