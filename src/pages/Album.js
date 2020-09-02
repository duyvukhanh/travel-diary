import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import AlbumPageHeader from '../components/AlbumPageHeader'
import AlbumPageContent from '../components/AlbumPageContent'



class Album extends Component {
    componentDidMount() {
        document.getElementsByClassName('main')[0].style.display = "block"
    }
    
    render() {
        return (
            <MainLayout className="home-page" headerContent="Save your memories">
                <AlbumPageHeader></AlbumPageHeader>
                <AlbumPageContent></AlbumPageContent>
            </MainLayout>
        )
    }
}

export default Album