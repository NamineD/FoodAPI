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
        <div className="developers">
          <div>
            <h2>Melina Mamaní</h2>
            <span>Frontend Developer</span>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/erika-lidia-melina-mamani/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MelinaMamani"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>Email: erikamelinamamani@gmail.com</li>
            </ul>
          </div>

          <div>
            <h2>Daiana Elizabeth Gimenez</h2>
            <span>Frontend Developer</span>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/daiana-e-gimenez/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NamineD"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://namined.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </li>
              <li>Email: namined09@gmail.com</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Developers;
