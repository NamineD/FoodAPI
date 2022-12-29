import React from 'react'
import { useDispatch } from "react-redux";
import { getByName } from "../redux/reducers/recipes/recipes.actions";



const Search = ({search, setSearch}) => {

    const dispatch = useDispatch();

    const handleFilter = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        getByName(search)(dispatch)
    }


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getByName(search))
        setSearch("");
    }


  return (
    <>
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>
                    Search:
                    <input type="text" id="title" placeholder='Search recipe...' value={search} onChange={(e) => handleFilter(e)} />
                </label>
            </form>
        </div>
    </>
  )
}

export default Search
