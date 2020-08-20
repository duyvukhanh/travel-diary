import React, { Component } from 'react'
import './RegisterPage.css'
import {Link} from 'react-router-dom'

class RegisterPage extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="register-page">
                <div className="register-form">
                    <Link to="/" className="title">Travel Diary</Link>
                    <form id="registerForm">
                        <input type="email" placeholder="Email" name="email"></input>
                        <input type="password" placeholder="Password" name="password"></input>
                        <input type="text" placeholder="Display Name" name="displayName"></input>
                        <button class="register-btn">Register</button>
                    </form>
                    <div class="to-login">
                        <div>Already have an account?</div>
                        <div><Link to="/login">Login</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage