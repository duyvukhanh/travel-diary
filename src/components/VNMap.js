import React, { Component } from 'react'
import './Footer.css'
import { VN_MAP } from '../config/map.js'
import './VNMap.css'
import commentSvg from '../icons/comment1.svg'
import $ from 'jquery'

class VNMap extends Component {
    constructor(props) {
        super(props)
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

    updatePlaceInfo(title) {
        document.getElementsByClassName('place-info')[0].style.display = 'none'
        document.getElementsByClassName('place-title')[0].innerHTML = title
        $('.place-info').fadeIn()
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
                                let className = `land ${item.code}`
                                return (
                                    <path key={i} title={item.title} className={className} d={item.vector}
                                    onMouseOver={(e,text,id) => this.showToolTip(e,item.title,item.code)}
                                    onMouseOut={(id) => this.hideToolTip(item.code)}
                                    onClick={() => this.updatePlaceInfo(item.title)}>

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

export default VNMap