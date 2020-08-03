import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../../css/lightslider.css';
import '../slidersukm/Jquery31';
import '../slidersukm/lightslider';
import '../slidersukm/sliderqueryabout';
import '../../css/reactabout.css';


    $(document).ready(function() {
        $('#autoWidth').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cs-hidden');
            } 
        });  
        });

class AboutUs extends Component{
    render(){

    return(
            <div>

            {/*Foto about bem*/}  
            <div className="fotoatas">
                <img className="fotoabout" src="assets/aboutus/auBEM.png"></img>
            </div>


        {/*Foto per Gen*/}  
        {/* <div className="container-awal"> */}

        <div className="container-slider-aboutus">
            {/*Slider*/}
            
        <ul id="autoWidth" className="cs-hidden">

            {/*1*/}
    <li className="item-a">
        
        {/*Slider Box*/}
    <div className="box-aboutus">
        {/*model*/}

        {/*Penjelasan*/}
        {/* <div className="penjelasan"> */}
        <img className="penjelasan-aboutus" src="assets/aboutus/au10.png"></img>
        {/* </div> */}

        {/*details*/}
        
        <div className="details"> 
        {/*logo char*/}
        {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
        {/*char details*/}
        </div>{/*details*/}

    </div>{/*Box*/}

    

</li>{/*Ulson*/}


            </ul>

            </div>{/*container slider*/}

           {/* </div>Containerawal */}

        </div>
        );
    }
}


export default AboutUs;

if (document.getElementById('AboutUs')) {
    ReactDOM.render(<AboutUs />, document.getElementById('AboutUs'));
}
