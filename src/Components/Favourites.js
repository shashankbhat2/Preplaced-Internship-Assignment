import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'
import Card from './Card'

const Favourites = () => {
    const {favourites} = useContext(GlobalContext)
    
    return (
    <>
      <div class="container mb-5 mt-5">
          <h2 class="heading mt-4 mb-4">Your {favourites.length > 0 ? 'Favourites': 'Favourite' }</h2>
          <div class="row">
          {favourites.length === 0 && 
            <h3 class="heading ml-5 mr-5">No favourite integrations yet. <NavLink to="/integrations">Add Favourite</NavLink></h3>
          }
          {favourites && favourites.map(favourite => 
          <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <Card integration={favourite}></Card></div>)}
          </div>
      </div>
    </>
    )
}

export default Favourites
