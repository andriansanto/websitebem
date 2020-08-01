import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/reacthimp.css';
import {Container, Row, Col} from 'reactstrap';

class Himpunan extends Component{
render(){
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
                    <h5 className="fakultas-title">ILMU KOMUNIKASI</h5>
                    <img className="set" src="assets/himp/ilkom.jpg"></img>
                </Col>
                <Col className="card">
                    <h5 className="fakultas-title">SENI DAN DESAIN</h5>
                    <img className="set" src="assets/himp/fsd.jpg"></img>
                </Col>
                <Col className="card">
                    <h5 className="fakultas-title">TEKNIK INFORMATIKA</h5>
                    <img className="set" src="assets/himp/fti.jpg"></img>
                </Col>
                <Col className="card">
                    <h5 className="fakultas-title">BISNIS</h5>
                    <img className="set" src="assets/himp/bisnis.jpg"></img>
                </Col>
            </Row>
        </Container>
    </div>
    );
}
}

export default Himpunan;

if (document.getElementById('himp')) {
    ReactDOM.render(<Himpunan />, document.getElementById('himp'));
}