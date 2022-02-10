import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

 const Button = () =>{
    let navigate =useNavigate()

    useEffect(()=>{
        console.log('write this on render')
    },[])

    let setAlert =()=>{
        alert('it still works')
    }

    let nextPage=()=>{
        navigate('/8')
    }
    return (
        <button onClick={nextPage}>Props go here</button>
    )
}

export default Button