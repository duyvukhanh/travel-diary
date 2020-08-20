import React, { Component } from 'react'
import MainLayout from '../components/MainLayout'
import AboutPageItem from '../components/AboutPage'



class About extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        document.getElementsByClassName('main')[0].style.display = "block"
    }

    render() {
        return (
            <MainLayout className="home-page" header="true" headerContent="About us">
                <AboutPageItem></AboutPageItem>
                
            </MainLayout>
        )
    }
}

export default About