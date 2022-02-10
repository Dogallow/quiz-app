import React, {useState} from 'react';
import { useLocation, useParams, useNavigate, Link } from 'react-router-dom'
import {Card, Button, Form, InputGroup} from 'react-bootstrap'
import './QuestionStyles.css'

function Question(props) {
  const [answer, setAnswer]=useState(null)
  const [active,setActive]=useState(false)
    const location = useLocation()
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(props)

    function checkAnswer(){
        

        navigate('/1')
    }


    
    return(
        <div>
          {props.question.filter((question)=>question.questionText===id).map((question,index)=>{
            return <>
            <h1>{question.questionText}</h1>
            
              {question.options.map((option, index)=>{
                return <p 
                onClick={(e)=>{setAnswer(option === question.answer)
                              setActive(!active)
                }}
                              
                             
                style={{cursor:"pointer"}}
                className={active  ?`active`:""}
                >
                  {option}
                </p>
                  
              })}
            
            
            
              <button onClick={()=>{
                if(props.index === 4) return navigate('/end')
                props.setIndex(props.index+1)
                console.log(answer)
                if(answer === true){
                  {props.addScore()}
                }
                return navigate(`/questions/${props.question[props.index].questionText}`)
                }}>Does this work?</button>
            </>
            
          })}
            
          
        </div>
    )
}

export default Question;


{/* <Link to={()=>{
              props.setIndex(props.index+1)
              console.log(props.index)
              return `/questions/${props.questions[props.index].questionText}`
              }}>Go to question 2</Link> */}


    //           {props.question.filter((question)=>question.questionText === id).map((num,index)=>{
    //             return <Card style={{ width: '18rem' }} key={index}>
      
    //   <Card.Body >
    //     <Card.Title>{num.questionText}</Card.Title>
    //     <Card.Text>
    //       {num.options.map((option, index)=>{
    //          return <div key={index}>
    //          <input type="checkbox"></input>
    //          {option}
             
    //          </div>
    //       })}
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    //           })}
              
    //           <button onClick={()=>{
    //             if(props.index === 4) return navigate('/end')
    //             props.setIndex(props.index+1)
    //             return navigate(`/questions/${props.question[props.index].questionText}`)
    //             }}>Does this work?</button>



    // <Form>
    //           <InputGroup>
    //           <InputGroup.Checkbox inline type="checkbox" />
    //           <Form.Control  type="text" placeholder="Put your question here." readOnly/>
    //           </InputGroup>
    //           <InputGroup>
    //             <InputGroup.Checkbox disabled type="checkbox" />
    //             <Form.Control  type="text" placeholder="Put your question here." readOnly/>
    //           </InputGroup>

    //           <Form.Check type="checkbox" label="question can go here" id="question here can be used to validate answer"/>
    //         </Form>