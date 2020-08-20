import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let height = this.props.height || 500
        let style = {
            height: height + 'px'
        }
        return (
            <div className="header" style={style}>
            
                <div className="fade"></div>
                <div className="header-content">
                    {this.props.children}
                    <Link to="/register" id="signUpBtn">sign up</Link>
                </div>
            </div>
        )
    }
}

export default Footer