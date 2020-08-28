import React, { Component } from 'react'
import './UserPageHeader.css'
import ava from '../images/duyava.jpg'
import emailIcon from '../icons/email.png'
import instagramIcon from '../icons/instagram.png'
import { connect } from 'react-redux'
import { changeUserInfo } from '../actions'

class UserPageHeader extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let loggedInUser = this.props.userInfo
        return (
            <div className="user-page-header">
                <div className="user-img">
                    <img src={require(`../images/${loggedInUser.userImg}`)}></img>
                </div>
                <div className="user-name">{ loggedInUser.displayName }</div>
                <div className="user-bio">
                    <span>{ loggedInUser.bio }</span>
                </div>
                <div className="user-info">
                    <span className="user-email"> 
                        <img src={emailIcon}></img>
                        { loggedInUser.userFacebook }
                    </span>
                    <span className="user-ig">
                        <img src={instagramIcon}></img>
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