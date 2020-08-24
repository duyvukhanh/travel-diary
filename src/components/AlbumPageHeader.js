import React, { Component } from 'react'
import './AlbumPageHeader.css'
import ava from '../images/duyava.jpg'
import $ from 'jquery'

class AlbumPageHeader extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.getElementsByClassName('main')[0].style.width = "100%"
        document.getElementsByClassName('main')[0].style.maxWidth = "100%"
    }

    toAlbumContent() {
        let scrollHeight = $('.album-page-header').height();
        console.log(scrollHeight)

        window.scrollTo(0, scrollHeight);
    }
    
    render() {
        return (
            <div className="album-page-header">
                <div className="fade"></div>
                <div className="album-block">
                    <div className="album-name">
                        Singaporing
                    </div>
                    <div className="album-date">
                        February 9th, 2020
                    </div>
                    <div className="start-button">
                        <button onClick={() => this.toAlbumContent()}>Open</button>
                    </div>
                </div>
                <div className="owner-block">
                    <div className="album-owner-img">
                        <img src={ava}></img>
                    </div>
                    <div className="album-owner-name">
                        Khánh Duy
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumPageHeader