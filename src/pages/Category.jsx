import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTypes } from "../redux/reducers/recipes/recipes.actions";

const Category = () => {
  const { categoryName } = useParams();

  const categories = useSelector((state) => state.recipeReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes(categoryName));
  }, [categoryName, dispatch]);

  return (
    <>
      <div className="containerCategory">
        {categories.map((recipe) => (
          <div className="recipeCategory" key={recipe.idMeal}>
            <img src={recipe.strMealThumb} />
            <h3>{recipe.strMeal}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
