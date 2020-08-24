import React, { Component } from 'react'
import './ProfileSection.css'
import plus from '../icons/plus.png'
import $ from 'jquery'

class ProfileSection extends Component {
    constructor(props) {
        super(props)
    }

    uploadImg() {
        $('#imgInput').click();
    }

    upOpacity() {
        document.getElementById('addingIcon').style.opacity = 0.7
    }

    downOpacity() {
        document.getElementById('addingIcon').style.opacity = 0.3
    }
    
    render() {
        return (
            <div className="profile-section">
                <div className="title">Profile</div>
                <form id="profileForm">
                    <div className="profile-image">
                        <div className="text">Profile Image</div>
                        <div className="adding-btn"
                        onClick={() => this.uploadImg()}
                        onMouseOver={() => this.upOpacity()}
                        onMouseLeave={() => this.downOpacity()}>
                            <img src={plus} id='addingIcon'></img>
                        </div>
                        <input type="file" name="image" id="imgInput"></input>
                        <div className="suggestion">Your profile icon is a center cropped square icon 
                        shown on your galleries, homepage and applicable places.
                        Tip: make your image a square image before uploading.</div>
                    </div>
                    <div className="input-group">
                        <div className="input-title">Display Name</div>
                        <input type="text" placeholder="Your Display Name" name="displayName"></input>
                        <div className="suggestion">Your display name is shown on your homepage, collections, email notifications and more.</div>
                    </div>

                    <div className="input-group">
                        <div className="input-title">Biography</div>
                        <textarea rows="5" placeholder="Optional. Max 500 Characters" name="bio"></textarea>
                    </div>
                    <div className="input-group">
                        <div className="input-title">Facebook</div>
                        <input type="text" placeholder="Your Facebook URL" name="facebook"></input>
                    </div>
                    <div className="input-group">
                        <div className="input-title">Instagram</div>
                        <input type="text" placeholder="Your Instagram URL" name="instagram"></input>
                    </div>
                    
                    <div className="update-btn">
                        <button>update</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default ProfileSection