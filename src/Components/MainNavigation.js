import React from 'react'
import { NavLink } from 'react-router-dom'
const MainNavigation = () => {
    return (
        <div className="nav-section">
        <div class="row">
        <div class="col-md-12 col-sm-12 tabs">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <NavLink className="nav-link mt-auto" to="/empty">
            <ion-icon name="person-outline" size="medium" class="icon"></ion-icon> 
            Account
            <p class="nav-info">Your Account Preferences</p>
            </NavLink>
            <NavLink className="nav-link mt-auto" to="/empty">
            <ion-icon name="notifications-outline" size="medium" class="icon"></ion-icon> 
            Notifications
            <p class="nav-info">Your Notification Preferences</p>
            </NavLink>
            <NavLink className="nav-link mt-auto" to="/integrations">
            <ion-icon name="add-circle" size="medium" class="icon"></ion-icon>
            Integrations
            <p class="nav-info">Your Account Preferences</p>
            </NavLink>
            <NavLink className="nav-link  mt-auto" to="/empty">
            <ion-icon name="people-outline" class="icon"></ion-icon>            
            Colleagues
            <p class="nav-info">Your Account Preferences</p>
            </NavLink>
            <NavLink className="nav-link mt-auto" to="/empty">
            <ion-icon name="bookmark" class="icon"></ion-icon>            
            Tags
            <p class="nav-info">Your Account Preferences</p>
            </NavLink>
            </div>
        </div>
        </div>
        </div>
    )
}

export default MainNavigation
