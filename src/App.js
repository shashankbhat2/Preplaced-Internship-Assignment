import React from 'react'
import MainNavigation from './Components/MainNavigation'
import './styles.css'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Integration from './Components/Integration'
import Empty from './Components/Empty'
import Favourites from './Components/Favourites'
import { GlobalProvider } from './Context/GlobalState'
const App = () => {
  return(
    <>
      <GlobalProvider>
      <BrowserRouter>
      <div className="m-auto">
          <div className="row">
            <div className="col-md-3 col-xsm-12 mr-2 ml-4 mt-5 navigation">
              <MainNavigation></MainNavigation>
            </div>
            <div className="main col-md-8 ml-2 mr-2 mt-5"> 
             <Switch>
                <Redirect from='/' to='/integrations' exact component={Integration}></Redirect>
                <Route path='/integrations'>
                    <Integration></Integration>                                   
                </Route>       
                <Route path='/favourites'>
                    <Favourites></Favourites>  
                </Route>  
                <Route path='/empty' exact component={Empty}/>     
              </Switch>
            </div>
          </div>
      </div>
      </BrowserRouter>
      </GlobalProvider>
    </>
  )
}


export default App
