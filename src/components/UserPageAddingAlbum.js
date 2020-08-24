import React, { Component } from 'react'
import './UserPageAddingAlbum.css'

class AddingAlbum extends Component {
    constructor(props) {
        super(props)
    }

    cancelAddAlbumForm(e) {
        e.preventDefault()
        document.getElementsByClassName('adding-album-block')[0].style.opacity = 0
        document.getElementsByClassName('adding-album-block')[0].style.visibility = "hidden"
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
                        <input type="date" placeholder="" onFocus={this.type='date'} name="albumDate"></input>
                    </div>
                    <div className="button-group">
                        <button id="cancelBtn" onClick={(e) => this.cancelAddAlbumForm(e)}>Cancel</button>
                        <button id="submitBtn">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddingAlbum