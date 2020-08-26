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
          showHideBisnis: false
        };
        this.hideComponent = this.hideComponent.bind(this);
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
                <Col className="card">
                    <a className="set">
                        <button className="blanket" onClick={() => this.hideComponent("showHideIlkom")}>
                        <h5 className="fakultas-title">ILMU KOMUNIKASI</h5>
                        <img className="set" src="assets/himp/ilkom.jpg"></img>
                        </button>
                    </a>
                </Col>
                <Col className="card">
                    <a className="set">
                        <button className="blanket" onClick={() => this.hideComponent("showHideFsd")}>
                        <h5 className="fakultas-title">SENI DAN DESIGN</h5>
                        <img className="set" src="assets/himp/fsd.jpg"></img>
                        </button>
                    </a>
                </Col>
                <Col className="card">
                    <a className="set">
                        <button className="blanket" onClick={() => this.hideComponent("showHideFti")}>
                        <h5 className="fakultas-title">TEKNIK INFORMATIKA</h5>
                        <img className="set" src="assets/himp/fti.jpg"></img>
                        </button>
                    </a>
                </Col>
                <Col className="card">
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
                <li>
                    <div className="himpholder ilkomfilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    <div className="himptabs">
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
                            <a className="sosmed" href="http://www.instagram.com/imkom_umn"> IG | IMKOM UMN</a>
                            <a className="sosmed" href="http://line.me/ti/p/~@nkj4600e"> LINE | @nkj4600e</a>
                            <a className="sosmed" href="http://imkom.umn.ac.id"> WEB | www.imkom.umn.ac.id</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
            </ul>
            </div>
        )}

        {showHideFsd && (
            <div className="himpsliderscss">
            <ul id="himpslidersfsd">
                <li>
                    <div className="himpholder hmdkvfilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    <div className="himptabs">
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
                    </div>
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src="assets/himp/logo/hmdkv.svg"></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="titlebar">
                            <img className="bar-slick" src="assets/himp/logo/hmdkvbar.svg"></img>
                        </div>
                        <div className="himpdesc">
                            <p className="caption-position caption-modif">
                                Himpunan Desain Komunikasi Visual Universitas Multimedia Nusantara
                                (HMDKV UMN) merupakan organisasi yang beranggotakan seluruh
                                mahasiswa DKV UMN. Asal mula HMDKV berawal dari HMFSD
                                (Himpunan Fakultas Seni dan Desain) yang terpecah menjadi 3
                                himpunan
                                dari masing-masing jurusan pada Fakultas Seni dan Desain pada tahun
                                2017, yaitu HMDKV (Desain Komunikasi Visual), HMFILM (Film dan
                                Televisi), dan HIMARS (Arsitektur). 
                            </p>
                            <p className="caption-position caption-modif">
                                HMDKV UMN menjadi wadah untuk
                                menghimpun mahasiswa Desain Komunikasi Visual Universitas
                                Multimedia Nusantara dan menjadi jembatan dalam pengembangan
                                kepentingan akademik dan non akademik yang bertujuan untuk
                                meningkatkan prestasi, mendukung ekspresi, serta kesejahteraan
                                mahasiswa DKV UMN.
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed" href="http://www.instagram.com/hmdkv_umn"> IG | hmdkv_umn</a>
                            <a className="sosmed" href="http://line.me/ti/p/~@ybc1316s"> LINE | @ybc1316s</a>
                            <a className="sosmed" href=""> WEB | -</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="himpholder hmftvfilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    <div className="himptabs">
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
                    </div>
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src="assets/himp/logo/hmftv.svg"></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="titlebar">
                            <img className="bar-slick" src="assets/himp/logo/hmftvbar.svg"></img>
                        </div>
                        <div className="himpdesc">
                            <p className="caption-position caption-modif-white">
                                Himpunan Mahasiswa Film atau akrab disebut dengan HMFilm
                                merupakan organisasi yang menjadi penghubung antar mahasiswa, dosen
                                program studi dan kemahasiswaan sehingga dapat terjalin hubungan yang baik.
                                HMFilm ini terbentuk pada tanggal 5 Desember 2017. Pada tahun 2020, HMFilm
                                memasuki generasi kedua sebagai organisasi dalam Prodi Film.
                            </p>
                            <p className="caption-position caption-modif-white">
                                Tugas HMFilm adalah menyediakan forum bagi mahasiswa Film dalam
                                menuangkan aspirasi dan mengembangkan potensi berdasarkan minat yang
                                sama. Selain itu, HMFilm juga berperan dalam mendekatkan hubungan antar
                                mahasiswa, memperluas koneksi, dan melaksanakan kegiatan kemahasiswaan
                                yang menjunjung tanggung jawab dan kebersamaan.
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed-white" href="http://www.instagram.com/hmfilm_umn"> IG | hmfilm_umn</a>
                            <a className="sosmed-white" href="http://line.me/ti/p/~@msn8043i"> LINE | @msn8043i</a>
                            <a className="sosmed-white" href=""> WEB | -</a>
                            </div>
                        </div>
                    </div>
                </div>
                </li>
                <li>
                    <div className="himpholder himarsfilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    <div className="himptabs">
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
                    </div>
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src="assets/himp/logo/himars.svg"></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="titlebar">
                            <img className="bar-slick" src="assets/himp/logo/himarsbar.svg"></img>
                        </div>
                        <div className="himpdesc">
                            <p className="caption-position caption-modif-white">
                                Himpunan Mahasiswa Arsitektur Universitas Multimedia Nusantara (HIMARS) adalah organisasi kemahasiswaan yang mewadahi dan menggerakkan kreativitas serta aktivitas mahasiswa. HIMARS diresmikan pada 5 Desember 2018. 
                            </p>
                            <p className="caption-position caption-modif-white">
                                HIMARS memiliki visi mahasiswa arsitektur UMN dapat proaktif di berbagai bidang dalam lingkup internal dan eksternal kampus serta membangun solidaritas antar sesama mahasiswa. Misi HIMARS adalah sarana yang menyalurkan aspirasi mahasiswa arsitektur UMN, memperluas hubungan baik internal maupun eksternal, serta meningkatkan kemampuan dalam berorganisasi yang dikemas dalam seluruh Program kerja HIMARS.
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed-white" href="http://www.instagram.com/himars_umn"> IG | himars_umn</a>
                            <a className="sosmed-white" href="http://line.me/ti/p/~@daj7387i"> LINE | @daj7387i</a>
                            <a className="sosmed-white" href=""> WEB | -</a>
                            </div>
                        </div>
                    </div>
                </div>
                </li>
            </ul>
            </div>
        )}

        {showHideFti && (
            <div className="himpsliderscss">
            <ul id="himpslidersfti">
                <li>
                    <div className="himpholder himferafilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    <div className="himptabs">
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
                    </div>
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src="assets/himp/logo/himfera.svg"></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="titlebar">
                            <img className="bar-slick" src="assets/himp/logo/himferabar.svg"></img>
                        </div>
                        <div className="himpdesc">
                            <p className="caption-position caption-modif">
                                Himpunan Mahasiswa Teknik Fisika dan Teknik Elektro Universitas Multimedia Nusantara (HIMFERA) merupakan organisasi yang menampung aspirasi dan menjalankan program kerja bagi seluruh mahasiswa Teknik Fisika dan Teknik Elektro di UMN. HIMFERA Generasi 0 dibentuk pada 5 Desember 2017. 
                            </p>
                            <p className="caption-position caption-modif">
                                HIMFERA Gen 2 terdiri dari Badan Pengurus Harian, Divisi Akademik, Divisi Non Akademik, Divisi Humas, dan Divisi Desain Visual. Setiap divis mengurus program kerja sesuai dengan bidangnya. Program kerja dibuat berdasarkan kebutuhan dan aspirasi mahasiswa Teknik Fisika dan Teknik Elektro.
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed" href="http://www.instagram.com/himfera_umn"> IG | himfera_umn</a>
                            <a className="sosmed" href="http://line.me/ti/p/~@636jllsn"> LINE | @636jllsn</a>
                            <a className="sosmed" href=""> WEB | -</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="himpholder hmiffilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    <div className="himptabs">
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
                    </div>
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src="assets/himp/logo/hmif.svg"></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="titlebar">
                            <img className="bar-slick" src="assets/himp/logo/hmifbar.svg"></img>
                        </div>
                        <div className="himpdesc">
                            <p className="caption-position caption-modif">
                                Himpunan Mahasiswa Informatika Universitas Multimedia Nusantara (HMIF) merupakan organisasi resmi kemahasiswaan pada tingkat program studi sebagai eksekutor yang bernaung di bawah Wakil Rektor III Bidang kemahasiswaan Universitas Multimedia Nusantara. 
                            </p>
                            <p className="caption-position caption-modif">
                                HMIF bersifat mandiri, kekeluargaan, adil, aspiratif, partisipatif, representatif, efektif, efisien, beserta transparan. HMIF diselenggarakan berdasarkan prinsip dari, oleh, dan untuk mahasiswa Informatika dengan memberi peranan serta keleluasaan lebih kepada mahasiswa.
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed" href="http://www.instagram.com/hmif.umn"> IG | hmif.umn</a>
                            <a className="sosmed" href="http://line.me/ti/p/~@hmif.umn"> LINE | @hmif.umn</a>
                            <a className="sosmed" href=""> WEB | -</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="himpholder acesfilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    <div className="himptabs">
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
                    </div>
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src="assets/himp/logo/aces.svg"></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="titlebar">
                            <img className="bar-slick" src="assets/himp/logo/acesbar.svg"></img>
                        </div>
                        <div className="himpdesc">
                            <p className="caption-position caption-modif">
                                ACEs (Association of Computer Engineering Students) adalah himpunan mahasiswa Teknik Komputer UMN, dibentuk pada tanggal 8 Desember 2007. Tugas dan Kewajiban ACES adalah melayani dan membantu kendala-kendala yang dimiliki oleh anggota-anggota ACES. 
                            </p>
                            <p className="caption-position caption-modif">
                                Pada gen 9, nama ACES berubah dari Himasikom (Himpunan Mahasiswa Sistem Komputer) dengan alasan Himasikom program studi kami juga mengalami perubahan nama dari Sistem Komputer menjadi Teknik Komputer. ACES juga mengadakan beberapa proker yang diharapkan bisa membantu memberikan gambaran mengenai kehidupan perkuliahan di prodi Teknik Komputer.
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed" href="http://www.instagram.com/acesumn"> IG | acesumn</a>
                            <a className="sosmed" href="http://line.me/ti/p/~@acesumn"> LINE | @acesumn</a>
                            <a className="sosmed" href=""> WEB | -</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="himpholder himsifilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    <div className="himptabs">
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
                    </div>
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src="assets/himp/logo/himsi.svg"></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="titlebar">
                            <img className="bar-slick" src="assets/himp/logo/himsibar.svg"></img>
                        </div>
                        <div className="himpdesc">
                            <p className="caption-position caption-modif-white">
                                Himpunan Mahasiswa Sistem Informasi Universitas Multimedia Nusantara (HIMSI) didirikan pada tahun 2007, yaitu pada saat angka pertama mahasiswa Universitas Multimedia Nusantara dengan nama D'Information System Community. DISC merupakan HMJ Sistem Informasi "Generasi Nol".
                            </p>
                            <p className="caption-position caption-modif-white">
                                Pada tahun 2010, DISC mengalami perubahan sebutan menjadi HIMSI. HIMSI Generasi 10 beranggotakan 16 orang orang mahasiswa sistem informasi terpilih untuk bertugas mengabdi kepada keluarga besar mahasiswa sistem informasi berdasarkan asas kekeluargaan.
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed-white" href="http://www.instagram.com/umn_si"> IG | umn_si</a>
                            <a className="sosmed-white" href="http://line.me/ti/p/~@umn_si"> LINE | @umn_si</a>
                            <a className="sosmed-white" href=""> WEB | -</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
            </ul>
            </div>
        )}

        {showHideBisnis && (
            <div className="himpsliderscss">
            <ul id="himpslidersbisnis">
                <li>
                    <div className="himpholder himmafilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    <div className="himptabs">
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
                    </div>
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
                                Himpunan Mahasiswa Manajemen Universitas Multimedia Nusantara (HIMMA) merupakan salah satu himpunan yang telah berdiri sejak 28 November 2010. Dari awal terbentuk, HIMMA selalu menanamkan nilai-nilai kekeluargaan kepada para anggotanya dan kepada para mahasiswa diluar organisasi. 
                            </p>
                            <p className="caption-position caption-modif">
                                HIMMA selalu berusaha menerima segala bentuk aspirasi dari Mahasiswa Manajemen agar dapat menciptakan kegiatan yang sesuai dengan keinginan dan kebutuhan mahasiswa. HIMMA selalu berusaha untuk menjadi lebih baik dan selalu memperbaiki kekurangan yang ada agar dapat terus memberikan yang terbaik bagi Program Studi Manajemen
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed" href="http://www.instagram.com/himma_umn"> IG | himma_umn</a>
                            <a className="sosmed" href="http://line.me/ti/p/~@himma_umn"> LINE | @himma_umn</a>
                            <a className="sosmed" href=""> WEB | -</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="himpholder himtarafilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    <div className="himptabs">
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
                    </div>
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src="assets/himp/logo/himtara.svg"></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="titlebar">
                            <img className="bar-slick" src="assets/himp/logo/himtarabar.svg"></img>
                        </div>
                        <div className="himpdesc">
                            <p className="caption-position caption-modif-white">
                                Himpunan Akuntansi Universitas Multimedia Nusantara (HIMTARA) yang telah berdiri atau terbentuk mulai dari 16 November 2020. HIMTARA didirikan bertujuan untuk menggali dan mengembangkan potensi mahasiswa akuntasi Universitas Multimedia Nusantara dalam bidang akademik maupun non-akademik dengan berlandaskan semangat kejujuran, kekeluargaan, dan professionalism. 
                            </p>
                            <p className="caption-position caption-modif-white">
                                HIMTARA selaku himpunan akuntasi UMN selalu membuat program kerja yang berlandaskan aspirasi dari para mahasiswa kauntasi sebagai suatu inspirasi bagi kami untuk menjadi lebih baik lagi.
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed-white" href="http://www.instagram.com/himtara"> IG | himtara</a>
                            <a className="sosmed-white" href="http://line.me/ti/p/~@bkq4939z"> LINE | @bkq4939z</a>
                            <a className="sosmed-white" href=""> WEB | -</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="himpholder hmpfilter" >
                    {/* <div className="backbttn">
                        <img className="back" src="assets/himp/back.svg"></img>
                    </div> */}
                    <div className="himptabs">
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
                    </div>
                    <div className="logoholder">
                        <img className="logoholder-slick" src="assets/himp/logo_holder.svg"></img>
                        <div className="logo">
                            <img className="logo-slick" src="assets/himp/logo/hmp.svg"></img>
                        </div>
                    </div>
                    <div className="descholder">
                        <div className="titlebar">
                            <img className="bar-slick" src="assets/himp/logo/hmpbar.svg"></img>
                        </div>
                        <div className="himpdesc">
                            <p className="caption-position caption-modif-white">
                                Himpunan Mahasiswa Perhotelan Universitas Multimedia Nusantara (HMP) terbentuk bersamaan dengan hadirnya jurusan baru yaitu D3 Perhotelan di tahun 2017. HMP terbentuk dan hadir untuk menjadi penyalur aspirasi Mahasiswa D3 Perhotelan UMN dan untuk menaungi serta menyediakan sarana bagi Mahasiswa Perhotelan. 
                            </p>
                            <p className="caption-position caption-modif-white">
                                HMP membantu menyalurkan ilmu dan kemampuan yang dimiliki baik dalam cakupan internal maupun eksternal UMN, dengan menyelenggarakan kegiatan yang sesuai. HMP akan terus berkembang agar dapat memberikan kontribusi lebih baik lagi bagi Mahasiswa maupun Prodi D3 Perhotelan UMN.
                            </p>
                            <div className="sosmed-position">
                            <a className="sosmed-white" href="http://www.instagram.com/hmp_umn"> IG | hmp_umn</a>
                            <a className="sosmed-white" href="http://line.me/ti/p/~@iyz7068m"> LINE | @iyz7068m</a>
                            <a className="sosmed-white" href=""> WEB | -</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
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