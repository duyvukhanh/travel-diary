import React, { Component } from 'react'
import './AlbumPageHeader.css'
import ava from '../images/duyava.jpg'
import $ from 'jquery'
import { connect } from 'react-redux'
import { changeUserInfo } from '../actions'
import { API_PATHS } from '../config'

class AlbumPageHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumId : '',
            album : {
                images: [],
                videos: [],
            },
            thisUser : {
                userImg: ''
            }
        }
    }

    async componentDidMount() {
        document.getElementsByClassName('main')[0].style.width = "100%"
        document.getElementsByClassName('main')[0].style.maxWidth = "100%"
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
        let API1 = API_PATHS.GET_USER + '/' + album.owner
        let rawResponse1 = await fetch(API1, {
            method: 'GET',
        })
        let thisUser = await rawResponse1.json()
        this.setState({thisUser})

    }

    toAlbumContent() {
        let scrollHeight = $('.album-page-header').height();
        console.log(scrollHeight)

        window.scrollTo(0, scrollHeight);
    }
    
    render() {
        console.log(this.state.thisUser)
        return (
            <div className="album-page-header">
                <div className="fade"></div>
                <div className="album-block">
                    <div className="album-name">
                        {this.state.album.albumName}
                    </div>
                    <div className="album-date">
                        {this.state.album.date}
                    </div>
                    <div className="start-button">
                        <button onClick={() => this.toAlbumContent()}>Open</button>
                    </div>
                </div>
                <div className="owner-block">
                    <div className="album-owner-img">
                        {
                            this.state.thisUser.userImg.length ? <img src={require(`../images/${this.state.thisUser.userImg}`)}></img> : <img src={require(`../images/default.jpg`)}></img>
                        }
                        
                    </div>
                    <div className="album-owner-name">
                        {this.state.thisUser.displayName}
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPageHeader)