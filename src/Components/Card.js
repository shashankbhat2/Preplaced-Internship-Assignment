import React, { useContext, useEffect, useState } from 'react'
import heart from '../assets/heart.svg'
import filledheart from '../assets/filledheart.svg'
import { GlobalContext } from '../Context/GlobalState';
import bin from '../assets/bin.svg'
const Card = ({integration}) => {
    const isConnected = integration.connected ? true : false
    const {addIntegrationToFavourites, favourites, removeIntegrationFromFavourites} = useContext(GlobalContext)
    let favouritedIntegration = favourites.find((i) => i.id === integration.id)
    const favouritedIntegrationDisabled = favouritedIntegration ? true : false
  
  return (
        <div class="card">
          <img src={integration.image} class="card-img img-fluid p-5" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{integration.name}</h5>
            <p class="card-text">{integration.desc}</p>
            <div class="row">
                <div class="col-md-8">
                <button class={`card-text ml-0 mr-4 mt-2 mb-4 ${isConnected? 'connected' : 'connect'}`} disabled={isConnected? true : false} >{isConnected ? 'Connected' : 'Connect'}</button>
                </div>   
                <div class="col-md-2 mb-4">
                {favouritedIntegrationDisabled ?   <button><img src={filledheart} class="heart m-auto"></img></button> : <button><img src={heart} onClick={() => addIntegrationToFavourites(integration)} class="heart m-auto"></img></button>} 
                </div>
                <div class="col-md-2 mb-4">
                {favouritedIntegrationDisabled ?   <button onClick={() => removeIntegrationFromFavourites(integration.id)}><img src={bin} class="heart bin m-auto"></img></button> : ''} 
                </div>
            </div>
          </div>
      </div>      
    )
}

export default Card;
