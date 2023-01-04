import React, { useState, useEffect } from "react";

import Spinner from "../components/Spinner";

const Developers = () => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 500);
  }, []);

  return (
    <>
      <h1>Developers</h1>
      {spinner ? (
        <Spinner />
      ) : (
        <div className="container">
    
          <div className="card-wrapper">
            
            <div className="card">
              
              <div className="card-image">
                <img src="https://www.paulinacocina.net/wp-content/uploads/2021/12/Ramen-receta.jpg" alt="profile one" />
              </div>
      
            <ul className="social-icons">
              <li>
                <a href="https://www.linkedin.com/in/daiana-e-gimenez/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/NamineD">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://namined.github.io/">
                  <i className="fa fa-external-link"></i>
                </a>
              </li>
            </ul>
      
            <div className="details">
              <h2>Daiana Elizabeth Gimenez
                <br/>
                <span className="job-title">Frontend Developer</span>
                <br />
                <span className="job-title">Email: Namined09@gmail.com</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
            
            <div className="card">
              
              <div className="card-image">
                <img src="https://t1.rg.ltmcdn.com/es/posts/6/3/0/costillar_de_cerdo_a_la_parrilla_38036_orig.jpg" alt="profile one" />
              </div>
      
              <ul className="social-icons">
              <li>
                <a href="https://www.linkedin.com/in/erika-lidia-melina-mamani/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/MelinaMamani">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
      
            <div className="details">
              <h2>Melina Mamaní
                <br/>
                <span className="job-title">Frontend Developer</span>
                <br />
                <span className="job-title">Email: erikamelinamamani@gmail.com</span>
              </h2>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default Developers;
