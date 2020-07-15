import React, { Component } from 'react'

class Header extends Component {
    render() {
      return (
        <header id="header">
          <div className="intro">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1>{this.props.data ? this.props.data.title : 'Loading'}<span></span></h1>
                    <p>{this.props.data ? this.props.data.paragraph : 'Loading'}</p>
                    <a href="#features" className="btn btn-custom btn-lg page-scroll">Learn More</a> </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )
  
        // return (
        //   <div style={{ background: "" }} className="header-menu">
        //     <div className="header-subMenu">Home</div>
        //     <div className="header-subMenu">About</div>
        //     <div className="header-subMenu">Services</div>
        //     <div className="header-subMenu">Gallery</div>
        //     <div className="header-subMenu">Testimonials</div>
        //     <div className="header-subMenu">Team</div>
        //     <div className="header-subMenu">Contact</div>
        //   </div>
        // );
        
    }
}

export default Header;