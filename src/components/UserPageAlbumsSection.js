import React, { Component } from 'react'
import './UserPageAlbumsSection.css'
import add from '../icons/plus.png'
import { connect } from 'react-redux'
import { changeUserInfo } from '../actions'
import { API_PATHS } from '../config'




class UserPageAlbumsSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            votedAlbums: [],
            albumList: [],
            thisUser: this.props.userInfo
        }
    }

    async vote(album) {
        let albumList = this.state.albumList
        let albumIndex = albumList.indexOf(album)
        let loggedInUser = this.props.userInfo
        let votedAlbums = this.state.votedAlbums
        let votedForUpdated = [...loggedInUser.votedFor]
        let votedUpdated = Number(document.getElementById('numberOfVoted').innerHTML)
        if ( votedAlbums.includes(album._id) ) {
            let index = votedAlbums.indexOf(album._id)
            votedAlbums.splice(index, 1)
            this.setState({
                votedAlbums : [...votedAlbums]
            })
            document.getElementById('numberOfVoted').innerHTML = Number(votedUpdated) - 1
            votedUpdated = votedUpdated - 1
            let index1 = votedForUpdated.indexOf(album._id)
            votedForUpdated.splice(index1, 1)
        } else {
            votedAlbums.push(album._id)
            this.setState({
                votedAlbums : [...votedAlbums]
            })
            document.getElementById('numberOfVoted').innerHTML = Number(votedUpdated) + 1
            votedForUpdated.push(album._id)
            votedUpdated = votedUpdated + 1
        }

        let userToUpdate = {
            ...loggedInUser,
            votedFor : [...votedForUpdated]
        }
        let API = API_PATHS.UPDATE_USER
        let rawResponse = await fetch(API, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userToUpdate)
        })
        let response = await rawResponse.json()
        if (response.message) {
            console.log("User update Failed")
        } else {
            console.log(response)
            localStorage.setItem('currentUser', JSON.stringify(response))
            this.props.changeUserInfo(response)
        }

        let albumToUpdate = {
            ...album,
            voted : votedUpdated
        }
        let API1 = API_PATHS.GALLERY_UPDATE
        let rawResponse1 = await fetch(API1, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(albumToUpdate)
        })
        let response1 = await rawResponse1.json()
        if (response1.message) {
            console.log("Album update Failed")
        } else {
            albumList[albumIndex] = response1
            this.setState({
                albumList
            })
        }
    }

    toAlbumPage(e,album) {
        e.preventDefault()
        window.location.href = `/album?id=${album._id}`
    }

    addAlbum() {
        document.getElementsByClassName('adding-album-block')[0].style.opacity = 1
        document.getElementsByClassName('adding-album-block')[0].style.visibility = "visible"
    }

    async componentDidMount() {
        let loggedInUser = this.props.userInfo
        let url = new URL(window.location.href)
        let params = new URLSearchParams(url.search);
        let userId = params.get('userId') || loggedInUser._id

        let API1 = API_PATHS.GET_USER + userId
        let rawResponse1 = await fetch(API1, {
            method: 'GET',
        })
        let thisUser = await rawResponse1.json()
        this.setState({
            thisUser
        })

        let API = API_PATHS.GALLERY_GET_MANY + `?owner=${userId}`
        let rawResponse = await fetch(API, {
            method: 'GET',
        })
        let albumList = await rawResponse.json()
        this.setState({
            albumList
        })

        let votedAlbums = []
        for ( let album of albumList) {
            if ( loggedInUser.votedFor.includes(album._id) ) {
                votedAlbums.push(album._id)
            }
        }
        this.setState({
            votedAlbums : [...votedAlbums]
        })
    }

    render() {
        let loggedInUser = this.props.userInfo
        let thisUser = this.state.thisUser
        let albumList = this.state.albumList
        return (
            <div className="user-albums-section">
                {
                    albumList.map((album, i) => {
                        let heart = this.state.votedAlbums.includes(album._id) ? require('../icons/red-heart.png') : require('../icons/black-heart.png')
                        return (
                            <div className="user-album" id={album._id} key={i}>
                                <div className="album-image">
                                    <div className="img-blur" onClick={(e) => this.toAlbumPage(e,album)}></div>
                                    {
                                        album.images[0] ? <img alt="" src={require(`../images/${album.images[0]}`)}></img> : <img alt="" src={require('../images/default.jpg')}></img>
                                    }
                                </div>
                                <div className="voted">
                                    <img alt="" src={heart} onClick={() => this.vote(album)}></img>


                                    <span id="numberOfVoted"> {album.voted} </span>
                                </div>
                                <div className="album-title" onClick={(e) => this.toAlbumPage(e,album)}>
                                    {album.albumName}
                                </div>
                                <div className="album-date">
                                    {album.date}
                                </div>
                            </div>
                        )
                    })
                }

                {
                    loggedInUser._id === thisUser._id ? 
                    <div className="user-album" id="addAlbum" onClick={() => this.addAlbum()}>
                        <div className="album-image">
                            <div className="adding-blur"></div>
                            <div className="adding-block">
                                <img alt="" src={add}></img>
                            </div>

                        </div>
                    </div> : ""
                }
                

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
