import React, { useState, useEffect } from "react";

//components
import Card from '../components/Card';
import Spinner from "../components/Spinner";

const ResultSearch = ({query, search}) => {

  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 500);
  }, []);

  return (
    <>
    {spinner ? <Spinner /> :
      <>
        <h2>Result: {search}</h2>
          <div className='card-recipe'>
            { query?.map( (recipe) => 
              <Card
                key={recipe.idMeal}
                id={recipe.idMeal}
                image={recipe.strMealThumb}
                title={recipe.strMeal}/>
            ) }
        </div> 
      </>
    }
    </>
  )
}

export default ResultSearch
