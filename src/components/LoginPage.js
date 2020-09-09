import React, { Component } from 'react'
import './LoginPage.css'
import { Link, Redirect } from 'react-router-dom'
import { API_PATHS } from '../config'
import { connect } from 'react-redux'
import { changeUserInfo } from '../actions'


const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: {
                email: "",
                password: ""
            }
        }
    }

    validateLoginForm() {
        let loginForm = document.getElementById('loginForm')
        let email = loginForm.email.value
        let password = loginForm.password.value
        let error = this.state.error
        if (!EMAIL_REGEX.test(email)) {
            error.email = "Not an email !"
        } else {
            error.email = ""
        }
        if (password.length < 6) {
            error.password = "Password must be at least 6 characters !"
        } else {
            error.password = ""
        }
        this.setState({error})
    }

    async handleLogin(e) {
        e.preventDefault()
        let API = API_PATHS.LOGIN
        let loginForm = document.getElementById('loginForm')
        let email = loginForm.email.value
        let password = loginForm.password.value
        let reqBody = JSON.stringify({
            email: email,
            password: password,
        })
        let rawResponse = await fetch(API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: reqBody
        })
        const user = await rawResponse.json();
        if (!user.message) {
            console.log(user)
            this.props.changeUserInfo(user)
            localStorage.setItem('currentUser', JSON.stringify(user))
        } else {
            document.getElementsByClassName('login-error')[0].style.display = "flex"
        }
    }

    render() {
        let isLoggedIn = Object.keys(this.props.userInfo).length === 0 ? false : true // Kiem tra obj rong
        let isEmailError = this.state.error.email 
        let isPasswordError = this.state.error.password 
        
        let emailErrClassName = isEmailError ? "warning active" : "warning"
        let passwordErrClassName = isPasswordError ? "warning active" : "warning"
        
        if (isLoggedIn) {
            return (
                <Redirect to="/" />
            )
        } else {
            return (
                <div className="login-page">
                    <div className="login-form">
                        <Link to="/" className="title">Travel Diary</Link>
                        <form id="loginForm" >
                            <input type="email" placeholder="Email" name="email" onInput={() => this.validateLoginForm()}></input>
                            <div className={emailErrClassName}>{this.state.error.email}</div>
                            <input type="password" placeholder="Password" name="password" onInput={() => this.validateLoginForm()}></input>
                            <div className={passwordErrClassName}>{this.state.error.password}</div>
                            <div className="login-error">
                                Email or password invalid !!
                            </div>
                            <button className="login-btn" onClick={(e) => this.handleLogin(e)}>Login</button>
                        </form>
                        <div className="forgot-pw">
                            <div>Don't have an account?</div>
                            <div><Link to="/register">Sign Up</Link></div>
                        </div>
                    </div>
                </div>
            )
        }

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

