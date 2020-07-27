import React, { Component } from 'react'

class OurServices extends Component {
    render() {
        return (
          <div id="services" className="text-center">
            <div className="container">
              <div className="section-title">
                <h2>Our Services</h2>

              </div>
              <div className="row">
                {this.props.data
                  ? this.props.data.map((d) => (
                      <div className="col-md-4">
                        {" "}
                        <i className={d.icon}></i>
                        <div className="service-desc">
                          <h3>{d.name}</h3>
                          <p>{d.text}</p>
                        </div>
                      </div>
                    ))
                  : "loading"}
              </div>
            </div>
          </div>
        );
    }
}

export default OurServices;