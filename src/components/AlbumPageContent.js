import React, { Component } from 'react'
import './AlbumPageContent.css'
import videoIcon from '../icons/video.png'
import pictureIcon from '../icons/picture.png'
import leftArrow from '../icons/left.svg'
import rightArrow from '../icons/right.svg'
import xIcon from '../icons/close.svg'
import upload from '../icons/upload.svg'
import $ from 'jquery'
import { connect } from 'react-redux'
import { changeUserInfo } from '../actions'
import { API_PATHS } from '../config'

class AlbumPageContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumId : '',
            album : {
                images: [],
                videos: [],
            },
        }
    }

    showImage(images, index) {
        let maxIndex = images.length - 1
        let minIndex = 0
        let nextIndex = index + 1
        let prevIndex = index - 1
        if (nextIndex > maxIndex) {
            nextIndex = 0
        }
        if (prevIndex < minIndex) {
            prevIndex = maxIndex
        }
        document.getElementById('imageViewer').style.opacity = 1
        document.getElementById('imageViewer').style.visibility = "visible"
        let img = require(`../images/${images[index]}`)
        document.getElementsByClassName('image')[0].innerHTML = ` <img src='${img}'></img> `

        $('#nextImage').on("click",() => {
            $("#nextImage").off("click");
            this.showImage(images,nextIndex)
        })
        $('#prevImage').on("click",() => {
            $("#prevImage").off("click");
            this.showImage(images,prevIndex)
        })

        // $('#prevImage').click(() => this.showImage(images,prevInde
    }


    closeImage() {
        document.getElementById('imageViewer').style.opacity = 0
        document.getElementById('imageViewer').style.visibility = "hidden"
    }

    showPictures() {
        document.getElementsByClassName('picture-group')[0].style.display = "block"
        document.getElementsByClassName('video-group')[0].style.display = "none"
        document.getElementById('pictureBtn').classList.add('active')
        document.getElementById('videoBtn').classList.remove('active')
        document.getElementsByClassName('content-section')[0].style.columnCount = 4
    }

    showVideos() {
        document.getElementsByClassName('picture-group')[0].style.display = "none"
        document.getElementsByClassName('video-group')[0].style.display = "block"
        document.getElementById('videoBtn').classList.add('active')
        document.getElementById('pictureBtn').classList.remove('active')
        document.getElementsByClassName('content-section')[0].style.columnCount = 2
    }

    uploadImg() {
        $('#uploadImage').click();
    }

    async componentDidMount() {
        let url = new URL(window.location.href)
        let params = new URLSearchParams(url.search);
        let albumId = params.get('id')
        this.setState({albumId})
        let API = API_PATHS.GALLERY_GET_ONE + '/' + albumId
        let rawResponse = await fetch(API, {
            method: 'GET',
        })
        let album = await rawResponse.json()
        this.setState({album})
    }

    async handleUploadImageToAnlbum(e) {
        let API = API_PATHS.GALLERY_UPDATE
        let album = this.state.album
        
        let fileList = e.target.files
        const formData = new FormData()
        for (const key of Object.keys(fileList)) {
            formData.append('fileListUploaded', fileList[key])
        }
        for (const [key, value] of Object.entries(album)) {
            formData.append(key, value)
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
        }
    }
    
    toggleActiveDelete() {
        $(".delete-box").toggleClass("active")
        $(".image-checkbox").toggleClass("active")
        $(".image-container input").toggleClass("active")
    }

    clickCheckbox(image) {
        $(`#checkbox-${image}`).click()
    }

    async deleteImages() {
        let API = API_PATHS.GALLERY_UPDATE
        let albumImages = [...this.state.album.images]
        let checkedImages = []
        for ( let i = 0; i < albumImages.length; i++ ) {
            if ( $('#checkbox-' + albumImages[i]).is(":checked") ) {
                checkedImages.push(albumImages[i])
            }
        }
        let images = []
        for (let image of albumImages) {
            if ( !checkedImages.includes(image) ) {
                images.push(image)
            }
        }
        let reqBody = JSON.stringify({
            _id: this.state.album._id,
            images: [...images]
        })
        let rawResponse = await fetch(API, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: reqBody
        })
        let response = await rawResponse.json()
        if (response.message) {
            console.log(response)
        } else {
            window.location.reload();
        }
    }

    render() {  
        let album = this.state.album
        let loggedInUser = this.props.userInfo
        let loggedInUserGallery = (loggedInUser.gallery)
        return (
            <div className="album-page-content">
                <div id="imageViewer">
                    <div className="close-btn" onClick={() => this.closeImage()}>
                        <img alt="" src={xIcon}></img>
                    </div>
                    <div className="control-btn" id="prevImage">
                        <img alt="" src={leftArrow}></img>
                    </div>
                    <div className="image">
                        
                    </div>
                    <div className="control-btn" id="nextImage">
                        <img alt="" src={rightArrow}></img>
                    </div>
                </div>             
                <div className="album-detail">
                    <input id="uploadImage" type="file" multiple onChange={(e) => {this.handleUploadImageToAnlbum(e)}}></input>
                    {
                        loggedInUserGallery.includes(album._id) ? 
                        <div className="action-btn">
                            <div className="delete-box">
                                <div className="delete-icon" onClick={() => this.deleteImages()}>
                                    <img alt="" src={require('../icons/delete.svg')}></img>
                                </div>
                                <div className="delete-text" onClick={() => this.toggleActiveDelete()}>Delete</div>
                            </div>
                            <img alt="" src={upload} onClick={() => this.uploadImg()}></img>
                        </div> : ""
                    }
                    
                </div>
                <div className="switch-btn">
                    <div id="pictureBtn" className="btn-item active" onClick={() => this.showPictures()}>
                        <div>
                            <img alt="" src={pictureIcon}></img>
                        </div>
                        <div>Picture</div>
                    </div>
                    <div id="videoBtn" className="btn-item" onClick={() => this.showVideos()}>
                        <div>
                            <img alt="" src={videoIcon}></img>
                        </div>
                        <div>Video</div>
                    </div>
                </div>
                <section className="content-section">
                    <div className="picture-group">
                        {
                            album.images.map((image,i) => {
                                return <div key={i}>
                                    <div className="image-container" >
                                        <div className="image-checkbox" onClick={() => this.clickCheckbox(image)}></div>
                                        <input type="checkbox" id={`checkbox-${image}`} value={image}></input>
                                        <img alt="" src={require(`../images/${image}`)} onClick={() => this.showImage(album.images,i)}></img>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="video-group">
                        {
                            album.videos.map((video,i) => {
                                return <video key={i} src={require(`../videos/${video}.mp4`)} controls></video>
                            })
                        }
                      
                    </div>
                </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPageContent)