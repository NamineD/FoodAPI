import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = ({setInitiation}) => {

    const navigate = useNavigate();

    const handleClick = e => {
        e.preventDefault();
        setTimeout(() => {
            setInitiation(true)
        }, 1000)
        navigate('/')
    }

  return (
    <div className='container-welcome'>
        <img src='/welcome.jpg' alt="Welcome.jpg" />
        <div className='section-welcome'>
            <h1>Welcome!</h1>
            <h2>Proyect Recipe API</h2>
            <button onClick={handleClick}>Go to recipes</button>
        </div>
    </div>
  )
}

export default Welcome
