import React, { Component } from 'react'

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="intro-t">
       <div className="overlay">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
            {/* <a className="navbar-brand page-scroll" href="#page-top">Soft Generate</a>  */}
            <div>
              <div>
               <a href="#header" className="page-scroll">
                  <img
                    src={require("../logo(gold).png")} alt="softGenerate"
                    style={{ width: 120 }}
                />
               </a>
              </div>
            </div>
            </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {/* <li><a href="#features" className="page-scroll">Features</a></li> */}
              <li><a href="#header" className="page-scroll">Home</a></li>
              <li><a href="#about" className="page-scroll">About</a></li>
              <li><a href="#services" className="page-scroll">Services</a></li>
              <li><a href="#portfolio" className="page-scroll">Portfolios</a></li>
              <li><a href="#testimonials" className="page-scroll">Testimonials</a></li>
              {/* <li><a href="#team" className="page-scroll">Team</a></li> */}
              <li><a href="#contact" className="page-scroll">Contact</a></li>
            </ul>
          </div>
        </div>
        </div>
        </div>
      </nav>
    
    )
  }
}

export default Navigation

