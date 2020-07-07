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

class SoftGenerateContainer extends Component {
   render(){
       return(
           <div style={{background:'pink',height:'100%',width:'100%'}}>Container
            <Header />
            <BannerSlider />
            <Features />
            <AboutUs />
            <OurServices />
            <Gallery />
            <Testimonial />
            <OurTeam />
            <ContactUs />
            <Footer />
           </div>        
       )
   }
}

export default SoftGenerateContainer;