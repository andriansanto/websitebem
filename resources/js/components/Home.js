import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../css/reacthome.css';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';



class Home extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            isLoading: true
        }
        this._isMounted = true;
    }

    

    async componentDidMount(){
        try{
            const res = await fetch('https://bem.umn.ac.id/api/slideshow',{

                headers:{
                    'APP_KEY' : '@dedicatetocreatebemgenx',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Credentials':'true',
                    // 'Access-Control-Allow-Origin':'http://127.0.0.1:8000',
                }
            }).then((Response) => Response.json()).
            then((findresponse) => 
                {   
                    if(this._isMounted){
                    // console.log(findresponse);
                    this.setState({
                        items: findresponse,
                        isLoading:false,
                        isLoaded:true
                    })
                }
                })
        }catch(e){
            // console.log("error");
        }

    }

     componentWillUnmount() {
        this._isMounted = false;
      }

    render(){

        const settings ={
            arrows: false,
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
           {this.state.items.map((item,index)  => {
                   return(
                       <div className="slides filter" key={index}>
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
           </p>          
           </div>
       </div>

       <Container className="themed-container" fluid={true}>
        <div className="container-2">
    
        <div className="container-2-text">
        <h1>Universitas Multimedia Nusantara</h1>
           <br></br>
           <p>
           Universitas Multimedia Nusantara (UMN) adalah universitas yang berbasis Information and <br></br>Communication Technology (ICT)
           berlokasi di Gading Serpong Tangerang. <br></br>Kampus yang gedungnya unik ini sudah terakreditasi A lho! <br></br>
           Nah, apa saja sih keunggulannya? Yuk, cari tahu!
           </p>              
           <br></br>
           <Button color="primary" href="https://www.umn.ac.id/" className="buttonsmua">Learn More</Button>{' '}
        </div>
        </div>
        </Container>

        <Container className="themed-container" fluid={true}>

        <div className="container-dedicate">
            <Row>
             <Col>
            <div className="container-dedicate-judul">
               <h1 className="dtc-1">#SatuTujuan</h1>    
               <h2 className="genx-1">GEN XI</h2>
            </div>
             </Col>  
            </Row>
        <Row>
        <Col md="6">
        <div className="container-dedicate-text container-aboutus">
        <p>
           Badan Eksekutif Mahasiswa (BEM) Universitas Multimedia Nusantara (UMN) adalah organisasi resmi
           kemahasiswaan di tingkat universitas yang berperan sebagai lembaga eksekutif tertinggi dibawah
           naungan Rektorat Bidang kemahasiswaan UMN. Untuk informasi lebih lanjut mengenai kami silahkan 
           klik tombol dibawah ini.
           <br></br><Button color="primary" href="about-us" className="buttonsmua">About Us</Button>{' '}
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