import React, { Component } from 'react'
// import Nav from './Nav'
import Footer from './Footer'
import Header from './Header'
import './MainLayout.css'

class MainLayout extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className={"main-container " + this.props.className}>
                <Header>
                    {this.props.headerContent}
                </Header>
                <div className="main">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default MainLayout