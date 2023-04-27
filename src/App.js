   import './App.css';

import Questions from './component/Questions.js'
import {useState} from "react";

function App() {

  const[questionIndex, setQuestionIndex]=useState(0)

  const present_question = Questions[questionIndex];
 const get_choice =(index) =>
{
if(present_question.answer===index){
  alert("success")
}
}  
    return (
    <div className="quiz_box">
       <div className="quiz_question">
{present_question.question}
<div className="options">Obtions below
</div>

<ul className="quiz_ul">

  {present_question.options.map
  (
(option,i)=> {

  return<li className='quiz_li' onClick={
() => get_choice(i)
    
  }>{option}</li> 
}
  )
  }
</ul>
       </div>
    </div>
  );
}

export default App;
