import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import GalleryPage from './pages/Gallery'
import AlbumPage from './pages/Album'



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
            </Switch>
        )
    }
}

export default Routes