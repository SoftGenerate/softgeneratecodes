import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Header from '../src/components/Header';
import BannerSlider from '../src/components/BannerSlider';
import Features from '../src/components/Features';
import AboutUs from "../src/components/AboutUs";
import OurService from "../src/components/OurService";
import Gallery from "../src/components/Gallery";
import Testimonial from "../src/components/Testimonial";
import OurTeam from "../src/components/OurTeam";
import ContactUs from "../src/components/ContactUs";
import Footer from "../src/components/Footer";


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={App} />
      <Route path="/banner" component={BannerSlider} />
      <Route path="/features" component={Features} />
      <Route path="/about" component={AboutUs} />
      <Route path="/services" component={OurService} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/testimonials" component={Testimonial} />
      <Route path="/team" component={OurTeam} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/footer" component={Footer} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
