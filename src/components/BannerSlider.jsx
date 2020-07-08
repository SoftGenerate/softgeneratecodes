import React, { Component } from 'react'
//import '../../public/img/banner.png'

class BannerSlider extends Component {
    render() {
        return (
            <div style={{ background: 'gray' }}>
            {/* <img src={require("../../public/img/banner.png")}  alt="Image" /> */}
                {/* <img src={require("../intro-bg.jpg")}/> */}
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5jrx_YpRCzYNpmDaeFa6M43NTgyWFr2qjAg&usqp=CAU" 
                    alt=""
                    className="banner-image"
                />
            </div>
        )
    }
}

export default BannerSlider;