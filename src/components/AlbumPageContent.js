import React, { Component } from 'react'
import './AlbumPageContent.css'
import videoIcon from '../icons/video.png'
import pictureIcon from '../icons/picture.png'
import leftArrow from '../icons/left.svg'
import rightArrow from '../icons/right.svg'
import xIcon from '../icons/close.svg'
import upload from '../icons/upload.svg'
import $ from 'jquery'


import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.jpg'
import image8 from '../images/image8.jpg'
import image9 from '../images/image9.jpg'
import image10 from '../images/image10.jpg'
import image11 from '../images/image11.jpg'
import image12 from '../images/image12.jpg'
import image13 from '../images/image13.jpg'
import image14 from '../images/image14.jpg'

import video1 from '../videos/video1.mp4'


class AlbumPageContent extends Component {
    constructor(props) {
        super(props)
    }

    showImage() {
        document.getElementById('imageViewer').style.opacity = 1
        document.getElementById('imageViewer').style.visibility = "visible"
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
    
    render() {
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
                        <img src={image1}></img>
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
                        <img src={image1} onClick={() => this.showImage()}></img>
                        <img src={image2}></img>
                        <img src={image3}></img>
                        <img src={image4}></img>
                        <img src={image5}></img>
                        <img src={image6}></img>
                        <img src={image7}></img>
                        <img src={image8}></img>
                        <img src={image9}></img>
                        <img src={image10}></img>
                        <img src={image11}></img>
                        <img src={image12}></img>
                        <img src={image13}></img>
                        <img src={image14}></img>
                    </div>
                    <div className="video-group">
                        <video src={video1+'#t=1'} controls></video>
                        <video src={video1+'#t=3'} controls></video>
                        <video src={video1+'#t=5'} controls></video>
                    </div>
                   
                    
                    


                </section>

            
            </div>
        )
    }
}

export default AlbumPageContent