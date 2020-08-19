import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import VNMap from '../components/VNMap'
import PlaceInfo from '../components/PlaceInfo'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <MainLayout className="home-page" headerContent="Save your memories">
                <VNMap />
                <PlaceInfo />
            </MainLayout>
        )
    }
}

export default Home