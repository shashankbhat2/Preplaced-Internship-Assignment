import React, { useContext} from 'react'
import heart from '../assets/heart.svg'
import filledheart from '../assets/filledheart.svg'
import { GlobalContext } from '../Context/GlobalState';
import bin from '../assets/bin.svg'
const Card = ({integration}) => {
  
    const {addIntegrationToFavourites, favourites, removeIntegrationFromFavourites} = useContext(GlobalContext)
    let favouritedIntegration = favourites.find((i) => i.id === integration.id)
  
    return (
          <div class="card">
            <img src={integration.image}  class="card-img img-fluid p-5" alt={integration.title}/>
            <div class="card-body">
              <h5 class="card-title">{integration.name}</h5>
              <p class="card-text">{integration.desc}</p>
              <div class="row">
                  <div class="col-md-7">
                  <button class={`card-text ml-0 mr-4 mt-2 mb-4 ${integration.connected ? 'connected' : 'connect'}`} disabled={integration.connected ? true : false} >{integration.connected ? 'Connected' : 'Connect'}</button>
                  </div>   
                  <div class="col-md-2 mb-4">
                  {favouritedIntegration ?   <button><img  alt="filledheart" src={filledheart} class="heart m-auto"></img></button> : <button><img src={heart} onClick={() => addIntegrationToFavourites(integration)} alt="heart" class="heart m-auto"></img></button>} 
                  </div>
                  <div class="col-md-2 mb-4">
                  {favouritedIntegration ?   <button onClick={() => removeIntegrationFromFavourites(integration.id)}><img src={bin} alt="trash" class="heart bin m-auto"></img></button> : ''} 
                  </div>
              </div>
            </div>
        </div>      
      )
}

export default Card;
