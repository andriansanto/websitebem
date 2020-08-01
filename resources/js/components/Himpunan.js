import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/reacthimp.css';

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
                <Col className="card heads">FAKULTAS</Col>
                <Col className="card">
                    <div className="fakultas-title">ILMU KOMUNITAS</div>
                    <img src="../../public/assets/himp/ilkom.jpg"></img>
                </Col>
                <Col className="card">
                    <div className="fakultas-title">SENI DAN DESAIN</div>
                </Col>
                <Col className="card">
                    <div className="fakultas-title">TEKNIK INFORMATIKA</div>
                </Col>
                <Col className="card">
                    <div className="fakultas-title">BISNIS</div>
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