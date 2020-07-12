import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/reactkeg.css';

class KegiatanMahasiswa extends Component{
render(){
return(
    <div>
    <div className="grad">
        
    </div>

    </div>
    );
}
}

export default KegiatanMahasiswa;

if (document.getElementById('keg')) {
    ReactDOM.render(<KegiatanMahasiswa />, document.getElementById('keg'));
}