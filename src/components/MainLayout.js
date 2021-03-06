import React, { Component } from 'react'
// import Nav from './Nav'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import './MainLayout.css'

class MainLayout extends Component {
  
    
    render() {
        return (
            <div className={"main-container " + this.props.className}>
                <Nav bg={this.props.nav}></Nav>
                {
                    this.props.header ? (
                    <Header>
                        {this.props.headerContent}
                    </Header>
                    ) : ""
                }
                
                <div className="main">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default MainLayout