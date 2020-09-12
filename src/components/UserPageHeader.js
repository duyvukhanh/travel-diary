import React, { Component } from 'react'
import './UserPageHeader.css'
import emailIcon from '../icons/email.png'
import instagramIcon from '../icons/instagram.png'
import { connect } from 'react-redux'
import { changeUserInfo } from '../actions'
import { API_PATHS } from '../config'

class UserPageHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thisUser: this.props.userInfo,
            userToDisplay: null
        }
    }

    async componentWillMount() {
        let loggedInUser = this.props.userInfo

        let url = new URL(window.location.href)
        let params = new URLSearchParams(url.search);
        let userId = params.get('userId') || loggedInUser._id

        let API = API_PATHS.GET_USER + userId
        let rawResponse = await fetch(API, {
            method: 'GET',
        })
        let thisUser = await rawResponse.json()
        this.setState({
            thisUser
        })
    }
    
    render() {
        let loggedInUser = this.state.thisUser
        console.log(`${API_PATHS.GET_IMAGE}${loggedInUser.userImg}`)
        return (
            <div className="user-page-header">
                <div className="user-img">
                    <img alt="" src={`${API_PATHS.GET_IMAGE}${loggedInUser.userImg}`}></img>
                </div>
                <div className="user-name">{ loggedInUser.displayName }</div>
                <div className="user-bio">
                    <span>{ loggedInUser.bio }</span>
                </div>
                <div className="user-info">
                    <span className="user-email"> 
                        <img alt="" src={emailIcon}></img>
                        { loggedInUser.userFacebook }
                    </span>
                    <span className="user-ig">
                        <img alt="" src={instagramIcon}></img>
                        { loggedInUser.userInstagram }
                    </span>
                </div>
                <div className="spread-line"></div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    let { userInfo } = state
    return { userInfo }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeUserInfo: (userInfo) => dispatch(changeUserInfo(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageHeader)