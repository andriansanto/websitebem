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
    constructor(props) {
        super(props);
        this.state = { 
            tabIndex: 0 , 
            radio: "kegiatan", 
            backgroundcolor: "", 
            tabasset: "assets/kegiatan/kegkanan.png",
            itemkeg: [],
            itemlso:[],
            isLoaded: false,
            isLoading: true
        
        };
        this._isMounted = true;
        this.onCheckRadio = this.onCheckRadio.bind(this)
    }

    async componentDidMount(){
        try{
            const res = await fetch('http://127.0.0.1:4545/api/kegiatan',{
                header:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                        'Access-Control-Allow-Credentials':'true',
                        'Access-Control-Allow-Origin':'http://127.0.0.1:4545'
                }
            }).then((Response) => Response.json()).
            then((findresponse) => 
                {   
                    if(this._isMounted){
                    // console.log(findresponse);
                    this.setState({
                        itemkeg: findresponse,
                        isLoading:false,
                        isLoaded:true
                    })
                }
                })
        }catch(e){
            // console.log("error");
        }

        try{
            const res = await fetch('http://127.0.0.1:4545/api/lso',{
                header:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                        'Access-Control-Allow-Credentials':'true',
                        'Access-Control-Allow-Origin':'http://127.0.0.1:4545'
                }
            }).then((Response) => Response.json()).
            then((findresponse) => 
                {   
                    if(this._isMounted){
                    // console.log(findresponse);
                    this.setState({
                        itemlso: findresponse,
                        isLoading:false,
                        isLoaded:true
                    })
                }
                })
        }catch(e){
            // console.log("error");
        }

    }

     componentWillUnmount() {
        this._isMounted = false;
      }

    onCheckRadio(e){
        console.log(e.target.value);

        if(e.target.value == "kegiatan"){
            this.setState({
                [e.target.name]: e.target.value,
                backgroundcolor: 'linear-gradient(#ffb359,#ffffff)',
                tabasset: 'assets/kegiatan/kegkanan.png'
            })
        }
        else if(e.target.value == "lso"){
            this.setState({
                [e.target.name]: e.target.value,
                backgroundcolor: 'linear-gradient(#ade2b2,#ffffff)',
                tabasset: 'assets/kegiatan/lsokanan.png'
            })
        }
    }


    render(){
        const { backgroundcolor, tabasset } = this.state
        const displayTabs = (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })} onClick={slider()}>
            <TabList>
                <Tab className="text-tab-pane" style={{backgroundImage: backgroundcolor}}><img className="asset-kanan" src={tabasset}></img><input type="radio" name="radio" id="keg" value="kegiatan" checked={this.state.radio === "kegiatan"} onChange={this.onCheckRadio}></input>Kegiatan<br></br>Mahasiswa</Tab>
                <Tab className="text-tab-pane" style={{backgroundImage: backgroundcolor}}><input type="radio" name="radio" id="lso" value="lso" checked={this.state.radio === "lso"} onChange={this.onCheckRadio}></input>Lembaga<br></br>Semi Otonom</Tab>
            </TabList>

            {/*TAB PAN KEGIATAN*/}

            <TabPanel>
            <img className="keg-kiri" src="assets/kegiatan/kegkiri.png"></img>
            <div className="container-awal">
        <div className="container-slider-keg">
            {/*Slider*/}
            
        <ul id="autoWidth" className="cs-hidden">

        {this.state.itemkeg.map((itemkegs,index)  => {
            switch (itemkegs.name) {
                case "MR. & MS. UMN" : 
                return (
                    <li className="item-a" key={index}>
                    {/*Slider Box*/}
                <div className="box-keg">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src={itemkegs.photo} className="model-mrms"></img>
                    </div>
                    <div className="col-edit">
                    <p className="title">{itemkegs.name}</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>{itemkegs.info}</p>
                    <a href={itemkegs.link}><i className="lni lni-instagram-original"></i> {itemkegs.ig}</a>
                    </div>
                    </div>
                    </Row>

                    {/*details*/}
                    
                    <div className="details"> 
                    {/*logo char*/}
                    {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                    {/*char details*/}
                    </div>{/*details*/}

                </div>{/*Box*/}

            </li>/*U-fest*/
                )

            default :
            return(
            /*1*/
            <li className="item-a" key={index}>
                    {/*Slider Box*/}
                <div className="box-keg">
                    {/*model*/}
                    <Row>
                    <div className="col-md-5">
                    <img src={itemkegs.photo} className="model-keg"></img>
                    </div>
                    <div className="col-edit">
                    <p className="title">{itemkegs.name}</p>

                    {/*Penjelasan*/}
                    <div className="info">
                    <p>{itemkegs.info}</p>
                    <a href={itemkegs.link}><i className="lni lni-instagram-original"></i> {itemkegs.ig}</a>
                    </div>
                    </div>
                    </Row>

                    {/*details*/}
                    
                    <div className="details"> 
                    {/*logo char*/}
                    {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                    {/*char details*/}
                    </div>{/*details*/}

                </div>{/*Box*/}

            </li>/*U-fest*/

            )
            }

        })}

            </ul>

        </div>{/*container slider*/}

    </div>{/*Containerawal*/}
    </TabPanel>

    {/*TAB PAN LSO*/}

<TabPanel>
<img className="lso-kiri" src="assets/kegiatan/lsokiri.png"></img>
<div className="container-awal">

<div className="container-slider-lso">
    {/*Slider*/}
    
<ul id="autoWidth" className="cs-hidden">

    {this.state.itemlso.map((itemlsos,index)  => {

    switch(itemlsos.name){
        case "DUTA ANTI NARKOBA" :
            return(

                <li className="item-a" key={index}>
        
            {/*Slider Box*/}
        <div className="box-keg">
            {/*model*/}
            <Row>
                    <div className="col-md-5">
                    <img src={itemlsos.photo} className="model-lso-dunar"></img>
                    </div>
                    <div className="col-edit-lso">
                    <p className="title-lso">{itemlsos.name}</p>

                    {/*Penjelasan*/}
                    <div className="info-lso">
                    <p>{itemlsos.info1}</p>
                    <p>{itemlsos.info2}</p>
                    <p>{itemlsos.info3}</p>

                    <a href={itemlsos.link}><i class="lni lni-instagram-original"></i> {itemlsos.ig}</a>
                    </div>
                    </div>
                    </Row>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>
            
            )
    
            case "UMN MEDIC" :
            return(

                <li className="item-a" key={index}>
        
            {/*Slider Box*/}
        <div className="box-keg">
            {/*model*/}
            <Row>
                    <div className="col-md-5">
                    <img src={itemlsos.photo} className="model-lso-medic"></img>
                    </div>
                    <div className="col-edit-lso">
                    <p className="title-lso">{itemlsos.name}</p>

                    {/*Penjelasan*/}
                    <div className="info-lso">
                    <p>{itemlsos.info1}</p>
                    <p>{itemlsos.info2}</p>
                    <p>{itemlsos.info3}</p>

                    <a href={itemlsos.link}><i class="lni lni-instagram-original"></i> {itemlsos.ig}</a>
                    </div>
                    </div>
                    </Row>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>
            
    )

    case "KOMPAS CORNER" :
            return(

                <li className="item-a" key={index}>
        
            {/*Slider Box*/}
        <div className="box-keg">
            {/*model*/}
            <Row>
                    <div className="col-md-5">
                    <img src={itemlsos.photo} className="model-lso-komcor"></img>
                    </div>
                    <div className="col-edit-lso">
                    <p className="title-lso">{itemlsos.name}</p>

                    {/*Penjelasan*/}
                    <div className="info-lso">
                    <p>{itemlsos.info1}</p>
                    <p>{itemlsos.info2}</p>
                    <p>{itemlsos.info3}</p>

                    <a href={itemlsos.link}><i class="lni lni-instagram-original"></i> {itemlsos.ig}</a>
                    </div>
                    </div>
                    </Row>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>
            
    )

    case "U-STORE" :
            return(

                <li className="item-a" key={index}>
        
            {/*Slider Box*/}
        <div className="box-keg">
            {/*model*/}
            <Row>
                    <div className="col-md-5">
                    <img src={itemlsos.photo} className="model-lso-ustore"></img>
                    </div>
                    <div className="col-edit-lso">
                    <p className="title-lso">{itemlsos.name}</p>

                    {/*Penjelasan*/}
                    <div className="info-lso">
                    <p>{itemlsos.info1}</p>
                    <p>{itemlsos.info2}</p>
                    <p>{itemlsos.info3}</p>

                    <a href={itemlsos.link}><i class="lni lni-instagram-original"></i> {itemlsos.ig}</a>
                    </div>
                    </div>
                    </Row>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>
            
    )

    default :
    return(

    <li className="item-a" key={index}>
        
            {/*Slider Box*/}
        <div className="box-keg">
            {/*model*/}
            <Row>
                    <div className="col-md-5">
                    <img src={itemlsos.photo} className="model-lso-box"></img>
                    </div>
                    <div className="col-edit-lso">
                    <p className="title-lso">{itemlsos.name}</p>

                    {/*Penjelasan*/}
                    <div className="info-lso">
                    <p>{itemlsos.info1}</p>
                    <p>{itemlsos.info2}</p>
                    <p>{itemlsos.info3}</p>

                    <a href={itemlsos.link}><i class="lni lni-instagram-original"></i> {itemlsos.ig}</a>
                    </div>
                    </div>
                    </Row>

            {/*details*/}
            
            <div className="details"> 
            {/*logo char*/}
            {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
            {/*char details*/}
            </div>{/*details*/}

        </div>{/*Box*/}

    </li>
    )
    }
})}

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
