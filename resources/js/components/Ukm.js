import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../css/lightslider.css';
import '../slidersukm/Jquery31';
import '../slidersukm/lightslider';
import '../slidersukm/sliderquery';
import 'react-tabs/style/react-tabs.css';
import '../../css/reactukm.css';


class Ukm extends Component{
    

render(){

    const displayTabs = (
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList>
            <Tab className="ukm1-tab-pane" >Seni dan Budaya</Tab>
            <Tab className="ukm2-tab-pane">Sains dan Sosial</Tab>
            <Tab className="ukm3-tab-pane">Olahraga</Tab>
            </TabList>

            <TabPanel>
            <div className="container-awal">

                <div className="container-slider-senbud">
                    {/*Slider*/}
                    
                <ul id="autoWidth" class="cs-hidden">

                    {/*1*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
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

                    {/*2*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">Teater KataK</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/katakbg.png" className="model"></img>
                            
                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Teater KataK adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang teater</p>

                            <a href="instagram.com/bemumn">@teaterkatak</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Teater KataK</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*katak*/}

                    {/*3*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">UMN Symphony Orchestra</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/usobg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>UMN Symphony Orchestra adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang alat musik klasik</p>

                            <a href="instagram.com/bemumn">@usoumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>UMN Symphony Orchestra</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*Uso*/}

                    {/*4*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">Qorie</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/qoriebg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Qorie adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang budaya korea</p>

                            <a href="instagram.com/bemumn">@qorieumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Qorie</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*qorie*/}

                    {/*5*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">J-Cafe</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/jcafebg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>J-Cafe adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang budaya Jepang</p>

                            <a href="instagram.com/bemumn">@jcafeumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>J-Cafe</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*jcafe*/}

                    {/*6*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">Mufomic</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/mufomicbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Mufomic adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang vokal dan alat musik</p>

                            <a href="instagram.com/bemumn">@mufomic</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Mufomic</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*mufomic*/}

                    {/*7*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">Obscura</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/obscurabg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Obscura adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang fotografi</p>

                            <a href="instagram.com/bemumn">@obscura</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Obscura</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*obscura*/}

                    {/*8*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">Tracce</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/traccebg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Tracce adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang tarian traditional</p>

                            <a href="instagram.com/bemumn">@tracceumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Tracce</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*tracce*/}

                    {/*9*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">Ultima Toys</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/utoysbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Ultima Toys adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang fotografi miniatur</p>

                            <a href="instagram.com/bemumn">@utoysumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Ultima Toys</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*utoys*/}

                    {/*10*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">Street Dance</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/sdbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Street Dance adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang tari modern</p>

                            <a href="instagram.com/bemumn">@streetdanceumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Street Dance</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*Street Dance*/}

                </ul>
                
                </div>{/*container slider*/}

            </div>{/*Containerawal*/}
            </TabPanel>

            {/*Sain & Sosial*/}
            <TabPanel>
            <div className="container-awal">

                <div className="container-slider-sensos">
                    {/*Slider*/}
                    
                <ul id="autoWidth" class="cs-hidden">

                    {/*1*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxsos">
                            <p className="sensos">UMN Programming Club</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/sainsos/umnpcbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Umn Programming Club adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang programming</p>

                            <a href="instagram.com/bemumn">@umnpc</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>UMN PC</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*umnpc*/}

                    {/*2*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxsos">
                            <p className="sensos">UESC</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/sainsos/uescbg.png" className="model"></img>
                            
                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>UESC adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang inggris</p>

                            <a href="instagram.com/bemumn">@uesc</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>UESC</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*uesc*/}

                    {/*3*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxsos">
                            <p className="sensos">Rencang</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/sainsos/rencangbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Rencang adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang sosial</p>

                            <a href="instagram.com/bemumn">@rencang</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Rencang</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*rencang*/}

                    {/*4*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxsos">
                            <p className="sensos">Mapala</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/sainsos/mapalabig.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Mapala adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang alam</p>

                            <a href="instagram.com/bemumn">@mapalaumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Mapala</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*mapala*/}

                    {/*5*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxsos">
                            <p className="sensos">GDC</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/sainsos/gdcbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Game Development Club adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang pembuatan game</p>

                            <a href="instagram.com/bemumn">@gdcumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>GDC</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*gdc*/}

                    {/*6*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxsos">
                            <p className="sensos">AIESEC</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/sainsos/aiesecbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>AIESEC adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang SDG</p>

                            <a href="instagram.com/bemumn">@aiesec</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>AIESEC</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*aiesec*/}

                </ul>
                
                </div>{/*container slider*/}

            </div>{/*Containerawal*/}
            </TabPanel>
        
            {/*Olahraga*/}
            <TabPanel>
            <div className="container-awal">

                <div className="container-slider-olr">
                    {/*Slider*/}
                    
                <ul id="autoWidth" class="cs-hidden">

                    {/*1*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">Lions Basket</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/basketbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Lions Basket adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang bola basket</p>

                            <a href="instagram.com/bemumn">@lions_basket</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Basket</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*Basket*/}

                    {/*2*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">Badminton</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/badminbg.png" className="model"></img>
                            
                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Badminton adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang bulutangkis</p>

                            <a href="instagram.com/bemumn">@badmintonumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Badminton</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*badmin*/}

                    {/*3*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">Capoeira</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/capoeirabg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Capoeira adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang olahraga capoeira</p>

                            <a href="instagram.com/bemumn">@capoeiraumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Capoeira</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*Capoeira*/}

                    {/*4*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">Fortius e-Sports</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/fortiusbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Fortius e-Sports adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang <i>game online</i></p>

                            <a href="instagram.com/bemumn">@fortiusumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Fortius</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*Fortius*/}

                    {/*5*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">Lions Futsal</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/futsalbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Lions Futsal adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang sepak bola</p>

                            <a href="instagram.com/bemumn">@lionsfutsalumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Futsal</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*Futsal*/}

                    {/*6*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">Tenis Meja</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/pingpongbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Tenis Meja adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang tenis meja</p>

                            <a href="instagram.com/bemumn">@tenismejaumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Tenis Meja</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*tenismeja*/}

                    {/*7*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">softball</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/softballbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Softball adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang softball</p>

                            <a href="instagram.com/bemumn">@softballumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Softball</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*softball*/}

                    {/*8*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">Spectre</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/spectrebg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Spectre adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang <i>stuntman</i></p>

                            <a href="instagram.com/bemumn">@spectreumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Spectre</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*spectre*/}

                    {/*9*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">Voli</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/volibg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Voli adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang bola voli</p>

                            <a href="instagram.com/bemumn">@voliumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Voli</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*voli*/}

                    {/*10*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">Taekwondo UMN</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/taekwonbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Taekwondo UMN adalah unit kegiatan mahasiswa</p>
                            <p>yang bergerak dalam bidang bela diri taekwondo</p>

                            <a href="instagram.com/bemumn">@taekwondoumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                            {/*char details*/}
                            <p>Taekwondo</p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*Taekwondo*/}

                </ul>
                
                </div>{/*container slider*/}

            </div>{/*Containerawal*/}
            </TabPanel>
        </Tabs>
    );
   
return(
<div className="allukm">
        
    <div className="container-ukm">
        <h1 className="ukm">UNIT KEGIATAN<br></br> MAHASISWA</h1>
        <br></br>
        <p className="textatasukm">
        Universitas Multimedia Nusantara memiliki berbagai Unit Kegiatan Mahasiswa.<br></br>
        (UKM) yang beragam. Yang dibagi menjadi 3 kategori yaitu, Seni dan Budaya, <br></br>
        Sains dan Sosial, dan Olahraga. <br></br>
        </p>          
    </div>{/*Container ukm*/}

    <div className="container-tab">
        {displayTabs}
    </div>
   
    

    

</div>/*End allukm*/
   );
}
}

export default Ukm;

if (document.getElementById('ukm')) {
    ReactDOM.render(<Ukm />, document.getElementById('ukm'));
}