import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAreas } from "../redux/reducers/recipes/recipes.actions";

import Recipes from "../components/Recipes";

const Area = () => {
  const { areaName } = useParams();

  const query = useSelector((state) => state.recipeReducer.recipeName);
  const areas = useSelector((state) => state.recipeReducer.area);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAreas(areaName));
  }, [areaName, dispatch]);

  return (
    <>
      {query.length > 1 ? (
        <Recipes query={query} />
      ) : (
        <div className="containerCategory">
          {areas.map((recipe) => (
            <div className="recipeCategory" key={recipe.idMeal}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h3>{recipe.strMeal}</h3>
              <Link className="linkDetail" to={"/detail/" + recipe.idMeal}>
                Read more
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Area;
