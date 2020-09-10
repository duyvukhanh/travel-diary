import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import UserPageHeader from '../components/UserPageHeader'
import UserPageAlbumsSection from '../components/UserPageAlbumsSection'
import AddingAlbum from '../components/UserPageAddingAlbum'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeUserInfo,changeNavState } from '../actions'

class Gallery extends Component {
    constructor(props) {
        super(props)
        this.props.changeNavState(2)
    }

    componentWillMount() {
        document.body.style.backgroundColor = "#fff"
    }

    componentDidMount() {
        document.getElementsByClassName('main')[0].style.display = "block"
    }
    
    render() {
        let isLoggedIn = Object.keys(this.props.userInfo).length === 0 ? false : true // Kiem tra obj rong
        if (!isLoggedIn) {
            return (
                <Redirect to="/" />
            )
        } else {
            return (
                <MainLayout className="home-page" nav="white" headerContent="Save your memories">
                    <UserPageHeader></UserPageHeader>
                    <UserPageAlbumsSection></UserPageAlbumsSection>
                    <AddingAlbum></AddingAlbum>
                </MainLayout>
            )
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)