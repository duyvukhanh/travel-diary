import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import ProfileSection from '../components/ProfileSection'


class Profile extends Component {
    

    componentWillMount() {
        document.body.style.backgroundColor = "#fff"
    }

    componentDidMount() {
        document.getElementsByClassName('main')[0].style.display = "block"
    }
    
    render() {
        return (
            <MainLayout className="home-page" nav="white" headerContent="Save your memories">
                <ProfileSection></ProfileSection>
            </MainLayout>
        )
    }
}

export default Profile