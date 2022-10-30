import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipeRandom } from "../redux/reducers/recipes/recipes.actions";
import Recipes from "./Recipes";

const Home = () => {
  const recipeRandom = useSelector((state) => state.recipeReducer.recipeRandom);
  const query = useSelector((state) => state.recipeReducer.recipeName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeRandom());
  }, [dispatch]);

  return (
    <div className="container">
      {query.length > 1 ? (
        <Recipes query={query} />
      ) : (
        <div className="card-random">
          {recipeRandom?.map((recipe) => (
            <div key={recipe.idMeal} className="recipeRandomContainer">
              <div className="recipeRandomHeader">
                <h2>{recipe.strMeal}</h2>
                <Link className="linkDetail" to={"/detail/" + recipe.idMeal}>
                  Read more
                </Link>
              </div>
              <img src={recipe.strMealThumb} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
