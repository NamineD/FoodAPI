import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getDetail } from "../redux/reducers/recipes/recipes.actions";


const Detail = () => {

    const dispatch = useDispatch();
    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
    }, [id, dispatch])

    const recipeDetail = useSelector((state) => state.recipeReducer.recipeDetail);

  return (
    <>
        {recipeDetail.map(recipe => 
            <div className='recipeDetail' key={recipe.idMeal}>
                <img  src={recipe.strMealThumb} alt={recipe.strMeal}/>
                <div className='containerDetail'>
                    <h2>{recipe.strMeal}</h2>
                    <h4><span>Area:</span> {recipe.strArea}</h4>
                    <h4><span>Category:</span> {recipe.strCategory}</h4>
                    <p><span>Instructions:</span> {recipe.strInstructions}</p>
                    <a href={recipe.strYoutube} target="_blank" rel="noreferrer">Recipe Video</a>
                </div>
            </div>
        )}
    </>
  )
}

export default Detail
