import React, { Component } from 'react'
import './LoginPage.css'
import {Link} from 'react-router-dom'

class LoginPage extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="login-page">
                <div className="login-form">
                    <Link to="/" className="title">Travel Diary</Link>
                    <form id="loginForm">
                        <input type="email" placeholder="Email" name="email"></input>
                        <input type="password" placeholder="Password" name="password"></input>
                        <button class="login-btn">Login</button>
                    </form>
                    <div class="forgot-pw">
                        <div>Don't have an account?</div>
                        <div><Link to="/register">Sign Up</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage