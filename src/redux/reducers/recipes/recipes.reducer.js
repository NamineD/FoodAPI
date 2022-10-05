import { RECIPE_RANDOM, SEARCH, RECIPES_DETAILS, RECIPES_TYPES, AREA } from './recipes.actionTypes'
//import { reducerCreator } from 'template-redux-helpers'

const INITIAL_STATE = {
    recipeRandom: [],
    recipeName: [],
    recipeDetail: [],
    categories: [],
    area: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RECIPE_RANDOM:
            return {
                ...state,
                recipeRandom: action.payload
            };
        case SEARCH: return {
            ...state, 
            recipeName: action.payload,
        };
        case RECIPES_DETAILS: return {
            ...state, 
            recipeDetail: action.payload,
        }
        case RECIPES_TYPES: return { 
            ...state, 
            categories: action.payload 
        }
        case AREA: return {
            ...state,
            area: action.payload
        }
        default:
            return {...state}
    }
};

export default reducer;