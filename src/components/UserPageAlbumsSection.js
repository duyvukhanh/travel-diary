import React, { Component } from 'react'
import './UserPageAlbumsSection.css'
import image from '../images/duyava.jpg'

class UserPageAlbumsSection extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="user-albums-section">
                <div className="user-album">
                    <div className="album-image">
                        <img src={image}></img>
                    </div>
                    <div className="album-title">
                        Singaporing
                    </div>
                    <div className="album-date">
                        February 9th, 2020
                    </div>
                </div>
                
            </div>
        )
    }
}

export default UserPageAlbumsSection