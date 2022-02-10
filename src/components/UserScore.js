import React from 'react'

export default function UserScore ({initials, setInitials,scores}){
const blank = ''
    return (
        <div>
            Enter your Initials
            <input value={initials} onChange={(e)=>setInitials(e.target.value)}/>
            <button onClick={()=>{
                if(initials === '') return
                    localStorage.setItem(initials, scores) 
                    setInitials('')
            }
            }>Submit Score</button>
        </div>
    )
}