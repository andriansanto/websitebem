import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../css/lightslider.css';
import '../slidersukm/Jquery31';
import '../slidersukm/lightslider';
import '../slidersukm/sliderquery';
import 'react-tabs/style/react-tabs.css';
import '../../css/reactukm.css';

function slider(){
    $(document).ready(function() {
        $('#autoWidth').lightSlider({
            autoWidth:true,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            enableTouch:true,
            enableDrag:true,
            freeMove:true,
            loop:true,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cs-hidden');
            } 
        });  
        });
    }

class Ukm extends Component{
    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }
render(){
    const displayTabs = (
        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })} onClick={slider()}>
            <TabList>
            <Tab className="ukm1-tab-pane">Seni dan Budaya</Tab>
            <Tab className="ukm2-tab-pane">Sains dan Sosial</Tab>
            <Tab className="ukm3-tab-pane">Olahraga</Tab>
            </TabList>

            <TabPanel>
            <div className="container-awal">

                <div className="container-slider-senbud">
                    {/*Slider*/}
                    
                <ul id="autoWidth" className="cs-hidden">

                    {/*1*/}
                    <li className="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">Ultima Sonora</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/ulsonbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Ultima Sonora merupakan Paduan Suara Mahasiswa Universitas Multimedia Nusantara sejak tahun 2007. Dalam menjaga eksistensinya, Ultima Sonora aktif dalam mengadakan berbagai konser, seperti konser Inagurasi yang diadakan rutin setiap tahunnya</p>

                            <a href="instagram.com/UltimaSonora">@UltimaSonora</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Selasa & Jumat<br></br>17.00-20.00 WIB</p>
                            {/*char details*/}
                            <p><i>#SingWithUS</i></p>
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
                            <p>Komunitas Anak Teater Kampus (KataK) didirikan sebagai wadah berseni peran di UMN. KataK berkembang menjadi fasilitator bagi mereka yang ingin belajar ilmu teater.Puluhan produksi sudah diselenggarakan baik di dalam maupun di luar universitas.</p>
                            

                            <a href="instagram.com/teaterkatak">@teaterkatak</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Selasa, Rabu,& Kamis<br></br>17.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>“Berani Melompat Lebih Tinggi <br></br>Melewati Batasan Yang Ada”</i></p>
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
                            <p>UMN Symphony Orchestra berdiri sejak 2015 dan resmi menjadi ukm pada tahun 2016. Melalui tagline ‘Viva La Musica’  kami tidak hanya sekedar bermain musik, tetapi juga menghidupkan rasa dalam setiap individu, sehingga seluruh permainan musik yang kami hasilkan dapat tersampaikan dengan baik dan dirasakan</p>

                            <a href="instagram.com/umnsymphonyorchestra">@umnsymphonyorchestra</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Selasa & Kamis<br></br>17.00-20.00 WIB</p>
                            {/*char details*/}
                            <p><i>Viva La Musica!</i></p>
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
                            <p>Qorie merupakan sebuah UKM seni dan budaya yang berfokus pada kebudayaan Korea Selatan. Qorie juga menjadi sarana untuk mempelajari tata bahasa korea serta menjadi tempat bagi mahasiswa/i untuk menunjukan bakat dan minat mereka dalam seni tari dan musik korea.</p>

                            <a href="instagram.com/qorie_umn">@qorie_umn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Senin s/d Jumat<br></br>17.00-20.00 WIB *(disesuaikan perdivisi)</p>
                            {/*char details*/}
                            <p><i>Qorie, Saranghaja!</i></p>
                            </div>{/*details*/} 

                        </div>{/*Box*/}

                    </li>{/*qorie*/}

                    {/*5*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">Jcafe</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/jcafebg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Jcafe adalah Unit Kegiatan Mahasiswa (UKM) yang beranggotakan para penggemar budaya Jepang di UMN. Jcafe memberikan wadah kepada para mahasiswa untuk mengembangkan minat & bakat serta passion mereka terhadap seni dan budaya berbasis jepang.</p>

                            <a href="instagram.com/jcafe_umn">@jcafe_umn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Senin s/d Jumat<br></br>17.00-19.00 WIB *(disesuaikan perdivisi)</p>
                            {/*char details*/}
                            <p><i>Jcafe, Express Your Japanese Passion!</i></p>
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
                            <p>Multimedia Face of Music (MUFOMIC) merupakan salah satu Unit Kegiatan Mahasiswa (UKM) di Universitas Multimedia Nusantara yang bergerak di bidang seni dan budaya, yaitu musik dalam format band.</p>

                            <a href="instagram.com/mufomic">@mufomic</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Selasa<br></br>17.00-22.00 WIB</p>
                            {/*char details*/}
                            <p><i>Mufomic - ORKES</i></p>
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
                            <p>Obscura merupakan Unit Kegiatan Mahasiswa (UKM) yang bergerak di bidang fotografi dibawah naungan UMN.Obscura bertujuan untuk mempertemukan para pecinta fotografi di kalangan mahasiswa UMN. Obscura memegang erat motto “Together We Learn” karena mengedepankan kebersamaan dalam belajar. </p>

                            <a href="instagram.com/obscuratwl">@obscuratwl</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Rabu<br></br>17.00-22.00 WIB</p>
                            {/*char details*/}
                            <p><i>Together We Learn!</i></p>
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
                            <p>Traditional dance atau yang akrab disebut dengan TRACCE merupakan Unit Kegiatan Mahasiswa di Universitas Multimedia Nusantara yang memberi wadah bagi mahasiswa yang ingin menyalurkan bakat dan minatnya dalam seni tradisional yang berasal dari Indonesia.</p>

                            <a href="instagram.com/tracceumn">@tracceumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Selasa, Rabu,& Kamis<br></br>17.30-20.00 WIB</p>
                            {/*char details*/}
                            <p><i>"Nari terus, nari terus, nari terus!"</i></p>
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
                            <p>Ultima Toys adalah Unit Kegiatan Mahasiswa sebagai tempat belajar juga sarana untuk berbagi ide dan kreativitas yang berkaitan dengan fotografi mainan</p>

                            <a href="instagram.com/ultimatoys">@ultimatoys</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Kamis<br></br>17.00-19.00 WIB</p>
                            {/*char details*/}
                            <p><i>Where Toys Come to Life</i></p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*utoys*/}

                    {/*10*/}
                    <li className="item-a">
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">Street Dance</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/senbud/sdbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Let’s Dance (LDNC) adalah Unit Kegiatan Mahasiswa (UKM) yang berfokus di bidang tari. LDNC sendiri biasa dikenal dengan UKM street dance. Tujuan dibentuknya LDNC adalah menjadi tempat atau wadah untuk mahasiswa UMN yang tertarik dengan dunia tari, ada berbagai macam style yang akan dipelajari seperti: b-boy, locking, hip-hop, ladies, popping, dll</p>

                            <a href="instagram.com/streetdanceumn">@streetdanceumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Kamis<br></br>19.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>Dance to Your Own Beat</i></p>
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
                            <p>UMN PC (UMN Programming Club) adalah UKM yang melatih kemampuan CP (Competitive Programming) dengan tujuan mengasah logika dan daya pikir delchipier. Delchipier melakukan CP bersama-sama setiap minggunya dengan materi yang disusun untuk mengembangkan skill CP secara mendalam. </p>

                            <a href="instagram.com/umnprogrammingclub">@umnprogrammingclub</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Senin & Kamis<br></br>17.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>We Code The Future, Future Starts With Us</i></p>
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
                            <p>UESC (UMN English Student Council) sebagai salah satu UKM UMN berbahasa Inggris, ingin mengembangkan kemampuan berbahasa Inggris anggotanya. Dengan keempat divisi UESC yaitu Scrabble, Speech, Spelling Bee, dan Debate, banyak variasi keterampilan yang dapat kita semua asah.</p>

                            <a href="instagram.com/uesc_umn">@uesc_umn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Kamis<br></br>17.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>So, You Think We ain't Fun?</i></p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*uesc*/}

                    {/*3*/}
                    <li className="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxsos">
                            <p className="sensos">Rencang</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/sainsos/rencangbg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Rencang merupakan komunitas sosial yang menjadi wadah bagi mahasiswa/i UMN untuk dapat berdampak bagi masyarakat yang membutuhkan. Banyak program-program yang dilakukan untuk mencapai tujuan tersebut, seperti donor darah, kampanye sosial, berbagi kebahagiaan dengan orang yang membutuhkan, dan berbagai kegiatan yang mengakrabkan sesama anggota.</p>

                            <a href="instagram.com/rencangaye">@rencangaye</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Selasa<br></br>17.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>Unite as a Family to Manifest Love and Sincerity</i></p>
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
                            <p>Mapala UMN merupakan organisasi yang berasaskan kekeluargaan, persaudaraan, persamaan, kemerdekaan, dan gotong royong, yang didasari oleh semangat kemanusiaan yang adil dan beradab. Mapala UMN bertujuan untuk memberikan wadah kepada Mahasiswa UMN yang berminat terhadap kegiatan alam yang keanggotaannya diatur dalam Anggaran Rumah Tangga. </p>

                            <a href="instagram.com/bemumn">@mapalaumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Jumat<br></br>17.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>Salam Lestari!</i></p>
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
                            <p>Game Development Club adalah UKM yang merangkul mahasiswa yang berminat terhadap game development. Disini, mahasiswa dapat mengisi waktu mereka untuk mempelajari lebih dalam mengenai proses pembuatan game</p>

                            <a href="instagram.com/gdcumn">@gdcumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Rabu<br></br>17.00-19.00 WIB</p>
                            {/*char details*/}
                            <p><i>We Make Great Games! </i></p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*gdc*/}

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
                            <p>UMN Lions Basketball merupakan salah satu UKM yang berada di UMN, yang bergerak di bidang olahraga khususnya olahraga bola basket. Lions basketball ini sudah berdiri sejak 2010. Lions basketball ini memiliki tujuan sebagai wadah bagi para mahasiswa dan mahasiswi untuk dapat menunjukan potensi dan bakat mereka dalam bidang olahraga basket.</p>

                            <a href="instagram.com/umn_lions">@umn_lions</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Senin, Rabu,& Jumat<br></br>17.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>UMN Lions Jaya Jaya Luar Biasa</i></p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*Basket*/}

                    {/*2*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">Lions Badminton</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/badminbg.png" className="model"></img>
                            
                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Lions badminton merupakan UKM di kampus UMN yang bergerak di bidang olahraga. Lions Badminton juga menjadi wadah bagi setiap mahasiswa/i untuk mengembangkan minat dan bakat mereka khususnya di bidang bulutangkis.</p>

                            <a href="instagram.com/lionsbadmintonumn">@lionsbadmintonumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Rabu & Kamis<br></br>18.00-22.00 WIB</p>
                            {/*char details*/}
                            <p><i>Lions Badminton!</i></p>
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
                            <p>Di Capoeira UMN kami belajar bersama dan bermain bersama dengan santai.Capoeira UMN menerapkan Mix Method dimana kami belajar capoeira dicampur dengan tricking, yoga, akrobatik dan sebagainya.</p>

                            <a href="instagram.com/capoeiraumn">@capoeiraumn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Kamis<br></br>17.30-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>É vou jogar!</i></p>
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
                            <p>Fortius E-Sport merupakan Unit Kegiatan Mahasiswa (UKM) yang ada di UMN yang ditujukan untuk mahasiswa/i dengan cabang olahraga E-Sport. Fortius berasal dari kata latin, dengan memiliki arti Sangat kuat.</p>
                            
                            <a href="instagram.com/fortiusesports">@fortiusesports</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Senin, Rabu, & Jumat<br></br>19.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>Fight.Dominate.Win</i></p>
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
                            <p>Lions Futsal adalah UKM olahraga futsal di UMN yang mewadahi mahasiswa ataupun mahasiswi untuk menyalurkan bakat atau hobi yang dimiliki.  Lions futsal juga aktif mengikuti kompetisi tingkat universitas. Lions Futsal pernah menjuarai beberapa kejuaraan baik internal maupun eksternal.</p>
                   
                            <a href="instagram.com/lionsfutsal_umn">@lionsfutsal_umn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Senin & Jumat<br></br>17.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>Lions Futsal UMN, Victory</i></p>
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
                            <p>UKM Tenis Meja adalah UKM yang ditujukan untuk mahasiswa/i yang tertarik untuk mempelajari tenis meja dan mengembangkan kemampuan untuk mengikuti kompetisi.</p>
         
                            <a href="instagram.com/ukmtenismeja.umn">@ukmtenismeja.umn</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Selasan & Rabu<br></br>17.00-19.00 WIB</p>
                            {/*char details*/}
                            <p><i>Tenis Meja UMN!</i></p>
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
                            <p className="logo">Selasan & Rabu<br></br>17.30-20.00 WIB</p>
                            {/*char details*/}
                            <p><i>Softball UMN!</i></p>
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
                            <p>Spectre adalah UKM yang berfokus di bidang stunt action untuk dunia perfilman. Tujuan dari UKM ini adalah mengasah ilmu yang dibutuhkan oleh para anggota untuk berperforma di dunia perfilman dengan tingkat standar profesional. Ilmu tersebut terdiri dari teknik gerakan menyerang, jatuhan, aksi reaksi dan gun handling yang dicakup dari berbagai macam beladiri.</p>

                            <a href="instagram.com/usfxspectre">@usfxspectre</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Rabu & Jumat<br></br>17.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>USF ACTION!!!</i></p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>{/*spectre*/}

                    {/*9*/}
                    <li class="item-a">
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">Lions Voli</p>
                            {/*model*/}
                            <img src="assets/ukmnobg/olahraga/volibg.png" className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>Lions Volleyball merupakan salah satu UKM yang diselenggarakan oleh Universitas Multimedia Nusantara dalam cabang olahraga bola voli.Lions Volleyball sendiri mempunyai tagline 'Hustle Hit, Never Quit', dapat bisa diartikan dalam permainan ini, setiap pukulan yang didapat harus tetap bersikap rendah tetapi tidak menyerah.</p>
                            <p>yang bergerak dalam bidang bola voli</p>

                            <a href="instagram.com/umnlionsvolleyball">@umnlionsvolleyball</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Senin & Rabu<br></br>17.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>Hustle Hit, Never Quit</i></p>
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
                            <p>Taekwondo UMN merupakan Unit Kegiatan Mahasiswa yang mendukung mahasiswa UMN dalam melakukan bela diri Taekwondo. Taekwondo UMN juga  menghasilkan juara juara bertarung di berbagai tingkatan</p>
                   
                            <a href="instagram.com/taekwondo_umn ">@taekwondo_umn </a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">Selasa & Kamiss<br></br>18.00-21.00 WIB</p>
                            {/*char details*/}
                            <p><i>If You Worry About How , You Will Never Start</i></p>
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