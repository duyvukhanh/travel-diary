import React, { Component } from 'react'
import './UserPageAlbumsSection.css'
import image from '../images/duyava.jpg'
import blackHeart from '../icons/black-heart.png'
import redHeart from '../icons/red-heart.png'
import add from '../icons/plus.png'
import AddingAlbum from './UserPageAddingAlbum'
import { connect } from 'react-redux'
import { changeUserInfo } from '../actions'
import { API_PATHS } from '../config'




class UserPageAlbumsSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            voted: false,
            albumList: [],
        }
    }

    vote() {
        let voted = this.state.voted
        this.setState({
            voted: !voted
        })
        let currentVoted = document.getElementById('numberOfVoted').innerHTML
        if (voted) {
            document.getElementById('numberOfVoted').innerHTML = Number(currentVoted) - 1
        } else {
            document.getElementById('numberOfVoted').innerHTML = Number(currentVoted) + 1
        }
    }

    toAlbumPage(e) {
        // console.log(e.target.id)
        window.location.href = `/album?id=${e.target.id}`
    }

    addAlbum() {
        document.getElementsByClassName('adding-album-block')[0].style.opacity = 1
        document.getElementsByClassName('adding-album-block')[0].style.visibility = "visible"
    }

    async componentDidMount() {
        let loggedInUserId = this.props.userInfo._id
        let API = API_PATHS.GALLERY_GET_MANY + `?owner=${loggedInUserId}`
        let rawResponse = await fetch(API, {
            method: 'GET',
        })
        let albumList = await rawResponse.json()
        this.setState({
            albumList
        })
    }

    render() {
        let loggedInUser = this.props.userInfo
        let albumList = this.state.albumList
        return (
            <div className="user-albums-section">
                {
                    albumList.map((album, i) => {
                        return (
                            <div className="user-album" key={i}>
                                <div className="album-image" onClick={(e) => this.toAlbumPage(e)}>
                                    <div className="img-blur" id={album._id}></div>
                                    {
                                        album.images[0] ? <img src={require(`../images/${album.images[0]}.jpg`)}></img> : <img src={require('../images/default.jpg')}></img>
                                    }
                                </div>
                                <div className="voted">
                                    {
                                        this.state.voted ?
                                            (<img src={redHeart} onClick={() => this.vote()}></img>) :
                                            (<img src={blackHeart} onClick={() => this.vote()}></img>)
                                    }

                                    <span id="numberOfVoted"> {album.voted} </span>
                                </div>
                                <div className="album-title" onClick={(album) => this.toAlbumPage(album)}>
                                    {album.albumName}
                                </div>
                                <div className="album-date">
                                    {album.date}
                                </div>
                            </div>
                        )
                    })
                }


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
const mapStateToProps = (state) => {
    let { userInfo } = state
    return { userInfo }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeUserInfo: (userInfo) => dispatch(changeUserInfo(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageAlbumsSection)
