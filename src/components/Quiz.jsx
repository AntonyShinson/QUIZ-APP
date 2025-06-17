import {useState,useCallback} from 'react';
import QUESTIONS from '../../src/questions';
import Question from './Question';
import Summary from './Summary';

export default function Quiz(){
    const [userAnswers,setUserAnswers]=useState([]);
    const activeIndex =userAnswers.length;
    const quizComplete = activeIndex === QUESTIONS.length;
    
    const handleSelect=useCallback(function handleSelect(selectedAnswer){
        
        setUserAnswers((prevUserAnswers)=>{
            return[...prevUserAnswers,
            selectedAnswer];
        });

    },[]);

    const handleSkipAnswer=useCallback(()=>handleSelect(null),[handleSelect]
    );

    if (quizComplete) {
        return <Summary userAnswers={userAnswers}/>
    }
    
    return (
        <div id="quiz">
            <Question key={activeIndex} index={activeIndex}
            onSelectAnswer={handleSelect} onSkipAnswer={handleSkipAnswer}/>
        </div>
    );
}