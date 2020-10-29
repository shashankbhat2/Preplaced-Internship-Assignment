import React, { useState, useEffect } from 'react'
import Card from './Card'
import data from '../connected.json'
import disconnected_data from '../disconnected.json'
import { NavLink } from 'react-router-dom'
const integrations = data
const not_integrated = disconnected_data

const Integration = () => {
  
    return (
    <>
        <div class="container container-fluid Integration-Section">
            <div class="ml-2 mr-2 mt-5 head-nav">
                <div class="row">
                  <div class="col-lg-7">
                    <h3 class="head">Integrations</h3>
                  </div>
                  <div class="col-lg-2 col-md-2 fav-tab">
                    <NavLink class="favourites" to="/favourites">Favourites</NavLink>
                  </div>
                  <div class="col-lg-3 col-md-0">
                    <div class="category"> <span class="dummyoptions">Category:</span> <select ><option  value="all" selected>All</option></select>
                     <span class="dummyoptions ml-4">Filter:</span> <select><option  value="all" selected>All</option></select></div>
                  </div>
                </div>
              </div>
              <div class="input-group input-group-sm mb-3 mt-3 pl-2 pr-2">
                <input type="text" class="form-control input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Search Integrations"/>
              </div>
        </div>
      <hr class="ruler mt-5"></hr>
      <div class="container">
          <h2 class="heading mt-4 mb-4">Your Integrations</h2>
          <div class="row">
          { integrations.map(integration => 
          <div class="col-lg-4 col-md-6">
          <li key={integration.id}>
          <Card integration={integration}></Card>
          </li>
          </div>)}
          </div>
      </div>
      <div class="container mt-5 mb-5">
          <h2 class="heading mt-4 mb-4">Popular Integrations</h2>
          <div class="row">
          {not_integrated.map(integration => 
          <div class="col-lg-4 col-md-6">
          <li key={integration.id}>
          <Card integration={integration}></Card>
          </li>
          </div>)}
          </div>
      </div>
    </>
    )
}

export default Integration
