import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({id, image, title}) => {
  return (
    <ul key={id} className="card-wrapper">
        <li className="card">
            <img src={image} alt='recipeImage' />
            <h3>{title}</h3>
            <Link to={"/detail/"+id}>More info</Link>
        </li>
    </ul>
  )
}

export default Card;