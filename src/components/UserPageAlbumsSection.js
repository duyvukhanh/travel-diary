import React, { Component } from 'react'
import './UserPageAlbumsSection.css'
import image from '../images/duyava.jpg'
import blackHeart from '../icons/black-heart.png'
import redHeart from '../icons/red-heart.png'
import add from '../icons/plus.png'
import AddingAlbum from './UserPageAddingAlbum'



class UserPageAlbumsSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            voted : false
        }
    }
    
    vote() {
        let voted = this.state.voted
        this.setState({
            voted : !voted
        })
        let currentVoted =  document.getElementById('numberOfVoted').innerHTML 
        if (voted) {
            document.getElementById('numberOfVoted').innerHTML = Number(currentVoted) - 1
        } else {
            document.getElementById('numberOfVoted').innerHTML = Number(currentVoted) + 1
        }
    }

    toAlbumPage() {
        window.location.href = '/album'
    }

    addAlbum() {
        document.getElementsByClassName('adding-album-block')[0].style.opacity = 1
        document.getElementsByClassName('adding-album-block')[0].style.visibility = "visible"

    }

    render() {
        return (
            <div className="user-albums-section">
                <div className="user-album">
                    <div className="album-image" onClick={() => this.toAlbumPage()}>
                        <div class="img-blur"></div>
                        <img src={image}></img>
                    </div>
                    <div class="voted">
                        {
                            this.state.voted ?
                            (<img src={redHeart} onClick={() => this.vote()}></img>) :
                            (<img src={blackHeart} onClick={() => this.vote()}></img>) 
                        }
                        
                        <span id="numberOfVoted">3</span>
                    </div>
                    <div className="album-title" onClick={() => this.toAlbumPage()}>
                        Singaporing
                    </div>
                    <div className="album-date">
                        February 9th, 2020
                    </div>
                </div>

                <div className="user-album" id="addAlbum" onClick={() => this.addAlbum()}>
                    <div className="album-image">
                        <div className="adding-blur"></div>
                        <div className="adding-block">
                            <img src={add}></img>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default UserPageAlbumsSection