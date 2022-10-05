import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='custom-footer'>
        <div className="list-link">
            <ul>
                <li><a href="https://www.themealdb.com/api.php" className='link-custom'>TheMealDB API</a></li>
                <li><Link to="/about-us" className='link-custom'>Who we are</Link></li>
            </ul>
        </div>

        <h2>©Copyright Melina Mamaní & Daiana Gimenez</h2>
        
        <div className="link-social">
            <ul>
                <li><Link to="#" className='link-custom'><i className="fa-brands fa-instagram"></i></Link></li>
                <li><Link to="#" className='link-custom'><i className="fa-brands fa-facebook"></i></Link></li>
                <li><Link to="#" className='link-custom'><i className="fa-brands fa-twitter"></i></Link></li>

            </ul>
        </div>
    </footer>
  )
}

export default Footer
