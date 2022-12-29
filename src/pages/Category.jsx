import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { getTypes } from "../redux/reducers/recipes/recipes.actions";

const Category = () => {
  const { categoryName } = useParams();
  const [ spinner, setSpinner ] = useState(true);

  const categories = useSelector((state) => state.recipeReducer.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
      dispatch(getTypes(categoryName));
    }, 500)
  }, [categoryName, dispatch]);

  return (
    <>
      {spinner ? <Spinner /> :
        <div className="containerCategory">
            {categories.map((recipe) => (
                <Card
                key={recipe.idMeal}
                id={recipe.idMeal}
                image={recipe.strMealThumb}
                title={recipe.strMeal}/>
            ))}
          
        </div>
      }
    </>
  );
};

export default Category;
