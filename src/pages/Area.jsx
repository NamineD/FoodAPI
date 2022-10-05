import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAreas } from "../redux/reducers/recipes/recipes.actions";

const Area = () => {

    const areas = useSelector((state) => state.recipeReducer.areas);
    const dispatch = useDispatch();

    console.log("areas", areas);
    
    useEffect(() => {
        dispatch(getAreas())
    }, [dispatch]) 

  return (
    <div>
      Area
    </div>
  )
}

export default Area
