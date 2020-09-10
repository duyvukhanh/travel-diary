import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import AboutPageItem from '../components/AboutPage'
import { connect } from 'react-redux'
import {changeUserInfo, changeNavState} from '../actions'


class About extends Component {
    constructor(props) {
        super(props)
        this.props.changeNavState(4)
    }
    
    componentDidMount() {
        document.getElementsByClassName('main')[0].style.display = "block"
    }

    render() {
        return (
            <MainLayout className="home-page" header="true" headerContent="About us">
                <AboutPageItem></AboutPageItem>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(About)