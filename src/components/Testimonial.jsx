import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Testimonial extends Component {
    render(){
        // return(
        //     <div id="testimonials">
        //         <div className="container">
        //             <div className="section-title text-center">
        //                 <h2>What our clients say</h2>
		// 				<p>
        //                    Our End-To-End Solutions & On-Time Delivery Fetches Customer Delights
        //                 </p>
        //             </div>
        //             <div className="row">

        //                 {this.props.data ? this.props.data.map(d =>
        //                     <div className="col-md-4">
        //                         <div className="testimonial">
        //                             {/* <div className="testimonial-image"> <img src={d.img} alt="" /> </div> */}
        //                             <div className="testimonial-content">
        //                                 <p>"{d.text}"</p>
        //                                 <div className="testimonial-meta"> - {d.name} </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ) : 'loading'}

        //             </div>
        //         </div>
        //     </div>
        // )
        return(
            <div id="testimonials">
              <div className="container">
               <div className="section-title text-center">
                      <h2>What our clients say</h2>
                      <p>Our End-To-End Solutions & On-Time Delivery Fetches Customer Delights</p>
                 </div>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                    {/* <div className="col-md-4">
                                 <div className="testimonial">
                                     <div className="testimonial-content">
                                         <p>"{d.text}"</p>
                                         <div className="testimonial-meta"> - {d.name} </div>
                                     </div>
                                 </div>
                             </div> */}
                    {this.props.data ? this.props.data.map(d =>
                            <div>
                                 <img src="" alt="" />
                                 <div className="myCarousel">
                                     <h3>{d.name}</h3>
                                     <p>{d.text}</p>
                                 </div>
                            </div>
                         ) : 'loading'}

                    {/* <div>
                    <img src="/images/shirley.png" />
                    <div className="myCarousel">
                        <h3>Shirley Fultz</h3>
                        <h4>Designer</h4>
                        <p>
                        It's freeing to be able to catch up on customized news and not be
                        distracted by a social media element on the same site
                        </p>
                    </div>
                    </div>
                <div>
                <img src="/images/daniel.png" />
                <div className="myCarousel">
                    <h3>Daniel Keystone</h3>
                    <h4>Designer</h4>
                    <p>
                    The simple and intuitive design makes it easy for me use. I highly
                    recommend Fetch to my peers.
                    </p>
                </div>
                </div>

                <div>
                <img src="/images/theo.png" />
                <div className="myCarousel">
                    <h3>Theo Sorel</h3>
                    <h4>Designer</h4>
                    <p>
                    I enjoy catching up with Fetch on my laptop, or on my phone when
                    I'm on the go!
                    </p>
                </div>
                </div> */}

      </Carousel>
      
      </div>
      </div>
        )
      }
   
    }


export default Testimonial;