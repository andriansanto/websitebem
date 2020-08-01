import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container, Row, Col } from 'reactstrap';
import '../../css/lightslider.css';
import '../slidersukm/Jquery31';
import '../slidersukm/lightslider';
import '../slidersukm/sliderquery';
import 'react-tabs/style/react-tabs.css';
import '../../css/reactkeg.css';


function slider(){
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cs-hidden');
        } 
    });  
    });
}

function changeTab(){
    var radio = document.getElementsByClassName("radio");
    console.log(radio.length);
    console.log("test");
        if(document.getElementsByClassName("radio").value == 'keg'){
            document.getElementsByClassName("text-tab-pane").style.cssText = "background-image: linear-gradient(#ffb359,#ffffff);"
            console.log("pertama");
        }
        else if(document.getElementsByClassName("radio").value == 'lso'){
            document.getElementsByClassName("text-tab-pane").style.cssText = "background-image: linear-gradient(#ade2b2,#ffffff);"
            console.log("kedua");
        }

}

class KegiatanMahasiswa extends Component{
    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }

    // onCheckRadio(e){
    //     console.log(e.target.value);

    //     this.setState({
    //         [e.target.name]: e.target.checked
    //     })
    // }
    render(){
        const displayTabs = (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })} onClick={slider()}>
            <TabList>
            <div id="wrap">
            <Tab className="text-tab-pane"><input type="radio" className="radio" value="keg" onClick={changeTab()}></input>Kegiatan<br></br>Mahasiswa</Tab>
            <Tab className="text-tab-pane"><input type="radio" className="radio" value="lso" onClick={changeTab()}></input>Lembaga<br></br>Semi Otonom</Tab>
            </div>
            </TabList>

            {/*TAB PAN KEGIATAN*/}

            <TabPanel>
            <div className="container-awal">

        <div className="container-slider">
            {/*Slider*/}
            
        <ul id="autoWidth" className="cs-hidden">

            {/*1*/}
            <li className="item-a">
                
                    {/*Slider Box*/}
                <div className="box">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src="assets/kegiatan/logoufestbig.png" className="model-keg"></img>
                    </div>
                    <div className="col">
                    <p className="title">U-FEST</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

                    {/*details*/}
                    
                    <div className="details"> 
                    {/*logo char*/}
                    {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                    {/*char details*/}
                    <p>Ultima Sonora </p>
                    </div>{/*details*/}

                </div>{/*Box*/}

            </li>{/*U-fest*/}

            {/*2*/}
            <li className="item-a">
                
                    {/*Slider Box*/}
                <div className="box">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src="assets/kegiatan/logomaximabig.png" className="model-keg"></img>
                    </div>
                    <div className="col">
                    <p className="title">MAXIMA</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

                    {/*details*/}
                    
                    <div className="details"> 
                    {/*logo char*/}
                    {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                    {/*char details*/}
                    <p>Ultima Sonora </p>
                    </div>{/*details*/}

                </div>{/*Box*/}

            </li>{/*Maxima*/}

            {/*3*/}
            <li className="item-a">
                
                    {/*Slider Box*/}
                <div className="box">
                    {/*model*/}
                    <Row>
                    <div className="col-md-4">
                    <img src="assets/kegiatan/logomrmsbig.png" className="model-mrms"></img>
                    </div>
                    <div className="col">
                    <p className="title">MR. & MS. UMN</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

                    {/*details*/}
                    
                    <div className="details"> 
                    {/*logo char*/}
                    {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                    {/*char details*/}
                    <p>Ultima Sonora </p>
                    </div>{/*details*/}

                </div>{/*Box*/}

            </li>{/*Mr. & Ms. UMN*/}

            {/*4*/}
            <li className="item-a">
                
                    {/*Slider Box*/}
                <div className="box">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src="assets/kegiatan/logostarlightbig.png" className="model-keg"></img>
                    </div>
                    <div className="col">
                    <p className="title">STARLIGHT</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

                    {/*details*/}
                    
                    <div className="details"> 
                    {/*logo char*/}
                    {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                    {/*char details*/}
                    <p>Ultima Sonora </p>
                    </div>{/*details*/}

                </div>{/*Box*/}

            </li>{/*Starlight*/}

            {/*5*/}
            <li className="item-a">
                
                    {/*Slider Box*/}
                <div className="box">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src="assets/kegiatan/logobanksampahbig.png" className="model-keg"></img>
                    </div>
                    <div className="col">
                    <p className="title">BANK SAMPAH</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

                    {/*details*/}
                    
                    <div className="details"> 
                    {/*logo char*/}
                    {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                    {/*char details*/}
                    <p>Ultima Sonora </p>
                    </div>{/*details*/}

                </div>{/*Box*/}

            </li>{/*Bank Sampah*/}

            {/*6*/}
            <li className="item-a">
                
                    {/*Slider Box*/}
                <div className="box">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src="assets/kegiatan/logoombbig.png" className="model-keg"></img>
                    </div>
                    <div className="col">
                    <p className="title">OMB UMN</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

                    {/*details*/}
                    
                    <div className="details"> 
                    {/*logo char*/}
                    {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                    {/*char details*/}
                    <p>Ultima Sonora </p>
                    </div>{/*details*/}

                </div>{/*Box*/}

            </li>{/*OMB*/}

            </ul>

        </div>{/*container slider*/}

    </div>{/*Containerawal*/}
    </TabPanel>

    {/*TAB PAN LSO*/}

<TabPanel>
<div className="container-awal">

<div className="container-slider">
    {/*Slider*/}
    
<ul id="autoWidth" className="cs-hidden">

    {/*1*/}
    <li className="item-a">
        
            {/*Slider Box*/}
        <div className="box">
            {/*model*/}
            <Row>
                    <div className="col-md-5">
                    <img src="assets/lso/logorumpinbig.png" className="model-lso-box"></img>
                    </div>
                    <div className="col">
                    <p className="title">RUMPIN</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            <p>Ultima Sonora </p>
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>{/*Rumpin*/}

    {/*2*/}
    <li className="item-a">
        
            {/*Slider Box*/}
        <div className="box">
            {/*model*/}
            <Row>
                    <div className="col-md-5">
                    <img src="assets/lso/logoubizbig.png" className="model-lso-box"></img>
                    </div>
                    <div className="col">
                    <p className="title">U-BIZ</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            <p>Ultima Sonora </p>
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>{/*U-Biz*/}

    {/*3*/}
    <li className="item-a">
        
            {/*Slider Box*/}
        <div className="box">
            {/*model*/}
            <Row>
                    <div className="col-md-4">
                    <img src="assets/lso/logodunarbig.png" className="model-lso-dunar"></img>
                    </div>
                    <div className="col">
                    <p className="title">DUTA ANTI NARKOBA</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            <p>Ultima Sonora </p>
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>{/*Dunar*/}


    {/*4*/}
    <li className="item-a">
        
            {/*Slider Box*/}
        <div className="box">
            {/*model*/}
            <Row>
                    <div className="col-md-5">
                    <img src="assets/lso/logomedicbig.png" className="model-lso-medic"></img>
                    </div>
                    <div className="col">
                    <p className="title">UMN MEDIC</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            <p>Ultima Sonora </p>
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>{/*Medic*/}

    {/*5*/}
    <li className="item-a">
        
            {/*Slider Box*/}
        <div className="box">
            {/*model*/}
            <Row>
                    <div className="col-md-5">
                    <img src="assets/lso/logokomcorbig.png" className="model-lso-komcor"></img>
                    </div>
                    <div className="col">
                    <p className="title">KOMPAS CORNER</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            <p>Ultima Sonora </p>
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>{/*Komcor*/}

    {/*6*/}
    <li className="item-a">
        
            {/*Slider Box*/}
        <div className="box">
            {/*model*/}
            <Row>
                    <div className="col-md-5">
                    <img src="assets/lso/logoustorebig.png" className="model-lso-ustore"></img>
                    </div>
                    <div className="col">
                    <p className="title">U-STORE</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>
                    </div>
                    </Row>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            <p>Ultima Sonora </p>
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>{/*U-Store*/}

    </ul>

    
    

</div>{/*container slider*/}

</div>{/*Containerawal*/}
            </TabPanel>
        </Tabs>
    );

return(
    <div className="container-keg">
        {displayTabs}
    </div>
    );
}
}

// $( document ).ready(function() {
// var wrapper = document.getElementById("wrap");
// var tabs = wrapper.getElementsByClassName("page");
// console.log(tabs.length);
// for (var i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }
// });


export default KegiatanMahasiswa;

if (document.getElementById('keg')) {
    ReactDOM.render(<KegiatanMahasiswa />, document.getElementById('keg'));
}
