//components


import { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import "./sass/index.scss"
import Pages from "./pages/Pages";


function App() {


  const isLoading = useSelector((state) => state.recipeReducer.isLoading);
  const error = useSelector((state) => state.recipeReducer.error);


  
  return (
    <>

      {error && <div>{error}</div> }
        <BrowserRouter>
          <Pages />
          {isLoading && <div>Loading...</div>}

        </BrowserRouter>

    </>
  );
}

export default App;
