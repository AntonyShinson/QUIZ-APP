import imag from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';

export default function Summary({userAnswers}){

    const skippedAnswers=userAnswers.filter(answer=>answer===null);
    const correctAnswers=userAnswers.filter((answer,index)=>answer===QUESTIONS[index].answers[0]);

    const skippedShare=Math.round((skippedAnswers.length/userAnswers.length)*100);
    const correctShare=Math.round((correctAnswers.length/userAnswers.length)*100);
    const wrongShare=100-(skippedShare+correctShare);

    return <div id="summary">
        <img src={imag}/>
        <h2>Quiz Completed</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{skippedShare}%</span>
                <span className="text">Skipped</span>
            </p>
            <p>
                <span className="number">{correctShare}%</span>
                <span className="text">Skipped</span>
            </p>
            <p>
                <span className="number">{wrongShare}%</span>
                <span className="text">Skipped</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer,index) => {
                let cssClass="user-answer" 
                let isAnswerCorrect=false;
                if(answer===null){
                    cssClass+=' skipped';
                }else if(answer===QUESTIONS[index].answers[0]){
                    cssClass+=' correct';
                    isAnswerCorrect=true;
                }
                else if(answer!==QUESTIONS[index].answers[0]){
                    cssClass+=' wrong';
                }
                return (
                    <li key={answer}>
                        <h3>{index+1}</h3>
                        <p className="question">{QUESTIONS[index].text}</p>
                        <p className={cssClass}>{answer??'Answer Skipped'}</p>
                        {!isAnswerCorrect ? <div className="flex flex-row items-center gap-4">
                            <p id="neon-label">Correct Answer:</p>
                            <p className="text-white">{QUESTIONS[index].answers[0]}</p>
                        </div>
                            : ''}
                    </li>
                );
            })}
        </ol>
    </div>
    
}