import React, { Component } from 'react'

export class Navigation extends Component {
  render() {
    return (
      //   <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      //   <div className="container"> 
      //     <div className="navbar-header">
      //       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
      //       <a className="navbar-brand page-scroll" href="#page-top">Soft Generate</a>
      //       {/* <img src={require("../logo.png")} alt="softGenerate" style={{ width: '100%', height: '200px' }} className="navbar-brand page-scroll"/> */}
      //       </div> 
      //     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      //       <ul className="nav navbar-nav navbar-right">
      //         <li><a href="#features" backgroundColor="green" className="page-scroll">Features</a></li>
      //         <li><a href="#about" className="page-scroll">About</a></li>
      //         <li><a href="#services" className="page-scroll">Services</a></li>
      //         <li><a href="#portfolio" className="page-scroll">Gallery</a></li>
      //         <li><a href="#contact" className="page-scroll">Contact</a></li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>

      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
            {/* <a className="navbar-brand page-scroll" href="#page-top">Soft Generate</a>  */}
            <div>
              <div>
                <img
                  src={require("../logo.png")} alt="softGenerate"
                  //src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5jrx_YpRCzYNpmDaeFa6M43NTgyWFr2qjAg&usqp=CAU" alt=""
                  style={{ width: 100 }}
                />
              </div>
            </div>
            </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {/* <li><a href="#features" className="page-scroll">Features</a></li> */}
              <li><a href="#home" className="page-scroll">Home</a></li>
              <li><a href="#about" className="page-scroll">About</a></li>
              <li><a href="#services" className="page-scroll">Services</a></li>
              <li><a href="#portfolio" className="page-scroll">Gallery</a></li>
              <li><a href="#testimonials" className="page-scroll">Testimonials</a></li>
              {/* <li><a href="#team" className="page-scroll">Team</a></li> */}
              <li><a href="#contact" className="page-scroll">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    
    )
  }
}

export default Navigation

