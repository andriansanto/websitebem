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
            controls: false,
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
    constructor(props) {
        super(props);
        this.state = {
            itemor: [],
            itemsainsos: [],
            itemsenbud: [],
            tabIndex: 0,
            isLoaded: false,
            isLoading: true
        }
        this._isMounted = true;
    }


    async componentDidMount(){
        try{
            const res = await fetch('http://127.0.0.1:4545/api/ukm-olahraga',{
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
                        itemor: findresponse,
                        isLoading:false,
                        isLoaded:true
                    })
                }
                })
        }catch(e){
            // console.log("error");
        }

        try{
            const res = await fetch('http://127.0.0.1:4545/api/ukm-sainsos',{
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
                        itemsainsos: findresponse,
                        isLoading:false,
                        isLoaded:true
                    })
                }
                })
        }catch(e){
            // console.log("error");
        }

        try{
            const res = await fetch('http://127.0.0.1:4545/api/ukm-senbud',{
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
                        itemsenbud: findresponse,
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

                {this.state.itemsenbud.map((itemsenbuds,index)  => {
                return(
                    /*1*/
                    <li className="item-a" key={index}>
                        
                            {/*Slider Box*/}
                        <div className="box-senbud">
                            <p className="senbud">{itemsenbuds.name}</p>
                            {/*model*/}
                            <img src={itemsenbuds.photo} className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>{itemsenbuds.info}</p>

                            <a href={itemsenbuds.link}>@{itemsenbuds.ig}</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">{itemsenbuds.hari}<br></br>{itemsenbuds.jam}</p>
                            {/*char details*/}
                            <p><i>{itemsenbuds.tagline}</i></p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>
                )
            })}
                    
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

                {this.state.itemsainsos.map((itemsainsoss,index)  => {
                return(
                    /*1*/
                    <li class="item-a" key={index}>
                        
                            {/*Slider Box*/}
                        <div className="boxsos">
                            <p className="sensos">{itemsainsoss.name}</p>
                            {/*model*/}
                            <img src={itemsainsoss.photo} className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>{itemsainsoss.info}</p>

                            <a href={itemsainsoss.link}>@{itemsainsoss.ig}</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">{itemsainsoss.hari}<br></br>{itemsainsoss.jam}</p>
                            {/*char details*/}
                            <p><i>{itemsainsoss.tagline}</i></p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>/*umnpc*/

                    )
                })}

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

                {this.state.itemor.map((itemors,index)  => {
                return(
                    /*1*/
                    <li class="item-a" key={index}>
                        
                            {/*Slider Box*/}
                        <div className="boxor">
                            <p className="olr">{itemors.name}</p>
                            {/*model*/}
                            <img src={itemors.photo} className="model"></img>

                            {/*Penjelasan*/}
                            <div className="penjelasan">
                            <p>{itemors.info}</p>

                            <a href={itemors.link}>@{itemors.ig}</a>
                            </div>

                            {/*details*/}
                            
                            <div className="details"> 
                            {/*logo char*/}
                            <p className="logo">{itemors.hari}<br></br>{itemors.jam}</p>
                            {/*char details*/}
                            <p><i>{itemors.tagline}</i></p>
                            </div>{/*details*/}

                        </div>{/*Box*/}

                    </li>/*Basket*/
                
                )
            })}

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
        <br></br>
        <p className="textatasukm">
        Universitas Multimedia Nusantara memiliki berbagai Unit Kegiatan Mahasiswa<br></br>
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