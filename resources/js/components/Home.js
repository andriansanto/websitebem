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
            fade: true,
            infinite: true,
            speed: 500,
            slideToShow: 1,
            arrows: true,
            slideToSroll: 1,
            className: "slides"
        }

    return (
     <div>
           <div>
               <h1 >Commit. Solid. Integrated.</h1>
           </div>
       <div className="Home">
           <Slider {...settings}>
               {photos.map((photo) => {
                   return(
                       <div>
                           <img width="10%" src={photo.url} ></img>
                       </div>
                   )
               })}
           </Slider>
       </div>
       </div>
    );
               
}//render
 

}//function

export default Home;

if (document.getElementById('root')) {
    ReactDOM.render(<Home />, document.getElementById('root'));
}