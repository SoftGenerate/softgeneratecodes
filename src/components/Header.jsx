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
                    <h2 style={{color: 'white'}}>{this.props.data ? this.props.data.title : 'Loading'}<span></span></h2>
                    <p>{this.props.data ? this.props.data.paragraph : 'Loading'}</p>
                    {/* <a href="#features" className="btn btn-custom btn-lg page-scroll">Learn More</a> </div> */}
                    <a href="#about" className="btn btn-custom btn-lg page-scroll">Learn More</a> </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )
    }
}

export default Header;