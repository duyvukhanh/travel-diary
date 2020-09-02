import React, { Component } from 'react'
import './AboutPage.css'
import avaDuy from '../images/duyava.jpg'
import avaDung from '../images/dungava.jpg'


class AboutPageItem extends Component {
  
    
    render() {
        return (
            
            <div className="about-page">
                <div className="title">Who we are ?</div>
                <div className="about-page-items">
                    <div className="about-page-item">
                        <div className="avatar">
                            <img alt="" src={avaDuy}></img>
                        </div>
                        <div className="name">Khánh Duy</div>
                        <div className="position">Frontend</div>
                        <div className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut purus finibus enim cursus consequat. Integer ut tempus magna.</div>
                    </div>
                    <div className="about-page-item">
                        <div className="avatar">
                            <img alt="" src={avaDung}></img>
                        </div>
                        <div className="name">Nguyễn Dũng</div>
                        <div className="position">Backend</div>
                        <div className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut purus finibus enim cursus consequat. Integer ut tempus magna.</div>
                    </div>
                </div>
                <div className="title">What we do ?</div>
                <div className="purpose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dictum sem.
                    Fusce ut sollicitudin eros. Aliquam erat volutpat. Nullam et nibh eget orci rutrum dignissim.
                    Curabitur blandit consequat eros, vel dignissim sapien efficitur ac.
                    Morbi tincidunt ante in velit consectetur mollis eu vel nisl.
                    Vestibulum et sapien consectetur risus sollicitudin maximus vitae id tellus.
                    Fusce vel imperdiet lorem, ut venenatis orci. Phasellus scelerisque bibendum mi sed tempus.
                    Ut porta neque pulvinar sapien commodo, non bibendum ex condimentum. Fusce posuere faucibus eros non consequat.
                    Donec condimentum porta auctor. Mauris luctus tellus id justo dictum, ac tempor magna fringilla.
                    Nullam mattis efficitur mauris nec lacinia. Curabitur ac eros luctus, suscipit eros et, gravida nibh.
                </div>
            </div>
            
        )
    }
}

export default AboutPageItem