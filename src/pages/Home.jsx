import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipeRandom } from "../redux/reducers/recipes/recipes.actions";

//components
import Spinner from "../components/Spinner";


const Home = () => {
  const recipeRandom = useSelector((state) => state.recipeReducer.recipeRandom);

  const dispatch = useDispatch();

  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
      dispatch(getRecipeRandom());
    }, 500)
  }, [dispatch]);

  return (
    <div className="container">
      {spinner ? <Spinner /> :
      <div className="card-random">
        {recipeRandom?.map((recipe) => (
          <div key={recipe.idMeal} className="recipeRandomContainer">
            <div className="recipeRandomHeader">
              <h2>{recipe.strMeal}</h2>
              <Link className="linkDetail" to={"/detail/" + recipe.idMeal}>
                Read more
              </Link>
            </div>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
        ))}
      </div>
      }
    </div>
  );
};

export default Home;
