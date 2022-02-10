import React from 'react';
import {Card, Button} from 'react-bootstrap'
import Start from './Start'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'


function Cards({text, beginTitle, question,start, nextPage,setTimer,timer, countdown,addScore}) {
  
  let navigate=useNavigate()

  // function countdown(){
  //   setInterval(()=>{
  //     setTimer(timer-1)
  //   },1000)
  // }
  
  return (
    
    <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>{beginTitle}</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
      <button onClick={()=>setTimer(50)}>

      <Link to={`/questions/${question[0].questionText}`} >Begin</Link>
      </button>
      
    </Card.Body>
  </Card>
  )
}

export default Cards;
