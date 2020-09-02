import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import menu from '../icons/menu.svg'
import search_black from '../icons/search.svg'
import search_white from '../icons/search_white.svg'
import { connect } from 'react-redux'
import {changeUserInfo} from '../actions'
import {API_PATHS} from '../config'


class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu : false,
            backgroundColor : "",
            height : "100px",
            textColor : "#fff",
            search: [],
            displaySuggestion: false,
        }
    }

    handleLogout() {
        this.props.changeUserInfo({})
        localStorage.setItem('currentUser',JSON.stringify({}))
        window.location.href = "/"
    }
    
    showMenu() {
        this.setState({
            showMenu : !this.state.showMenu
        })
    }

    componentWillMount() {
        if (this.props.bg === "white") {
            this.setState({
                backgroundColor : "#fff",
                height : "100px",
                textColor : "#343a40",
                borderBottom : "none",
            })
        }
    }

    componentDidMount() {
        window.onscroll = () => {
            let scrollY = window.pageYOffset
            let backgroundColor = scrollY > 0 ? "#fff" : ""
            let height = scrollY > 0 ? "70px" : ""
            let textColor = scrollY > 0 ? "#343a40" : "#fff"
            let borderBottom = scrollY > 0 ? "1px solid #bdbdbd" : "none"
            if (this.props.bg !== "white") {
                this.setState({
                    backgroundColor,
                    textColor,
                })
            }
            this.setState({
                borderBottom,
                height,
            })
        }
    }

    async handleSearch() {
        let searchInput = document.getElementById('searchInput')
        let value = searchInput.value
        let API = API_PATHS.GET_MANY_USER

        if ( value ) {
            API = API + `?search=${value}`
            let rawResponse = await fetch(API, {
                method: 'GET'
            })
            let response = await rawResponse.json()
            if (response.message) {
                console.log("Failed")
            } else {
                this.setState({search:response})
            }
            this.setState({displaySuggestion:true})
        } else {
            this.setState({displaySuggestion:false})
        }
    }

    toUserPage(userId) {
        window.location.href = `http://localhost:3000/gallery?userId=${userId}`
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
            height : this.state.height,
            borderBottom : this.state.borderBottom,
        }

        let textColorStyle = {
            color : this.state.textColor
        }
        let isLoggedIn = Object.keys(this.props.userInfo).length === 0 ? false : true
        let displaySuggestion = this.state.displaySuggestion ? "suggestion active" : "suggestion"
        return (
            <nav className="nav" style={navBackgroundStyle}>
                <div className="nav-home-item" >
                    <Link to="/" className="nav-home-item" style={textColorStyle}>Travel Diary</Link>
                </div>
                <div className="nav-group-items">
                    <Link to="/" className="nav-item nav-active" style={textColorStyle}>Home</Link>
                    {
                        isLoggedIn
                        ? 
                            <Link to="/gallery" className="nav-item" style={textColorStyle}>Gallery</Link>
                        : ""
                    }
                    {
                        isLoggedIn
                        ? 
                            <Link to="/profile" className="nav-item" style={textColorStyle}>Profile</Link>
                        : ""
                    }
                            
                    
                    <Link to="/about" className="nav-item" style={textColorStyle}>About</Link>

                    <div className="search-box">
                        {/* <Link to="/#" className="nav-item" style={textColorStyle}>Search</Link> */}
                        <div className="search">
                            <img alt="" src={search_white}></img>
                            <input type="text" id="searchInput" onInput={() => this.handleSearch()}></input>
                            <div className="search-btn">
                                <img alt="" src={search_black}></img>
                            </div>
                        </div>
                        <div className={displaySuggestion}>
                            <div></div>
                            {
                                this.state.search.map((user, i) => {
                                    return <div className="suggestion-item" key={i} onClick={() => this.toUserPage(user._id)}>{user.displayName}</div>
                                })
                            }
                            <div></div>
                        </div>
                        
                    </div>
                </div>
                {
                    isLoggedIn 
                    ? 
                    <div className="nav-group-items last-group">
                        
                        <Link to="#" className="nav-item" onClick={() => this.handleLogout()} style={textColorStyle}>Đăng xuất</Link>
                    </div>
                    :
                    <div className="nav-group-items last-group">
                        <Link to="/login" className="nav-item" style={textColorStyle}>login</Link>
                    </div>
                }
                <div className="nav-group-items-sm" onClick={() => this.showMenu()}>
                    <img alt="" src={menu}></img>
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

const mapStateToProps = (state) => {
    let { userInfo } = state
    return { userInfo }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeUserInfo: (userInfo) => dispatch(changeUserInfo(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)