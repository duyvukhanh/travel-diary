import React, { Component } from 'react'
import './Footer.css'
import { VN_MAP } from '../config/map.js'
import './VNMap.css'
import commentSvg from '../icons/comment1.svg'
import $ from 'jquery'
import { connect } from 'react-redux'
import { changeUserInfo } from '../actions'
import { API_PATHS } from '../config'

class VNMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visited: [],
            albumList: [],
        }
    }

    showToolTip(e, text, id) {
        let tooltip = document.getElementById(id);
        let pathBox = document.getElementsByClassName(id)[0].getBoundingClientRect()
        let parentBox = document.getElementsByClassName('map-svg')[0].getBoundingClientRect()

        let left = pathBox.x - parentBox.x + (pathBox.width/2) 
        let top = pathBox.y - parentBox.y 
        
        tooltip.style.display = "block";
        tooltip.style.left = left - tooltip.getBoundingClientRect().width/2 + 'px';
        tooltip.style.top = top - tooltip.getBoundingClientRect().height + 'px';
    }

    hideToolTip(id) {
        var tooltip = document.getElementById(id);
        tooltip.style.display = "none";
    }

    toAlbumPage(e) {
        let albumId = e.target.id
        console.log(albumId)
    }

    updatePlaceInfo(item) {
        document.getElementsByClassName('place-info')[0].style.display = 'none'
        document.getElementsByClassName('place-title')[0].innerHTML = item.title
        if ( this.state.visited.includes(item.code) ) {
            let list = ``
            for (let album of this.state.albumList) {
                if (item.code == album.place) {
                    list += `<li id='${album._id}'><a href='/album?id=${album._id}'>${album.albumName}</a></li>`
                }
            }
            let content = `
                <div class="place-title">${item.title}</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum efficitur urna eget porttitor. Nam eget malesuada felis, ac luctus lorem. Donec nec mauris egestas, ullamcorper velit feugiat, lacinia orci. Aliquam euismod lectus justo, ac tempus dolor gravida et. Integer feugiat sapien eget laoreet egestas. Cras malesuada, sapien vitae efficitur mattis, ex urna faucibus ipsum, non facilisis urna mauris ac sem. Vestibulum fringilla scelerisque mauris, quis viverra tortor mattis nec. Proin mollis dui leo. Ut non lorem interdum, blandit ipsum et, venenatis mi.</p>
                <div class="collection-title">Collections :</div>
                <ul id="albumList">
                    ${list}
                </ul>
            ` 
            document.getElementsByClassName('place-info')[0].innerHTML = content
        } else {
            let content = `
                <div class="place-title">${item.title}</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum efficitur urna eget porttitor. Nam eget malesuada felis, ac luctus lorem. Donec nec mauris egestas, ullamcorper velit feugiat, lacinia orci. Aliquam euismod lectus justo, ac tempus dolor gravida et. Integer feugiat sapien eget laoreet egestas. Cras malesuada, sapien vitae efficitur mattis, ex urna faucibus ipsum, non facilisis urna mauris ac sem. Vestibulum fringilla scelerisque mauris, quis viverra tortor mattis nec. Proin mollis dui leo. Ut non lorem interdum, blandit ipsum et, venenatis mi.</p>
            ` 
            document.getElementsByClassName('place-info')[0].innerHTML = content
        }
        $('.place-info').fadeIn()
    }

    async componentDidMount() {
        let loggedInUser = this.props.userInfo
        let API = API_PATHS.GALLERY_GET_MANY + `?owner=${loggedInUser._id}`
        let rawResponse = await fetch(API, {
            method: 'GET',
        })
        let albumList = await rawResponse.json()
        let visited = []
        for (let album of albumList) {
            if (!visited.includes(album.place)) {
                visited.push(album.place)
            }
        }
        this.setState({visited,albumList})
    }

    

    render() {
        return (
            <div className="map-svg">
                {
                    VN_MAP.map((item, i) => {
                        return (
                            <div key={i} id={item.code} className="tool-tip">
                                {item.title}
                            </div>                         
                        )
                    })
                }
                <svg viewBox="0 0 400 915" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <g>
                        {
                            VN_MAP.map((item, i) => {
                                let className = this.state.visited.includes(item.code) ? `land ${item.code} checked` : `land ${item.code}`
                                return (
                                    <path key={i} title={item.title} className={className} d={item.vector}
                                    onMouseOver={(e,text,id) => this.showToolTip(e,item.title,item.code)}
                                    onMouseOut={(id) => this.hideToolTip(item.code)}
                                    onClick={() => this.updatePlaceInfo(item)}>

                                    </path>                          
                                )
                            })
                        }
                    </g>
                </svg>
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

export default connect(mapStateToProps, mapDispatchToProps)(VNMap)