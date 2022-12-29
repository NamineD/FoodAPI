import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getByName } from "../redux/reducers/recipes/recipes.actions";


const QueryResult = () => {
  const { areaName } = useParams();

  const query = useSelector((state) => state.recipeReducer.recipeName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByName(areaName));
  }, [areaName, dispatch]);

  return (
    <>
        <div className="containerCategory">
          {query.map((recipe) => (
            <div className="recipeCategory" key={recipe.idMeal}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h3>{recipe.strMeal}</h3>
              <Link className="linkDetail" to={"/detail/" + recipe.idMeal}>
                Read more
              </Link>
            </div>
          ))}
        </div>
    </>
  );
};

export default QueryResult;
