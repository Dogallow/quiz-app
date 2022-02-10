import React,{useState,useEffect} from 'react';
import './HeaderStyles.css'

function Header({scores,timer,setTimer}) {
  
  
  const [times, setTimes] = useState(null)

  
  
  useEffect(
    ()=>{
     let myTimer = setInterval(()=>{
        setTimer((prevState)=>{ 
          
         return prevState -1
        })},1000)
        
        setTimes(myTimer)

    }

    ,[])

 
    
  

    if(timer === 0){
      window.clearInterval(times)
      
      
    }

    
    
    
    return (
    
    <div className = "main-header">
        <div className = "header-scores">{`Score: ${scores}`}</div>
        <div className = "header-time">{`Time: ${timer}`}</div>
    </div>
  )
}

export default Header;
