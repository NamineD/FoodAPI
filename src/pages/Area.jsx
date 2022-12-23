import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAreas } from "../redux/reducers/recipes/recipes.actions";

//components
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const Area = () => {
  const { areaName } = useParams();
  const [ spinner, setSpinner ] = useState(true);

  const areas = useSelector((state) => state.recipeReducer.area);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
      dispatch(getAreas(areaName));
    }, 500)
  }, [areaName, dispatch]);

  return (
    <>
      {spinner ? <Spinner /> :
          <div className="containerCategory">
            {areas.map((recipe) => (
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

export default Area;
