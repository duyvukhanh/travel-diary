import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import AlbumPageHeader from '../components/AlbumPageHeader'
import AlbumPageContent from '../components/AlbumPageContent'
import { connect } from 'react-redux'
import {changeUserInfo, changeNavState} from '../actions'


class Album extends Component {
    constructor(props) {
        super(props)
        this.props.changeNavState(2)
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Album)