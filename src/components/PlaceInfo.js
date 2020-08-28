import React, { Component } from 'react'
import './PlaceInfo.css'

class PlaceInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="place-info">
                <div className="place-title">Lao Cai</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum efficitur urna eget porttitor. Nam eget malesuada felis, ac luctus lorem. Donec nec mauris egestas, ullamcorper velit feugiat, lacinia orci. Aliquam euismod lectus justo, ac tempus dolor gravida et. Integer feugiat sapien eget laoreet egestas. Cras malesuada, sapien vitae efficitur mattis, ex urna faucibus ipsum, non facilisis urna mauris ac sem. Vestibulum fringilla scelerisque mauris, quis viverra tortor mattis nec. Proin mollis dui leo. Ut non lorem interdum, blandit ipsum et, venenatis mi.</p>
                {/* <div className="collection-title">Collections :</div> */}
                {/* <ul id="albumList">
                    <li>Sa Pa</li>
                    <li>Bac Ha</li>
                </ul> */}
            </div>
        )
    }
}

export default PlaceInfo