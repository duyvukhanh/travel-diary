import React, { Component } from 'react'
import Nav from './Nav'
import './Header.css'

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="header">
                <Nav></Nav>
                <div className="fade"></div>
                <div className="header-content">
                    {this.props.children}
                    <button>sign up</button>
                </div>
            </div>
        )
    }
}

export default Footer