import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../css/reacthome.css';

const photos = [
    {
        name: 'Photo 1',
        url: 'assets/img/img1.jpg'
    },
    {
        name: 'Photo 2',
        url: 'assets/img/img2.jpg'
    },
    {
        name: 'Photo 3',
        url: 'assets/img/img3.jpg'
    }
]



class Home extends Component{
    render(){
        const settings ={
            dots: true,
            fade: false,
            infinite: true,
            speed: 500,
            slideToShow: 1,
            dotsClass: "slick-dots",
            slideToSroll: 1,
            className: "slides",
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: false
        };

    return (
        <div>
            <div className="App">
           <Slider {...settings}>
               {photos.map((photo) => {
                   return(
                       <div className="slides filter">
                            <img className="slides-img" src={photo.url}>
                            </img>
                       </div>
                   )
               })}
           </Slider>
           </div>
    <br></br>
       <div className="container-csi">
           <h1 className="CSI-color">Commit. Solid. Integrated.</h1>
           <br></br>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
           <br></br>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
           <br></br>aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
           <br></br>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
           <br></br>qui officia deserunt mollit anim id est laborum.
           </p>          
       </div>

        <div className="container-2">
        <h1>Lorem Ipsum Dolor Sit Amet</h1>
           <br></br>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
           <br></br>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
           <br></br>aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
           <br></br>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
           <br></br>qui officia deserunt mollit anim id est laborum.
           <br></br>
           <button>Learn More</button>
           </p>          
        </div>

        <div className="container-dedicate">
               <h1 className="dtc-1">#DedicateToCreate</h1>
               <h2 className="genx-1">GEN X</h2>
        
        <div className="container-aboutus">
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
           <br></br>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
           <br></br>aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
           <br></br>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
           <br></br>qui officia deserunt mollit anim id est laborum.
           <br></br>
           <button>About Us</button>
        </p> 
        </div>
        </div>

        {/* <div className="container-about">
        </div> */}

       </div>
    );
}
}

export default Home;

if (document.getElementById('root')) {
    ReactDOM.render(<Home />, document.getElementById('root'));
}