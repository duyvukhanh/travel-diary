import React, { Component } from 'react'
import './RegisterPage.css'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeUserInfo } from '../actions'
import { API_PATHS } from '../config'


const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: {
                email: "",
                password: "",
                displayName: "",
            }
        }
    }

    validateRegisterForm() {
        let registerForm = document.getElementById('registerForm')
        let email = registerForm.email.value
        let password = registerForm.password.value
        let displayName = registerForm.displayName.value

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
        if (!displayName) {
            error.displayName = "Required display name !"
        } else {
            error.displayName = ""
        }
        this.setState({error})
    }

    async handleRegister(e) {
        e.preventDefault()
        let API = API_PATHS.REGISTER
        let registerForm = document.getElementById('registerForm')
        let email = registerForm.email.value
        let password = registerForm.password.value
        let displayName = registerForm.displayName.value

        let reqBody = JSON.stringify({
            email: email,
            password: password,
            displayName: displayName,
        })
        console.log(reqBody)
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
            window.location.href = '/login'
        } else {
            console.log("ahihi")
        }
    }
    
    render() {
        let isLoggedIn = Object.keys(this.props.userInfo).length === 0 ? false : true // Kiem tra obj rong
        let isEmailError = this.state.error.email 
        let isPasswordError = this.state.error.password
        let isDisplayNameError = this.state.error.displayName
        
        let emailErrClassName = isEmailError ? "warning active" : "warning"
        let passwordErrClassName = isPasswordError ? "warning active" : "warning"
        let displayNameErrClassName = isDisplayNameError ? "warning active" : "warning"

        
        if (isLoggedIn) {
            return (
                <Redirect to="/" />
            )
        } else {
            return (
                <div className="register-page">
                    <div className="register-form">
                        <Link to="/" className="title">Travel Diary</Link>
                        <form id="registerForm">
                            <input type="email" placeholder="Email" name="email" onInput={() => this.validateRegisterForm()}></input>
                            <div className={emailErrClassName}>{this.state.error.email}</div>

                            <input type="password" placeholder="Password" name="password" onInput={() => this.validateRegisterForm()}></input>
                            <div className={passwordErrClassName}>{this.state.error.password}</div>

                            <input type="text" placeholder="Display Name" name="displayName" onInput={() => this.validateRegisterForm()}></input>
                            <div className={displayNameErrClassName}>{this.state.error.displayName}</div>

                            <button className="register-btn" onClick={(e) => this.handleRegister(e)}>Register</button>
                        </form>
                        <div className="to-login">
                            <div>Already have an account?</div>
                            <div><Link to="/login">Login</Link></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
