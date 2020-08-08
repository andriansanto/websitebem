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

class KegiatanMahasiswa extends Component{
    constructor() {
        super();
        this.state = { tabIndex: 0 , radio: "kegiatan", backgroundcolor: "" };

        this.onCheckRadio = this.onCheckRadio.bind(this)
    }

    onCheckRadio(e){
        console.log(e.target.value);

        if(e.target.value == "kegiatan"){
            this.setState({
                [e.target.name]: e.target.value,
                backgroundcolor: 'linear-gradient(#ffb359,#ffffff)'
            })
        }
        else if(e.target.value == "lso"){
            this.setState({
                [e.target.name]: e.target.value,
                backgroundcolor: 'linear-gradient(#ade2b2,#ffffff)'
            })
        }
    }


    render(){
        const { backgroundcolor } = this.state
        const displayTabs = (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })} onClick={slider()}>
            <TabList>
                <Tab className="text-tab-pane" style={{backgroundImage: backgroundcolor}}><input type="radio" name="radio" id="keg" value="kegiatan" checked={this.state.radio === "kegiatan"} onChange={this.onCheckRadio}></input>Kegiatan<br></br>Mahasiswa</Tab>
                <Tab className="text-tab-pane" style={{backgroundImage: backgroundcolor}}><input type="radio" name="radio" id="lso" value="lso" checked={this.state.radio === "lso"} onChange={this.onCheckRadio}></input>Lembaga<br></br>Semi Otonom</Tab>
            </TabList>

            {/*TAB PAN KEGIATAN*/}

            <TabPanel>
            <img className="keg-kiri" src="assets/kegiatan/kegkiri.png"></img>
            <div className="container-awal">
        <div className="container-slider-keg">
            {/*Slider*/}
            
        <ul id="autoWidth" className="cs-hidden">
            {/*1*/}
            <li className="item-a">
                    {/*Slider Box*/}
                <div className="box-keg">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src="assets/kegiatan/logoufestbig.png" className="model-keg"></img>
                    </div>
                    <div className="col">
                    <p className="title">U-FEST</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>UMN Festival atau U-Fest adalah kegiatan mahasiswa di bawah naungan BEM UMN yang bertujuan untuk meningkatkan ikatan antar seluruh mahasiswa dari setiap jurusan dan angkatan lewat bidang olahraga, sosial, dan seni.</p>

                    <a href="http://www.instagram.com/umnfestival"><i class="lni lni-instagram-original"></i> umnfestival</a>
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
                <div className="box-keg">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src="assets/kegiatan/logomaximabig.png" className="model-keg"></img>
                    </div>
                    <div className="col">
                    <p className="title">MAXIMA</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>MAXIMA atau Malam Ekspresi Mahasiswa adalah kegiatan dibawah naungan BEM UMN yang ditujukan untuk meningkatkan kesadaran dan partisipasi aktif mahasiswa serta menjalin hubungan, dikemas dalam wujud pementasan, pameran, uji coba UKM, dan pentas seni.</p>

                    <a href="http://www.instagram.com/maximaumn"><i class="lni lni-instagram-original"></i> maximaumn</a>
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
                <div className="box-keg">
                    {/*model*/}
                    <Row>
                    <div className="col-md-4">
                    <img src="assets/kegiatan/logomrmsbig.png" className="model-mrms"></img>
                    </div>
                    <div className="col">
                    <p className="title">MR. & MS. UMN</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Mr. & Ms. UMN merupakan kegiatan mahasiswa yang berada dibawah naungan BEM UMN dengan tujuan untuk mencari duta bagi Universitas Multimedia Nusantara.</p>

                    <a href="http://www.instagram.com/mrmsumn"><i class="lni lni-instagram-original"></i> mrmsumn</a>
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
                <div className="box-keg">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src="assets/kegiatan/logostarlightbig.png" className="model-keg"></img>
                    </div>
                    <div className="col">
                    <p className="title">STARLIGHT</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Starlight merupakan salah satu program kerja dari BEM UMN dimana para pelajar baik internal maupun eksternal UMN dapat berkompetisi dengan menunjukkan kebolehannya untuk menampilkan bakat mereka di kegiatan ini.</p>

                    <a href="http://www.instagram.com/starlightumn"><i class="lni lni-instagram-original"></i> starlightumn</a>
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
                <div className="box-keg">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src="assets/kegiatan/logobanksampahbig.png" className="model-keg"></img>
                    </div>
                    <div className="col">
                    <p className="title">BANK SAMPAH</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Bank Sampah adalah kegiatan mahasiswa di bawah naungan BEM UMN yang bertujuan untuk membangun kesadaran mahasiswa akan pentingnya lingkungan yang sehat dan bebas dari sampah.</p>

                    <a href="http://www.instagram.com/banksampah_umn"><i class="lni lni-instagram-original"></i> banksampah_umn</a>
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
                <div className="box-keg">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src="assets/kegiatan/logoombbig.png" className="model-keg"></img>
                    </div>
                    <div className="col">
                    <p className="title">OMB UMN</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>Orientasi Mahasiswa Baru Universitas Multimedia Nusantara atau OMB UMN adalah kegiatan mahasiswa dibawah naungan BEM UMN yang bertujuan memberi bekal untuk masa pendidikan mahasiswa baru Universitas Multimedia Nusantara.</p>

                    <a href="http://www.instagram.com/ombumn"><i class="lni lni-instagram-original"></i> ombumn</a>
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

