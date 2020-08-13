import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/reacthimp.css';
import '../../css/slickhimp.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import '../../css/reacthome.css';
import {Container, Row, Col, Button} from 'reactstrap';

class Himpunan extends Component{

render(){
    const settings ={
        dots: true,
        arrows: false,
        fade: false,
        // infinite: true,
        speed: 500,
        slideToShow: 1,
        dotsClass: "slick-dots",
        slideToSroll: 1,
        className: "himpunanslick",
        adaptiveHeight: true,
        autoplay: false,
        // autoplaySpeed: 2000,
        pauseOnHover: false
    };
return(
    <div>
        <div className="container-himp">
            <h1 className="himp-maha">HIMPUNAN <br></br> MAHASISWA</h1>
            <br></br>
            <p>
            Universitas Multimedia Nusantara terbagi menjadi 4 fakultas besar.<br></br>
            Keempat fakultas terbagi menjadi beberapa jurusan dengan dinaungi oleh <br></br>
            himpunan jurusan tersebut. Berikut merupakan ke 11 himpunan yang terdapat <br></br>
            pada Universitas Multimedia Nusantara
            </p>      
        </div>
        <Container>
            <Row>
                <Col className="card">
                    <h2 className="heads-title">FAKULTAS</h2>
                    <img className="set bg"></img>
                </Col>
                <Col className="card">
                    <a className="set">
                        <h5 className="fakultas-title">ILMU KOMUNIKASI</h5>
                        <img className="set" src="assets/himp/ilkom.jpg"></img>
                    </a>
                </Col>
                <Col className="card">
                    <a className="set" href="#">
                        <h5 className="fakultas-title">SENI DAN DESAIN</h5>
                        <img className="set" src="assets/himp/fsd.jpg"></img>
                    </a>
                </Col>
                <Col className="card">
                    <a className="set" href="#">
                        <h5 className="fakultas-title">TEKNIK INFORMATIKA</h5>
                        <img className="set" src="assets/himp/fti.jpg"></img>
                    </a>
                </Col>
                <Col className="card">
                    <a className="set" href="#">    
                        <h5 className="fakultas-title">BISNIS</h5>
                        <img className="set" src="assets/himp/bisnis.jpg"></img>
                    </a>
                </Col>
            </Row>
        </Container>

        {/* <div className="himpholder">
            <div className="logoholder">
                <div className="logo">
                </div>
            </div>
            <div className="descholder">
                <div className="titlebar"></div>
                <div className="himpdesc"></div>
            </div>
        </div> */}

        {/* <Slider {...settings}> */}
            {/* <div className="himpunanslick filterslicks ilkomfilter"> */}
                <div className="himpholder ilkomfilter" >
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src="assets/himp/logo/imkom.svg"></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="titlebar">
                            <img className="bar-slick" src="assets/himp/logo/imkombar.svg"></img>
                        </div>
                        <div className="himpdesc">
                            <p className="caption-position caption-modif">
                                I’M KOM merupakan himpunan mahasiswa yang berada di bawah naungan Fakultas Ilmu Komunikasi yang secara langsung membawahi dua program studi, Strategic Communication dan Multimedia Journalism, I’M KOM menjadi satu-satunya himpunan mahasiswa di tingkat fakultas. I'M KOM berperan aktif dalam perkuliahan untuk membantu menjadi jembatan penghubung mahasiswa dengan pihak Program Studi. I'M KOM terus memberikan yang terbaik sehingga berdampak nyata dalam kehidupan perkuliahan dengan melaksanakan berbagai macam kegiatan seperti Communication Festival, PRIDE, COMMPRESS, FIKOM NIGHT, OMB Konten Prodi Ilmu Komunikasi, dan lainnya. Dengan rangkaian kegiatan yang diadakan, mahasiswa diharapkan mendapatkan pengalaman dalam berorganisasi yang dibutuhkan dalam dunia kerja.
                            </p>
                        </div>
                    </div>
                </div>  
            {/* </div>     */}
        {/* </Slider>         */}
        
    </div>
    );
}
}

export default Himpunan;

if (document.getElementById('himp')) {
    ReactDOM.render(<Himpunan />, document.getElementById('himp'));
}