import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div style={{ background: '' }} className="header-menu">
                <div className="header-subMenu">Home</div>
                <div className="header-subMenu">About</div>
                <div className="header-subMenu">Services</div>
                <div className="header-subMenu">Gallery</div>
                <div className="header-subMenu">Testimonials</div>
                <div className="header-subMenu">Team</div>
                <div className="header-subMenu">Contact</div>
            </div>
        )
    }
}

export default Header;