<div className="container-slider-keg">
    {/*Slider*/}
    
<ul id="autoWidth" className="cs-hidden">

    {/*1*/}
    <li className="item-a">
        
            {/*Slider Box*/}
        <div className="box-keg">
            {/*model*/}
            <Row>
                    <div className="col-md-4">
                    <img src="assets/lso/logorumpinbig.png" className="model-lso-box"></img>
                    </div>
                    <div className="col">
                    <p className="title-lso">RUMPIN</p>

                    {/*Penjelasan*/}
                    <div className="info-lso">
                    <p>Rumpin merupakan sebuah LSO yang bergerak pada bidang sosial dan berfokus pada pendidikan. Dengan tagline “Together, Inspire for the Future”, kami percaya bahwa pendidikan dapat membantu mengubah masa depan. Tujuan utama Rumpin saat ini adalah memberikan bantuan untuk anak-anak yang masih belum mendapatkan pengetahuan dan edukasi yang layak. Kami juga mau menjadi wadah bagi mahasiswa Universitas Multimedia Nusantara untuk menyalurkan jiwa social mereka kepada anak-anak yang membutuhkan.</p>
                    <p>Rumpin juga telah melaksanakan beberapa kegiatan sosial yang melibatkan mahasiswa Universitas Multimedia Nusantara sendiri dan menyalurkan bantuan ke beberapa lembaga, panti asuhan dan sekolah yang membutuhkan.</p>

                    <a href="http://www.instagram.com/rumpin_umn"><i class="lni lni-instagram-original"></i> rumpin_umn</a>
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
        <div className="box-keg">
            {/*model*/}
            <Row>
                    <div className="col-md-4">
                    <img src="assets/lso/logoubizbig.png" className="model-lso-box"></img>
                    </div>
                    <div className="col">
                    <p className="title-lso">U-BIZ</p>

                    {/*Penjelasan*/}
                    <div className="info-lso">
                    <p>U-BIZ adalah organisasi bisnis dari mahasiswa untuk mahasiswa yang bertujuan meningkatkan jiwa kewirausahaan mahasiswa. Adapun U-BIZ UMN memiliki dua departemen.</p>
                    <p>Pertama, Departemen U-BIZ Walkneat sebagai salah satu unit bisnis yang dimiliki oleh organisasi Ubiz. Memberikan mahasiswa kesempatan untuk mencoba terjun ke dunia bisnis secara langsung dengan menjalankan bisnis dalam bidang pelayanan cuci sepatu.</p>
                    <p>Kedua, Departemen Komunitas sebagai wadah mahasiswa untuk mengembangkan potensi diri dalam dunia bisnis dengan bantuan pengetahuan, sharing dan konsultasi dari Organisasi Ubiz. Membantu mahasiswa dalam merencanakan dan berproses membangun bisnis baik untuk mahasiswa yang telah menjalankan bisnis maupun yang baru ingin menjalankan.</p>

                    <a href="http://www.instagram.com/ubizumn"><i class="lni lni-instagram-original"></i> ubizumn</a>
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
        <div className="box-keg">
            {/*model*/}
            <Row>
                    <div className="col-md-4">
                    <img src="assets/lso/logodunarbig.png" className="model-lso-dunar"></img>
                    </div>
                    <div className="col">
                    <p className="title-lso">DUTA ANTI NARKOBA</p>

                    {/*Penjelasan*/}
                    <div className="info-lso">
                    <p>Duta Anti Narkoba atau Dunar merupakan Lembaga Semi Otonom yang berada dibawah naungan Badan Eksekutif Mahasiswa. Dunar dibentuk tahun 2016 dan  berhasil mempertahankan eksistensinya sampai saat ini dengan mewujudkan peraturan kampus yang menentang segala bentuk penyalahgunaan narkoba di lingkungan kampus UMN. Kegiatan internal Dunar berupa Seminar, Anti Narkoba Week, HANI, Awarding Night serta beberapa kegiatan kecil lainnya. </p>
                    <p>Selain itu, kegiatan eksternal Dunar berupa kerjasama dengan berbagai organisasi luar seperti Fornasmapan dan Artipena. Dunar bertujuan untuk memberikan edukasi, membuat program - program menarik sepanjang tahun serta membagikan pengalaman berkesan bagi mahasiswa/i UMN. </p>

                    <a href="http://www.instagram.com/dutaantinarkoba.umn"><i class="lni lni-instagram-original"></i> dutaantinarkoba.umn</a>
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
        <div className="box-keg">
            {/*model*/}
            <Row>
                    <div className="col-md-4">
                    <img src="assets/lso/logomedicbig.png" className="model-lso-medic"></img>
                    </div>
                    <div className="col">
                    <p className="title-lso">UMN MEDIC</p>

                    {/*Penjelasan*/}
                    <div className="info-lso">
                    <p>UMN Medical Center merupakan suatu lembaga semi otonom yang berdiri di bawah pengawasan BEM dan bergerak di bidang kesehatan. Saat ini UMN medical Center sudah memiliki VI generasi yang sekarang dijalankan oleh generasi ke VI. </p>
                    <p>Dengan tagline “Spread Health through Happiness”, UMN Medical Center mengajak seluruh Civitas akademika UMN untuk menjaga kesehatan dengan memberikan pertolongan pertama dan edukasi kepada civitas akademika UMN mengenai pentingnya menjaga kesehatan dan peduli kepada sesama melalui kampanye - kampanye interaktif serta seminar mengenai kesehatan. Selain itu, UMN Medical Center juga belajar mengenai kekeluargaan melalui berbagai kegiatan yang menyenangkan.</p>

                    <a href="http://www.instagram.com/umnmedicalcenter"><i class="lni lni-instagram-original"></i> umnmedicalcenter</a>
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
        <div className="box-keg">
            {/*model*/}
            <Row>
                    <div className="col-md-4">
                    <img src="assets/lso/logokomcorbig.png" className="model-lso-komcor"></img>
                    </div>
                    <div className="col">
                    <p className="title-lso">KOMPAS CORNER</p>

                    {/*Penjelasan*/}
                    <div className="info-lso">
                    <p>Kompas Corner merupakan Lembaga Semi Otonom (LSO) yang telah berdiri selama 7 tahun sejak Mei 2013 dan berada di bawah direct supervision dari Harian Kompas. Kegiatan yang dijalankan oleh Kompas Corner antara lain, melakukan media visit, membuat podcast dan webseries, menyelenggarakan event di bawah naungan Harian Kompas serta menjadi media partner.</p>
                    <p>Kompas Corner juga memiliki ruangan yang dapat diakses setiap hari Senin - Kamis pukul 09.00 - 17.00 dan 09.00 - 15.00 di hari Jumat oleh seluruh mahasiswa Universitas Multimedia Nusantara dan dapat dijadikan wadah untuk berdiskusi, bermain, membaca buku, hingga mengakses Kompas Data.</p>

                    <a href="http://www.instagram.com/kompascorner"><i class="lni lni-instagram-original"></i> kompascorner</a>
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
        <div className="box-keg">
            {/*model*/}
            <Row>
                    <div className="col-md-4">
                    <img src="assets/lso/logoustorebig.png" className="model-lso-ustore"></img>
                    </div>
                    <div className="col">
                    <p className="title-lso">U-STORE</p>

                    {/*Penjelasan*/}
                    <div className="info-lso">
                    <p>U-Store merupakan koperasi mahasiswa berbadan hukum, beroperasi sejak tahun 2015 dan terletak di Gedung C lantai 1 Universitas Multimedia Nusantara. U-Store menyediakan berbagai kebutuhan untuk menunjang kegiatan perkuliahan dan gaya hidup sehari-hari.</p>
                    <p>U-Store menjual produk otentik yang berciri khas Universitas Multimedia Nusantara seperti kaos, hoodie, lanyard, pin, dll. U-Store juga menyediakan jasa vendor bagi organisasi ataupun mahasiswa yang membutuhkan. Jasa ini dapat digunakan untuk memproduksi barang-barang keperluan organisasi. Selain itu, U-Store juga menyediakan jasa penyewaan Handie Talkie (HT) bagi organisasi maupun mahasiswa. U-Store selalu membuka kepengurusan baru setiap tahunnya untuk menghadirkan berbagai inovasi di masa yang akan datang.</p>

                    <a href="http://www.instagram.com/kopmaustore"><i class="lni lni-instagram-original"></i> kopmaustore</a>
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


export default KegiatanMahasiswa;

if (document.getElementById('keg')) {
    ReactDOM.render(<KegiatanMahasiswa />, document.getElementById('keg'));
}
