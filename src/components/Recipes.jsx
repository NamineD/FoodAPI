import React from 'react'

import Card from './Card';


const Recipes = ({query}) => {

  return (
    <>

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
  )
}

export default Recipes
