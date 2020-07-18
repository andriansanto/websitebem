import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../css/lightslider.css';
import '../slidersukm/Jquery31';
import '../slidersukm/lightslider';
import '../slidersukm/sliderquery';
import 'react-tabs/style/react-tabs.css';
import '../../css/reactkeg.css';

class KegiatanMahasiswa extends Component{

render(){
    const displayTabs = (
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList>
            <Tab className="text-tab-pane" id="tab-keg">Kegiatan<br></br>Mahasiswa</Tab>
            <Tab className="text-tab-pane" id="tab-lso">Lembaga<br></br>Semi Otonom</Tab>
            </TabList>

            <TabPanel>
            <div className="container-awal">

        <div className="container-slider">
            {/*Slider*/}
            
        <ul id="autoWidth" className="cs-hidden">

            {/*1*/}
            <li className="item-a">
                
                    {/*Slider Box*/}
                <div className="box">
                    <p className="senbud">Ultima Sonora</p>
                    {/*model*/}
                    <img src="assets/ukmnobg/senbud/ulsonbg.png" className="model"></img>

                    {/*Penjelasan*/}
                    <div className="penjelasan">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>

                    {/*details*/}
                    
                    <div className="details"> 
                    {/*logo char*/}
                    {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                    {/*char details*/}
                    <p>Ultima Sonora </p>
                    </div>{/*details*/}

                </div>{/*Box*/}

            </li>{/*Ulson*/}

            {/*1*/}
            <li className="item-a">
                
                    {/*Slider Box*/}
                <div className="box">
                    <p className="senbud">Ultima Sonora</p>
                    {/*model*/}
                    <img src="assets/ukmnobg/senbud/ulsonbg.png" className="model"></img>

                    {/*Penjelasan*/}
                    <div className="penjelasan">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>

                    {/*details*/}
                    
                    <div className="details"> 
                    {/*logo char*/}
                    {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                    {/*char details*/}
                    <p>Ultima Sonora </p>
                    </div>{/*details*/}

                </div>{/*Box*/}

            </li>{/*Ulson*/}

            {/*1*/}
            <li className="item-a">
                
                    {/*Slider Box*/}
                <div className="box">
                    <p className="senbud">Ultima Sonora</p>
                    {/*model*/}
                    <img src="assets/ukmnobg/senbud/ulsonbg.png" className="model"></img>

                    {/*Penjelasan*/}
                    <div className="penjelasan">
                    <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
                    <p>yang bergerak dalam bidang paduan suara</p>

                    <a href="instagram.com/bemumn">@ultimasonora</a>
                    </div>

                    {/*details*/}
                    
                    <div className="details"> 
                    {/*logo char*/}
                    {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                    {/*char details*/}
                    <p>Ultima Sonora </p>
                    </div>{/*details*/}

                </div>{/*Box*/}

            </li>{/*Ulson*/}

            </ul>

            
            

        </div>{/*container slider*/}

    </div>{/*Containerawal*/}
            </TabPanel>
            <TabPanel>
            <div className="container-awal">

<div className="container-slider">
    {/*Slider*/}
    
<ul id="autoWidth" className="cs-hidden">

    {/*1*/}
    <li className="item-a">
        
            {/*Slider Box*/}
        <div className="box">
            <p className="senbud">Ultima Sonora</p>
            {/*model*/}
            <img src="assets/ukmnobg/senbud/ulsonbg.png" className="model"></img>

            {/*Penjelasan*/}
            <div className="penjelasan">
            <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
            <p>yang bergerak dalam bidang paduan suara</p>

            <a href="instagram.com/bemumn">@ultimasonora</a>
            </div>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            <p>Ultima Sonora </p>
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>{/*Ulson*/}

    {/*1*/}
    <li className="item-a">
        
            {/*Slider Box*/}
        <div className="box">
            <p className="senbud">Ultima Sonora</p>
            {/*model*/}
            <img src="assets/ukmnobg/senbud/ulsonbg.png" className="model"></img>

            {/*Penjelasan*/}
            <div className="penjelasan">
            <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
            <p>yang bergerak dalam bidang paduan suara</p>

            <a href="instagram.com/bemumn">@ultimasonora</a>
            </div>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            <p>Ultima Sonora </p>
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>{/*Ulson*/}

    {/*1*/}
    <li className="item-a">
        
            {/*Slider Box*/}
        <div className="box">
            <p className="senbud">Ultima Sonora</p>
            {/*model*/}
            <img src="assets/ukmnobg/senbud/ulsonbg.png" className="model"></img>

            {/*Penjelasan*/}
            <div className="penjelasan">
            <p>Ultima Sonora adalah unit kegiatan mahasiswa</p>
            <p>yang bergerak dalam bidang paduan suara</p>

            <a href="instagram.com/bemumn">@ultimasonora</a>
            </div>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            <p>Ultima Sonora </p>
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>{/*Ulson*/}

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

export default KegiatanMahasiswa;

if (document.getElementById('keg')) {
    ReactDOM.render(<KegiatanMahasiswa />, document.getElementById('keg'));
}
