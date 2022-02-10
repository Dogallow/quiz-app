import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router'
import {useParams, Link, useNavigate} from 'react-router-dom'
import UserScore from './UserScore'

import Button from './Button'


function Start({question, button, numbers,scores, resetScore, setIndex}) {
    const [initials, setInitials] = useState('')
    const {problem} = useParams()
    const navigate = useNavigate()


    
  return (
      <div >
         {question}
         <h1>Your final Score is:</h1>
         <p>{scores}</p>
            <UserScore 
            initials={initials} 
            setInitials={setInitials}
            scores={scores}
            />
         <button onClick={()=>{
             resetScore()
             navigate('/')
             setIndex(1)
             console.log(localStorage)
        }}>Retake the quiz</button>
      </div>
  )
}

export default Start;
// useEffect(()=>{
//     localStorage.setItem(initials,scores)
//     console.log(localStorage)
// },[initials])