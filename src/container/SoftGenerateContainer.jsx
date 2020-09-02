import React, { Component } from 'react'
import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import OurServices from '../components/OurService';
import Gallery from '../components/Gallery';
import Testimonial from '../components/Testimonial';
import OurTeam from '../components/OurTeam';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import './softgenerate.scss';
import Data from '../data.json';
import axios from "axios";
import Navigation from "./Navigation";

class SoftGenerateContainer extends Component {
    state = {
        resumeData: {},
    }

    componentDidMount() {
        this.setState({
          resumeData: Data
        });
    }

    getResumeData() {
        axios
          .get(`../data.json`)
          .then((res) => {
            console.log(res.data);
            this.setState({ 
                resumeData: res.data
             });
          });
    }

   render(){
       return (
         <div style={{ height: "100%", width: "100%" }}>
           <Navigation />
           <Header data={this.state.resumeData.Header} />
           {/* <BannerSlider data={this.state.resumeData.Header} /> */}
           {/* <Features data={this.state.resumeData.Features} /> */}
           <AboutUs data={this.state.resumeData.About} />
           <OurServices data={this.state.resumeData.Services} />
           <Gallery />
           <Testimonial data={this.state.resumeData.Testimonials} />
           {/* <OurTeam data={this.state.resumeData.Team} /> */}
           <ContactUs data={this.state.resumeData.Contact} />
           <Footer />
         </div>
       );
   }
}

export default SoftGenerateContainer;