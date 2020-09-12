import React, { Component } from 'react'
import './UserPageAddingAlbum.css'
import {VN_MAP} from '../config/map'
import { connect } from 'react-redux'
import { changeUserInfo } from '../actions'
import { API_PATHS } from '../config'

class AddingAlbum extends Component {
    cancelAddAlbumForm(e) {
        e.preventDefault()
        document.getElementsByClassName('adding-album-block')[0].style.opacity = 0
        document.getElementsByClassName('adding-album-block')[0].style.visibility = "hidden"
    }

    ordinal_suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j === 1 && k !== 11) {
            return i + "st";
        }
        if (j === 2 && k !== 12) {
            return i + "nd";
        }
        if (j === 3 && k !== 13) {
            return i + "rd";
        }
        return i + "th";
    }
    
    async handleAddingAlbumForm(e) {
        e.preventDefault()
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        let addingAlbumForm = document.getElementById('addingAlbumForm')
        let albumName = addingAlbumForm.albumName.value
        let date = addingAlbumForm.date.value
        let place = addingAlbumForm.place.value

        // create new album 
        date = new Date(date)
        let day = date.getDate()
        day = this.ordinal_suffix_of(day)
        let month = monthNames[date.getMonth()]
        let year = date.getFullYear()
        date = `${month} ${day} ${year}`
        let API = API_PATHS.GALLERY_CREATE
        let reqBody = JSON.stringify({
            albumName,
            date,
            place,
            owner: this.props.userInfo._id,
            voted: 0,
        })
        let rawResponse = await fetch(API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: reqBody
        })
        
        // add album to user
        let album = await rawResponse.json()
        let playloadToUpdate = JSON.stringify({
            _id : this.props.userInfo._id,
            gallery : [...this.props.userInfo.gallery, album._id]
        })
        let API1 = API_PATHS.UPDATE_USER

        let rawResponseUser = await fetch(API1, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: playloadToUpdate
        })
        let userUpdated = await rawResponseUser.json()
        localStorage.setItem('currentUser', JSON.stringify(userUpdated))
        this.props.changeUserInfo(userUpdated)
        window.location.reload()
    }

    render() {
        return (
            <div className="adding-album-block">
                <div className="blurr"></div>

                <div className="adding-album-title">Create new collection</div>
                <form id="addingAlbumForm">
                    <div className="album-input">
                        <div>Give your collection a name</div>
                        <input type="text" placeholder="Name of your collection" name="albumName"></input>
                    </div>
                    <div className="album-input">
                        <div>What is the date of the event?</div>
                        <input type="date" placeholder="" name="date"></input>
                    </div>
                    <div className="album-input">
                        <div>Event place :</div>
                        <select name="place" >
                            {
                                VN_MAP.map((place, i) => {
                                    return <option key={i} value={place.code}>{place.title}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="button-group">
                        <button id="cancelBtn" onClick={(e) => this.cancelAddAlbumForm(e)}>Cancel</button>
                        <button id="submitBtn" onClick={(e) => this.handleAddingAlbumForm(e)}>Create</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddingAlbum)