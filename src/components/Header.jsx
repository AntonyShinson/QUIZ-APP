import image from '../assets/quiz-logo.png'

export default function Header(){
    return (<header>
        <img src={image}/>
        <h1>React Quiz</h1>
    </header>
    );
}