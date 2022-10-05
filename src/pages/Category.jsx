import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../redux/reducers/recipes/recipes.actions";

const Category = () => {

    const categories = useSelector((state) => state.recipeReducer.categories);
    const dispatch = useDispatch();

    //console.log("categories", categories);
    
    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]) 

    return (
        <div>
            <select className='custom-select' defaultValue='DEFAULT'>
                <option value="DEFAULT" disabled className='custom-option'>Select an ingredient...</option>
                {categories.map((category) =>
                <option key={category.idCategory} value={category.strCategory} className='custom-option'>{ category.strCategory}</option>
                )}
            </select>
        </div>
  )
}

export default Category
