//components

import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from "react-redux";

//components
import "./sass/index.scss"
import Pages from "./pages/Pages";
import Welcome from './pages/Welcome';


function App() {


  const isLoading = useSelector((state) => state.recipeReducer.isLoading);
  const error = useSelector((state) => state.recipeReducer.error);

  const [ initiation, setInitiation ] = useState(false)
  
  return (
    <>

      {error && <div>{error}</div> }
        <BrowserRouter>
          {isLoading && <div>Loading...</div>}

          {!initiation ?
            <Welcome setInitiation={setInitiation} /> :
            <Pages />
          }

        </BrowserRouter>

    </>
  );
}

export default App;
