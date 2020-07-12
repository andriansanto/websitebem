import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/reacthimp.css';

class Himpunan extends Component{
render(){
return(
    <div className="container-himp">
    <h1 className="himp-maha">HIMPUNAN <br>MAHASISWA</br></h1>
    <br></br>
    <p>
    Universitas Multimedia Nusantara terbagi menjadi 4 fakultas besar.<br></br>
    Keempat fakultas terbagi menjadi beberapa jurusan dengan dinaungi oleh <br></br>
    himpunan jurusan tersebut. Berikut merupakan ke 11 himpunan yang terdapat <br></br>
    pada Universitas Multimedia Nusantara
    </p>          
    </div>
    );
}
}

export default Himpunan;

if (document.getElementById('himp')) {
    ReactDOM.render(<Himpunan />, document.getElementById('himp'));
}