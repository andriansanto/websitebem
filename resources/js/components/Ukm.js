import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/reactukm.css';

class Ukm extends Component{
render(){
return(
    <div className="container-ukm">
    <h1 className="ukm">UNIT KEGIATAN<br></br> MAHASISWA</h1>
    <br></br>
    <p className="textatasukm">
    Universitas Multimedia Nusantara memiliki berbagai Unit Kegiatan Mahasiswa.<br></br>
    (UKM) yang beragam. Yang dibagi menjadi 3 kategori yaitu, Seni dan Budaya, <br></br>
    Sains dan Sosial, dan Olahraga. <br></br>
    </p>          
    </div>
   
   
   
   );
}
}

export default Ukm;

if (document.getElementById('ukm')) {
    ReactDOM.render(<Ukm />, document.getElementById('ukm'));
}