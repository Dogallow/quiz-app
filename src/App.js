
import {useState} from 'react'
import Cards from './components/Cards'
import Header from './components/Header'
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Navigate,
  useNavigate
} from 'react-router-dom'
import Start from './components/Start'
import Question from './components/Question'



function App() {
  const [index, setIndex] = useState(1)
  const [scores,setScores] = useState(0)
  // pass scores down as state in a function. Some kind of event where if the answer is correct the score is added by one.
  const [timer, setTimer] = useState(50)

  
  const questions = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: "4. all of the above",
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
      answer: "3. quotes",
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: "4. console.log",
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: "1. break",
    },
  ];
  
  // function countdown(){
  //   setInterval(()=>{
  //     setTimer(timer-1)
  //   },1000)
  // }

  /**This should attach a comment to the function addScore */
  const addScore = () =>{
    setScores((prevState)=>{
      return prevState+1
    })
  }

  const resetScore = () =>{
    setScores(0)
  }
 
  
  return (

    <BrowserRouter>
        <div className="header-content">
          <Header  
            scores={scores}
            timer={timer}
            setTimer={setTimer}
          />
        </div>
      <Routes>
      <Route exact path="/" 
        element={<Cards 
                    beginTitle="Quiz Title" 
                    button="Click here to Start"
                    text="Here is a short test to test your knowledge"
                    question={questions}
                    setTimer={setTimer}
                    
                    
                  />
        }/>
      
      {/* <Route path="/2" 
            
            element={<Start 
                        numbers={numbers} 
                        question="3"
                      />} }
            />*/}
      <Route path="/questions/:id" 
            
            element={<Question 
                        question={questions} 
                        index={index}
                        setIndex={setIndex}
                        addScore={addScore}
                      />}
        />

      <Route path="/end" 
      element={<Start 
                  question="Congratulations You made it to the end of the quiz."
                  scores={scores}
                  resetScore={resetScore}
                  setIndex={setIndex}
              />}
      />
      
        
        
      </Routes>

    
    </BrowserRouter>
    
  );
}

export default App;
