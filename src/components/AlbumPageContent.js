import React, { Component } from 'react'
import './AlbumPageContent.css'
import icon from '../icons/comment.png'
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


class AlbumPageContent extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="album-page-content">
                <div className="switch-btn">
                    <div className="btn-item">
                        <div>
                            <img src={icon}></img>
                        </div>
                        <div>Picture</div>
                    </div>
                    <div className="btn-item">
                        <div>
                            <img src={icon}></img>
                        </div>
                        <div>Video</div>
                    </div>
                </div>
                <section className="content-section">
                    <img src={image1}></img>
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
                </section>
            </div>
        )
    }
}

export default AlbumPageContent