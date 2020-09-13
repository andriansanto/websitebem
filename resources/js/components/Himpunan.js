import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import '../../css/reacthimp.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { Tooltip } from 'react-bootstrap';
// import '../slidersukm/Jquery31';
// import '../../css/himpslider.css';
// import Slider from "react-slick";
// import '../../css/reacthome.css';
import {Container, Row, Col, Button} from 'reactstrap';

class Ilkom extends React.Component {
    render() {
        <div className="himpsliderscss">
        <ul id="himpslidersilkom">
            <li>
                <div className="himpholder ilkomfilter" >
                <div className="backbttn">
                    <img className="back" src="assets/himp/back.svg"></img>
                </div>
                <div className="himptab">
                    <img className="tabs" src="assets/himp/logo/imkom.svg"></img>
                </div>
                <div className="tabtitle">
                    <p className="titles">
                        Fakultas Ilmu Komunikasi
                    </p>
                </div>
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
                            I’M KOM merupakan himpunan mahasiswa yang berada di bawah naungan Fakultas Ilmu Komunikasi yang secara langsung membawahi dua program studi, Strategic Communication dan Multimedia Journalism, I’M KOM menjadi satu-satunya himpunan mahasiswa di tingkat fakultas. I'M KOM berperan aktif dalam perkuliahan untuk membantu menjadi jembatan penghubung mahasiswa dengan pihak Program Studi. 
                        </p>
                        <p className="caption-position caption-modif">
                            I'M KOM terus memberikan yang terbaik sehingga berdampak nyata dalam kehidupan perkuliahan dengan melaksanakan berbagai macam kegiatan seperti Communication Festival, PRIDE, COMMPRESS, FIKOM NIGHT, OMB Konten Prodi Ilmu Komunikasi, dan lainnya. Dengan rangkaian kegiatan yang diadakan, mahasiswa diharapkan mendapatkan pengalaman dalam berorganisasi yang dibutuhkan dalam dunia kerja.
                        </p>
                        <div className="sosmed-position">
                        <a className="sosmed" href="http://www.instagram.com/bemumn"> IG | bemumn</a>
                        <a className="sosmed" href="http://line.me/ti/p/~@dmn8577"> LINE | @dmn8577</a>
                        <a className="sosmed" href="http://www.umn.ac.id"> WEB | www.umn.ac.id</a>
                        </div>
                    </div>
                </div>
                </div>
            </li>
        </ul>
        </div>
    }
}

class Himpunan extends Component{
    // constructor() {
    //     super()
    //     this.state={
    //         showIlkom:true
    //     }
    // }

    // operation() {
    //     this.setState({
    //         showIlkom:false
    //     })
    // }

    constructor() {
        super();
        this.state = {
          showHideIlkom: false,
          showHideFsd: false,
          showHideFti: false,
          showHideBisnis: false,
          itemhimp:[],
          isLoaded: false,
          isLoading: true
        };
        this.hideComponent = this.hideComponent.bind(this);
      }

