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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
