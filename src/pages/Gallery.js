import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import UserPageHeader from '../components/UserPageHeader'
import UserPageAlbumsSection from '../components/UserPageAlbumsSection'

class Gallery extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        document.body.style.backgroundColor = "#fff"
    }

    componentDidMount() {
        document.getElementsByClassName('main')[0].style.display = "block"
    }
    
    render() {
        return (
            <MainLayout className="home-page" nav="white" headerContent="Save your memories">
                <UserPageHeader></UserPageHeader>
                <UserPageAlbumsSection></UserPageAlbumsSection>
            </MainLayout>
        )
    }
}

export default Gallery