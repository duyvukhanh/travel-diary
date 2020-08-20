import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import GalleryPage from './pages/Gallery'
import AlbumPage from './pages/Album'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import AboutPage from './pages/About'
import ProfilePage from './pages/Profile'





class Routes extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/gallery">
                    <GalleryPage />
                </Route>
                <Route path="/album">
                    <AlbumPage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/register">
                    <RegisterPage/>
                </Route>
                <Route path="/about">
                    <AboutPage/>
                </Route>
                <Route path="/profile">
                    <ProfilePage/>
                </Route>
            </Switch>
        )
    }
}

export default Routes