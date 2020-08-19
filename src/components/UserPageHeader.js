import React, { Component } from 'react'
import './UserPageHeader.css'
import ava from '../images/duyava.jpg'
import emailIcon from '../icons/email.png'
import instagramIcon from '../icons/instagram.png'


class UserPageHeader extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="user-page-header">
                <div className="user-img">
                    <img src={ava}></img>
                </div>
                <div className="user-name">Khánh Duy</div>
                <div className="user-bio">
                    <span>Software Engineer</span>
                </div>
                <div className="user-info">
                    <span className="user-email"> 
                        <img src={emailIcon}></img>
                        duyvukhanh@gmail.com
                    </span>
                    <span className="user-ig">
                        <img src={instagramIcon}></img>
                        khanhduy2906
                    </span>
                </div>
                <div class="spread-line"></div>
            </div>
        )
    }
}

export default UserPageHeader