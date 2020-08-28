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

    showImage(image) {
        document.getElementById('imageViewer').style.opacity = 1
        document.getElementById('imageViewer').style.visibility = "visible"
        let img = require(`../images/${image}.jpg`)
        document.getElementsByClassName('image')[0].innerHTML = ` <img src='${img}'></img> `
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

    async componentWillMount() {
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
    
    render() {  
        let album = this.state.album
        console.log(album)
        return (
            <div className="album-page-content">
                <div id="imageViewer">
                    <div className="close-btn" onClick={() => this.closeImage()}>
                        <img src={xIcon}></img>
                    </div>
                    <div className="control-btn">
                        <img src={leftArrow}></img>
                    </div>
                    <div className="image">
                        {/* <img src={image1}></img> */}
                    </div>
                    <div className="control-btn">
                        <img src={rightArrow}></img>
                    </div>
                </div>

                <div className="album-detail">
                    <input id="uploadImage" type="file"></input>
                    <div className="action-btn" onClick={() => this.uploadImg()}>
                        <img src={upload}></img>
                    </div>
                </div>

                <div className="switch-btn">
                    <div id="pictureBtn" className="btn-item active" onClick={() => this.showPictures()}>
                        <div>
                            <img src={pictureIcon}></img>
                        </div>
                        <div>Picture</div>
                    </div>
                    <div id="videoBtn" className="btn-item" onClick={() => this.showVideos()}>
                        <div>
                            <img src={videoIcon}></img>
                        </div>
                        <div>Video</div>
                    </div>
                </div>
                <section className="content-section">
                    <div className="picture-group">
                        {
                            album.images.map((image,i) => {
                                return <img key={i} src={require(`../images/${image}.jpg`)} onClick={() => this.showImage(image)}></img>
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