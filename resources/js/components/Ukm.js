import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/reactukm.css';
import '../../css/lightslider.css';
import '../slidersukm/Jquery31';
import '../slidersukm/lightslider';
import '../slidersukm/sliderquery';


class Ukm extends Component{
render(){
   
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
   
    <div className="container-awal">

        <div className="container-slider">
            {/*Slider*/}
            
        <ul id="autoWidth" class="cs-hidden">

            {/*1*/}
            <li class="item-a">
                
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

            {/*2*/}
            <li class="item-a">
                
                    {/*Slider Box*/}
                <div className="box">
                    <p className="senbud">Teater KataK</p>
                    {/*model*/}
                    <img src="assets/ukm/senbud/katakbig.png" className="model"></img>
                    
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
                <div className="box">
                    <p className="senbud">UMN Symphony Orchestra</p>
                    {/*model*/}
                    <img src="assets/ukm/senbud/usobig.png" className="model"></img>

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
                <div className="box">
                    <p className="senbud">Qorie</p>
                    {/*model*/}
                    <img src="assets/ukm/senbud/qoriebig.png" className="model"></img>

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
                <div className="box">
                    <p className="senbud">J-Cafe</p>
                    {/*model*/}
                    <img src="assets/ukm/senbud/jcafebig.png" className="model"></img>

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
                <div className="box">
                    <p className="senbud">Mufomic</p>
                    {/*model*/}
                    <img src="assets/ukm/senbud/mufomicbig.png" className="model"></img>

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
                <div className="box">
                    <p className="senbud">Obscura</p>
                    {/*model*/}
                    <img src="assets/ukm/senbud/obscurabig.png" className="model"></img>

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
                <div className="box">
                    <p className="senbud">Tracce</p>
                    {/*model*/}
                    <img src="assets/ukm/senbud/traccebig.png" className="model"></img>

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
                <div className="box">
                    <p className="senbud">Ultima Toys</p>
                    {/*model*/}
                    <img src="assets/ukm/senbud/utoysbig.png" className="model"></img>

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
                <div className="box">
                    <p className="senbud">Street Dance</p>
                    {/*model*/}
                    <img src="assets/ukm/senbud/streetdancebig.png" className="model"></img>

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

    

</div>/*End allukm*/
   );
}
}

export default Ukm;

if (document.getElementById('ukm')) {
    ReactDOM.render(<Ukm />, document.getElementById('ukm'));
}