import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
// import menu from '../icons/menu.svg';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu : false
        }
    }
    
    async showMenu() {
        this.setState({
            showMenu : !this.state.showMenu
        })
        
    }

    render() {
        let showMenu = this.state.showMenu
        let opacity = showMenu ? '1' : '0'
        let style = {
            opacity
        }
        return (
            <nav className="nav">
                <div className="nav-home-item">
                    <Link to="/" className="nav-home-item">Travel Diary</Link>
                </div>
                <div className="nav-group-items">
                    <Link to="/" className="nav-item nav-active">Home</Link>
                    <Link to="/" className="nav-item">Profile</Link>
                    <Link to="/gallery" className="nav-item">Gallery</Link>
                    <Link to="/" className="nav-item">About</Link>
                    <Link to="/" className="nav-item">login</Link>
                    {/* <Link to="/" className="nav-item">Đăng xuất</Link> */}
                </div>
                <div className="nav-group-items-sm" onClick={() => this.showMenu()}>
                    <Link to="/#" className="nav-item">
                        <svg height="30" viewBox="0 -53 384 384" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
                    </Link>
                </div>
                
                <div className="nav-group-items-sm-extend" style={style}>
                    <Link to="/" className="nav-item-extend">Home</Link>
                    <Link to="/" className="nav-item-extend">Profile</Link>
                    <Link to="/gallery" className="nav-item-extend">Gallery</Link>
                    <Link to="/" className="nav-item-extend">About</Link>
                    <button className="nav-item-extend-btn login-btn-ext">Login</button>
                    <button className="nav-item-extend-btn signup-btn-ext">Sign up</button>

                </div>
                
            </nav>
        )
    }
}

export default Nav