      async componentDidMount(){
        try{
            const res = await fetch('http://127.0.0.1:8000/api/himpunan',{
                headers:{
                    'APP_KEY' : '@dedicatetocreatebemgenx',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Credentials':'true',
                        // 'Access-Control-Allow-Origin':'http://127.0.0.1:4545'
                }
            }).then((Response) => Response.json()).
            then((findresponse) => 
                {   
                    if(this._isMounted){
                    // console.log(findresponse);
                    this.setState({
                        itemhimp: findresponse,
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
    
      hideComponent(name) {
        switch (name) {
            case "showHideIlkom":
                this.setState({ showHideIlkom: !this.state.showHideIlkom });
                this.setState({ showHideFsd: false});
                this.setState({ showHideFti: false});
                this.setState({ showHideBisnis: false});
                break;
            case "showHideFsd":
                this.setState({ showHideFsd: !this.state.showHideFsd });
                this.setState({ showHideIlkom: false});
                this.setState({ showHideFti: false});
                this.setState({ showHideBisnis: false});
                break;
            case "showHideFti":
                this.setState({ showHideFti: !this.state.showHideFti });
                this.setState({ showHideIlkom: false});
                this.setState({ showHideFsd: false});
                this.setState({ showHideBisnis: false});
                break;
            case "showHideBisnis":
                this.setState({ showHideBisnis: !this.state.showHideBisnis });
                this.setState({ showHideIlkom: false});
                this.setState({ showHideFsd: false});
                this.setState({ showHideFti: false});
                break;
            default:
                null;
        }

        $(document).ready(function(){
            $("#himpslidersilkom").lightSlider({
                auto: false,
                loop: false,
                autoWidth: true,
                responsive: [],
                slideEndAnimation: false,
                slideMargin: 2
            });
        });
        
        $(document).ready(function(){
            $("#himpslidersfsd").lightSlider({
                auto: true,
                loop: true,
                autoWidth: true,
                responsive: [],
                slideEndAnimation: false,
                slideMargin: 2,
                pauseOnHover: true,
                pause: 2200
            });
        });
        
        $(document).ready(function(){
            $("#himpslidersfti").lightSlider({
                auto: true,
                loop: true,
                autoWidth: true,
                responsive: [],
                slideEndAnimation: false,
                slideMargin: 2,
                pauseOnHover: true,
                pause: 2200
            });
        });

        $(document).ready(function(){
            $("#himpslidersbisnis").lightSlider({
                auto: true,
                loop: true,
                autoWidth: true,
                responsive: [],
                slideEndAnimation: false,
                slideMargin: 2,
                pauseOnHover: true,
                pause: 2200
            });
        });
    }

        
render(){
    const { showHideIlkom, showHideFsd, showHideFti, showHideBisnis } = this.state;
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
                <Col className="card-fix">
                    <h2 className="heads-title">FAKULTAS</h2>
                    <img className="set bg"></img>
                </Col>
                <Col className="card-himp">
                    <a className="set">
                        <button className="blanket" onClick={() => this.hideComponent("showHideIlkom")}>
                        <h5 className="fakultas-title">ILMU KOMUNIKASI</h5>
                        <img className="set" src="assets/himp/ilkom.jpg"></img>
                        </button>
                    </a>
                </Col>
                <Col className="card-himp">
                    <a className="set">
                        <button className="blanket" onClick={() => this.hideComponent("showHideFsd")}>
                        <h5 className="fakultas-title">SENI DAN DESIGN</h5>
                        <img className="set" src="assets/himp/fsd.jpg"></img>
                        </button>
                    </a>
                </Col>
                <Col className="card-himp">
                    <a className="set">
                        <button className="blanket" onClick={() => this.hideComponent("showHideFti")}>
                        <h5 className="fakultas-title">TEKNIK INFORMATIKA</h5>
                        <img className="set" src="assets/himp/fti.jpg"></img>
                        </button>
                    </a>
                </Col>
                <Col className="card-himp">
                    <a className="set">    
                        <button className="blanket" onClick={() => this.hideComponent("showHideBisnis")}>
                        <h5 className="fakultas-title">BISNIS</h5>
                        <img className="set" src="assets/himp/bisnis.jpg"></img>
                        </button>
                    </a>
                </Col>
            </Row>
        </Container>

        {showHideIlkom && (
            <div className="himpsliderscss">
            <ul id="himpslidersilkom">
            {this.state.itemhimp.map((itemhimps,index)  => {
            switch (itemhimps.fakultas) {
                case "ILKOM" : 
                return (
                <li key={index}>
                    <div className="himpholder ilkomfilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    {/* <div className="himptabs">
                        <div className="himptab">
                            <img className="tabs" src="assets/himp/logo/imkom.svg"></img>
                        </div>
                        <div className="himptabempty">
                            <img className="tabs" src="assets/himp/logo/imkom.svg"></img>
                        </div>
                        <div className="tabtitle">
                            <p className="titles">
                                Fakultas Ilmu Komunikasi
                            </p>
                        </div>
                    </div> */}
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src={itemhimps.photo}></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="himpdesc">
                            <p className="caption-position caption-modif">
                                {itemhimps.info1}
                            </p>
                            <p className="caption-position caption-modif">
                                {itemhimps.info2}
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed" href={itemhimps.linkig}> IG | @{itemhimps.ig}</a>
                            <a className="sosmed" href={itemhimps.linkline}> LINE | @{itemhimps.line}</a>
                            {/* <a className="sosmed" href="http://imkom.umn.ac.id"> WEB | www.imkom.umn.ac.id</a> */}
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
                )

                default :
                return null;
            }

                })}
            </ul>
            </div>
        )}

        {showHideFsd && (
            <div className="himpsliderscss">
            <ul id="himpslidersfsd">
            {this.state.itemhimp.map((itemhimps,index)  => {
            switch (itemhimps.fakultas) {
                case "FSD" : 
                return (
                <li key={index}>
                    <div className="himpholder hmdkvfilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    {/* <div className="himptabs">
                        <div className="himptab">
                            <img className="tabs" src="assets/himp/logo/himars.svg"></img>
                        </div>
                        <div className="himptab">
                            <img className="tabs" src="assets/himp/logo/hmftv.svg"></img>
                        </div>
                        <div className="himptab">
                            <img className="tabs" src="assets/himp/logo/hmdkv.svg"></img>
                        </div>
                        <div className="tabtitle">
                            <p className="titles">
                                Fakultas Seni dan Design
                            </p>
                        </div>
                    </div> */}
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src={itemhimps.photo}></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="himpdesc">
                            <p className="caption-position caption-modif">
                                {itemhimps.info1}
                            </p>
                            <p className="caption-position caption-modif">
                                {itemhimps.info2}
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed" href={itemhimps.linkig}> IG | @{itemhimps.ig}</a>
                            <a className="sosmed" href={itemhimps.linkline}> LINE | @{itemhimps.line}</a>
                            {/* <a className="sosmed" href=""> WEB | -</a> */}
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
            );

            default :
            return null;
        }

})}
                    
            </ul>
            </div>
        )}

        {showHideFti && (
            <div className="himpsliderscss">
            <ul id="himpslidersfti">
            {this.state.itemhimp.map((itemhimps,index)  => {
            switch (itemhimps.fakultas) {
                case "FTI" : 
                return (
                <li key={index}>
                    <div className="himpholder himferafilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    {/* <div className="himptabs">
                        <div className="himptab">
                            <img className="tabs" src="assets/himp/logo/himsi.svg"></img>
                        </div>
                        <div className="himptab">
                            <img className="tabs" src="assets/himp/logo/aces.svg"></img>
                        </div>
                        <div className="himptab">
                            <img className="tabs" src="assets/himp/logo/hmif.svg"></img>
                        </div>
                        <div className="himptab">
                            <img className="tabs" src="assets/himp/logo/himfera.svg"></img>
                        </div>
                        <div className="tabtitle">
                            <p className="titles">
                                Fakultas Teknik dan Informatika
                            </p>
                        </div>
                    </div> */}
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src={itemhimps.photo}></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="himpdesc">
                            <p className="caption-position caption-modif">
                                {itemhimps.info1} 
                            </p>
                            <p className="caption-position caption-modif">
                                {itemhimps.info2}
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed" href={itemhimps.linkig}> IG | @{itemhimps.ig}</a>
                            <a className="sosmed" href={itemhimps.linkline}> LINE | @{itemhimps.line}</a>
                            {/* <a className="sosmed" href=""> WEB | -</a> */}
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
                );

                default :
                return null;
            }
    
    })}
            </ul>
            </div>
        )}

        {showHideBisnis && (
            <div className="himpsliderscss">
            <ul id="himpslidersbisnis">
            {this.state.itemhimp.map((itemhimps,index)  => {
            switch (itemhimps.fakultas) {
                case "BISNIS" : 
                return (
                <li key={index}>
                    <div className="himpholder himmafilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    {/* <div className="himptabs">
                        <div className="himptab">
                            <img className="tabs" src="assets/himp/logo/hmp.svg"></img>
                        </div>
                        <div className="himptab">
                            <img className="tabs" src="assets/himp/logo/himtara.svg"></img>
                        </div>
                        <div className="himptab">
                            <img className="tabs" src="assets/himp/logo/himma.svg"></img>
                        </div>
                        <div className="tabtitle">
                            <p className="titles">
                                Fakultas Bisnis
                            </p>
                        </div>
                    </div> */}
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src="assets/himp/logo/himma.svg"></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="titlebar">
                            <img className="bar-slick" src="assets/himp/logo/himmabar.svg"></img>
                        </div>
                        <div className="himpdesc">
                            <p className="caption-position caption-modif">
                                {itemhimps.info1}
                            </p>
                            <p className="caption-position caption-modif">
                                {itemhimps.info2}
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed" href={itemhimps.linkig}> IG | @{itemhimps.ig}</a>
                            <a className="sosmed" href={itemhimps.linkline}> LINE | @{itemhimps.line}</a>
                            {/* <a className="sosmed" href=""> WEB | -</a> */}
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
                );

                default :
                return null;
            }
    
    })}
                
            </ul>
            </div>
        )}
    </div>

    );
}

}

export default Himpunan;

if (document.getElementById('himp')) {
    ReactDOM.render(<Himpunan />, document.getElementById('himp'));
}