import React, { Component } from 'react'
import './ProfileSection.css'
import plus from '../icons/plus.png'
import $ from 'jquery'
import { connect } from 'react-redux'
import { changeUserInfo } from '../actions'
import { API_PATHS } from '../config'


class ProfileSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            ImgPreview: null,
        };
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

    uploadFile(e) {
        let loggedInUser = this.props.userInfo
        document.getElementById("notSavedImg").style.visibility = "visible"
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (e) => {
            this.setState({
                ImgPreview: [reader.result]
            })
            if ( loggedInUser.userImg !== 'default' ) {
                document.getElementById('userImage').src = this.state.ImgPreview
            } else {
                document.getElementsByClassName('adding-btn')[0].style.backgroundImage = `url(${this.state.ImgPreview})`
                document.getElementsByClassName('adding-btn')[0].style.backgroundSize = `cover`
                document.getElementById('addingIcon').style.opacity = 0
            }
        }
        this.setState({ file });
    }

    async handleFormUpdate(e) {
        e.preventDefault()
        let API = API_PATHS.UPDATE_USER

        // handle file
        const formData = new FormData();
        if (this.state.file) {
            formData.append('fileUploaded', this.state.file);
        }
        // handle json 
        let user = this.props.userInfo
        let profileForm = document.getElementById('profileForm')
        let displayName = profileForm.displayName.value
        let userFacebook = profileForm.userFacebook.value
        let userInstagram = profileForm.userInstagram.value
        let bio = profileForm.bio.value
        let userToUpdate = {
            ...user,
            displayName,
            userFacebook,
            userInstagram,
            bio,
        }
        for (const [key, value] of Object.entries(userToUpdate)) {
            if ( value !== '' ) {
                formData.append(key, value)
            }
        }
        let rawResponse = await fetch(API, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                // 'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        let response = await rawResponse.json()
        if (response.message) {
            console.log("Failed")
        } else {
            console.log(response)
            localStorage.setItem('currentUser', JSON.stringify(response))
            this.props.changeUserInfo(response)
        }


    }

    render() {
        let loggedInUser = this.props.userInfo
        return (
            <div className="profile-section">
                <div className="title">Profile</div>
                <form id="profileForm" encType="multipart/form-data">
                    <div className="profile-image">
                        <div className="text">Profile Image</div>
                        {
                            (loggedInUser.userImg !== "default" || !loggedInUser.userImg) ? (
                                <div className="user-img" onClick={() => this.uploadImg()}>
                                    <img alt="" id="userImage" src={require(`../images/${loggedInUser.userImg}`)}></img>
                                </div>
                            ) : (
                                    <div className="adding-btn"
                                        onClick={() => this.uploadImg()}
                                        onMouseOver={() => this.upOpacity()}
                                        onMouseLeave={() => this.downOpacity()}>
                                        <img alt="" src={plus} id='addingIcon'></img>
                                    </div>
                                )
                        }

                        <input type="file" name="image" id="imgInput" onChange={(e) => this.uploadFile(e)}></input>
                        <div className="suggestion red" id="notSavedImg">Not saved yet !</div>
                        <div className="suggestion">Your profile icon is a center cropped square icon
                        shown on your galleries, homepage and applicable places.
                        Tip: make your image a square image before uploading.</div>
                    </div>
                    <div className="input-group">
                        <div className="input-title">Display Name</div>
                        <input type="text" placeholder="Your Display Name" name="displayName" defaultValue={loggedInUser.displayName}></input>
                        <div className="suggestion">Your display name is shown on your homepage, collections, email notifications and more.</div>
                    </div>

                    <div className="input-group">
                        <div className="input-title">Biography</div>
                        <textarea rows="5" placeholder="Optional. Max 500 Characters" name="bio" defaultValue={loggedInUser.bio}></textarea>
                    </div>
                    <div className="input-group">
                        <div className="input-title">Facebook</div>
                        <input type="text" placeholder="Your Facebook URL" name="userFacebook" defaultValue={loggedInUser.userFacebook}></input>
                    </div>
                    <div className="input-group">
                        <div className="input-title">Instagram</div>
                        <input type="text" placeholder="Your Instagram URL" name="userInstagram" defaultValue={loggedInUser.userInstagram}></input>
                    </div>

                    <div className="update-btn">
                        <button onClick={(e) => this.handleFormUpdate(e)}>update</button>
                    </div>
                </form>

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSection)