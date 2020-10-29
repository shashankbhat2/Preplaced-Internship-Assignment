import React, {createContext, useReducer, useEffect} from 'react'
import Reducers from './Reducers'

//initial State
const initialState = {
    favourites: localStorage.getItem("favourites")
      ? JSON.parse(localStorage.getItem("favourites"))
      : [],
  };
  
//Context creation
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) =>{
    const [state, dispatch] = useReducer(Reducers, initialState);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(state.favourites));
    }, [state])

    //Action
    const addIntegrationToFavourites = (integration) => {
        dispatch({type: 'ADD_INTEGRATION_TO_FAVOURITES', payload: integration})
    }

    const removeIntegrationFromFavourites = (id) => {
        dispatch({type: 'REMOVE_INTEGRATION_FROM_FAVOURITES', payload: id})
    }

    return (
        <GlobalContext.Provider value={{favourites: state.favourites, addIntegrationToFavourites, removeIntegrationFromFavourites}}>
        {props.children}
        </GlobalContext.Provider>
    )
} 

