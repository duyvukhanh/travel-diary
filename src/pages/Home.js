import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import VNMap from '../components/VNMap'
import PlaceInfo from '../components/PlaceInfo'
import { connect } from 'react-redux'
import { changeUserInfo,changeNavState } from '../actions'
class Home extends Component {
    constructor(props) {
        super(props)
        this.props.changeNavState(1)
    }
    
    render() {
        return (
            <MainLayout className="home-page" header="true" headerContent="Save your memories">
                <VNMap />
                <PlaceInfo />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)