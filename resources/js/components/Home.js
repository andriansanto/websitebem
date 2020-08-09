import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../css/reacthome.css';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';



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
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('http://localhost:4545/api/slideshow')
        .then(res => res.json())
        .then(json => {
            this.setState({
            isLoaded: true,
            items: json,
            })
        });
    }

    render(){
        var { isLoaded, items } = this.state;
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
               {items.map((item) => {
                   return(
                       <div className="slides filter">
                            <img className="slides-img" src={item.photo}>
                            </img>
                       </div>
                   )
               })}
           </Slider>
           </div>
    <br></br>
       <div className="container-csi">
           <div className="container-csi-text">
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
       </div>

       <Container className="themed-container" fluid={true}>
        <div className="container-2">
    
        <div className="container-2-text">
        <h1>Lorem Ipsum Dolor Sit Amet</h1>
           <br></br>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
           <br></br>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
           <br></br>aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
           <br></br>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
           <br></br>qui officia deserunt mollit anim id est laborum.
           <br></br>
           <Button color="primary" className="buttonsmua">Learn More</Button>{' '}
           </p>              
        </div>
        </div>
        </Container>

        <Container className="themed-container" fluid={true}>

        <div className="container-dedicate">
            <Row>
             <Col>
            <div className="container-dedicate-judul">
               <h1 className="dtc-1">#DedicateToCreate</h1>    
               <h2 className="genx-1">GEN X</h2>
            </div>
             </Col>  
            </Row>
        <Row>
        <Col xs="6">
        <div className="container-dedicate-text container-aboutus">
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
           <br></br>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
           <br></br>aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
           <br></br>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
           <br></br>qui officia deserunt mollit anim id est laborum.
           <br></br>
           <Button color="primary" className="buttonsmua">About Us</Button>{' '}
        </p>  
        </div>
        </Col>
        </Row>
        </div>
        </Container>

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