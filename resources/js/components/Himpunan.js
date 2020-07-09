import React, {Component} from 'react';
import '../../css/reacthimp.css';

class Himpunan extends Component{
    render(){

return(

    <div className="container-himp">
    <h1 className="himp-maha">HIMPUNAN <br>MAHASISWA</br></h1>
    <br></br>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
    <br></br>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    <br></br>aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
    <br></br>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
    <br></br>qui officia deserunt mollit anim id est laborum.
    </p>          
    </div>



    );
 };
}

export default Himpunan;

if (document.getElementById('himpunan')) {
    ReactDOM.render(<Himpunan />, document.getElementById('himpunan'));
}