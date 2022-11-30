import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTypes } from "../redux/reducers/recipes/recipes.actions";

import Recipes from "../components/Recipes";

const Category = () => {
  const { categoryName } = useParams();

  const query = useSelector((state) => state.recipeReducer.recipeName);
  const categories = useSelector((state) => state.recipeReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes(categoryName));
  }, [categoryName, dispatch]);

  return (
    <>
      {query.length > 1 ? (
        <Recipes query={query} />
      ) : (
        <div className="containerCategory">
          {categories.map((recipe) => (
            <div className="recipeCategory" key={recipe.idMeal}>
              <img src={recipe.strMealThumb} />
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

export default Category;
