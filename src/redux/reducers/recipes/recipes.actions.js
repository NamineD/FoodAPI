import { SEARCH, RECIPES_TYPES, RECIPE_RANDOM, RECIPES_DETAILS, AREA } from './recipes.actionTypes'
import axios from 'axios'

export const getRecipeRandom = () => {
    return async function (dispatch) {
        return axios.get(`${process.env.REACT_APP_FOOD}/random.php`).then((response) => {
            dispatch({
                type: RECIPE_RANDOM,
                payload: response.data.meals
            })
        })
        .catch((error) => console.log(error));
    }
}

export const getByName = (query) => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_FOOD}/search.php?s=`+query)
            return dispatch({
                type: SEARCH,
                payload: res.data.meals
            })
        }catch(error){
            console.log(error)};
    }
} 

export function getDetail(id) {
    return async function (dispatch) {
        return axios.get(`${process.env.REACT_APP_FOOD}/lookup.php?i=`+id).then((response) => {
            dispatch({
                type: RECIPES_DETAILS,
                payload: response.data.meals
            })
        }).catch((error) => console.log(error));
    }
}

export function getTypes(categoryName) {
    return async function (dispatch) {
        return axios.get(`${process.env.REACT_APP_FOOD}/filter.php?c=`+categoryName).then((response) => {
            console.log(response.data.meals);
            dispatch({
                type: RECIPES_TYPES,
                payload: response.data.meals
            }) 
        }).catch((error) => console.log(`${process.env.REACT_APP_FOOD}/random.php`, error));
    }
}

export function getAreas(areaName) {
    return async function (dispatch) {
        return axios.get(`${process.env.REACT_APP_FOOD}/filter.php?a=`+areaName).then((response) => {
            console.log(response.data.meals);
            dispatch({
                type: AREA,
                payload: response.data.meals
            })
        }).catch((error) => console.log(error));
    }
}
