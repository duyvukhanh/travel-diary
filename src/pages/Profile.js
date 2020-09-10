import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import ProfileSection from '../components/ProfileSection'
import { connect } from 'react-redux'
import { changeUserInfo,changeNavState } from '../actions'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.props.changeNavState(3)
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
                <ProfileSection></ProfileSection>
            </MainLayout>
        )
    }
}

const mapStateToProps = (state) => {
    let { userInfo, currentNavState } = state
    return { userInfo,currentNavState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeUserInfo: (userInfo) => dispatch(changeUserInfo(userInfo)),
        changeNavState: (navState) => dispatch(changeNavState(navState))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)