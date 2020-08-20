import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import menu from '../icons/menu.svg';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu : false,
            backgroundColor : "",
            height : "100px",
            textColor : "#fff",
        }
    }
    
    showMenu() {
        this.setState({
            showMenu : !this.state.showMenu
        })
    }

    componentWillMount() {
        if (this.props.bg == "white") {
            this.setState({
                backgroundColor : "#fff",
                height : "100px",
                textColor : "#343a40"
            })
        }
    }

    componentDidMount() {
        window.onscroll = () => {
            let scrollY = window.pageYOffset
            let backgroundColor = scrollY > 0 ? "#fff" : ""
            let height = scrollY > 0 ? "70px" : ""
            let textColor = scrollY > 0 ? "#343a40" : "#fff"
            if (this.props.bg != "white") {
                this.setState({
                    backgroundColor,
                    height,
                    textColor
                })
            }
        }
    }

    render() {
        let showMenu = this.state.showMenu
        let opacity = showMenu ? '1' : '0'
        let display = showMenu ? 'block' : 'none'
        let style = {
            opacity,
            display
        }
        let navBackgroundStyle = {
            backgroundColor : this.state.backgroundColor,
            height : this.state.height
        }

        let textColorStyle = {
            color : this.state.textColor
        }
        return (
            <nav className="nav" style={navBackgroundStyle}>
                <div className="nav-home-item" >
                    <Link to="/" className="nav-home-item" style={textColorStyle}>Travel Diary</Link>
                </div>
                <div className="nav-group-items">
                    <Link to="/" className="nav-item nav-active" style={textColorStyle}>Home</Link>
                    <Link to="/gallery" className="nav-item" style={textColorStyle}>Gallery</Link>
                    <Link to="/profile" className="nav-item" style={textColorStyle}>Profile</Link>
                    <Link to="/about" className="nav-item" style={textColorStyle}>About</Link>
                    <Link to="/login" className="nav-item" style={textColorStyle}>login</Link>
                    {/* <Link to="/" className="nav-item">Đăng xuất</Link> */}
                </div>
                <div className="nav-group-items-sm" onClick={() => this.showMenu()}>
                    <img src={menu}></img>
                        {/* <svg height="30" viewBox="0 -53 384 384" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg> */}
                    
                </div>
                <div className="nav-group-items-sm-extend" style={style}>
                    <Link to="/" className="nav-item-extend">Home</Link>
                    <Link to="/gallery" className="nav-item-extend">Gallery</Link>
                    <Link to="/profile" className="nav-item-extend">Profile</Link>
                    <Link to="/about" className="nav-item-extend">About</Link>
                    <button className="nav-item-extend-btn login-btn-ext">Login</button>
                    <button className="nav-item-extend-btn signup-btn-ext">Sign up</button>

                </div>
            </nav>
        )
    }
}

export default Nav