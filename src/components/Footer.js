import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="footer">
                &#169; 2020 Travel Diary Inc. Made with love in Mindx
            </div>
        )
    }
}

export default Footer