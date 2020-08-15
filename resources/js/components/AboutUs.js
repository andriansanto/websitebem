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

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         items: [],
    //     }
    //     this._isMounted = true;
    // }

    

    // async componentDidMount(){
    //     try{
    //         const res = await fetch('http://127.0.0.1:4545/api/generasi',{
    //             header:{
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //                     'Access-Control-Allow-Credentials':'true',
    //                     'Access-Control-Allow-Origin':'http://127.0.0.1:4545'
    //             }
    //         }).then((Response) => Response.json()).
    //         then((findresponse) => 
    //             {   
    //                 if(this._isMounted){
    //                 console.log(findresponse);
    //                 this.setState({
    //                     items: findresponse
    //                 })
    //             }
    //             })
    //     }catch(e){
    //         console.log("error");
    //     }

    // }

    //  componentWillUnmount() {
    //     this._isMounted = false;
    //   }


    render(){

    return(
            <div >

            {/*Foto about bem*/}  
            <div className="fotoatas">
                <img className="fotoabout" src="assets/aboutus/auBEM.png"></img>
            </div>


        {/*Foto per Gen*/}  
        {/* <div className="container-awal"> */}

        <div className="container-slider-aboutus" >
            {/*Slider*/}
            
        <ul id="autoWidth" className="cs-hidden">

                    {/*gen10*/}
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

                    

                    </li>

                    {/*gen10*/}
                    <li className="item-a">
                        
                        {/*Slider Box*/}
                    <div className="box-aboutus">
                        {/*model*/}

                        {/*Penjelasan*/}
                        {/* <div className="penjelasan"> */}
                        <img className="penjelasan-aboutus" src="assets/aboutus/au9.png"></img>
                        {/* </div> */}

                        {/*details*/}
                        
                        <div className="details"> 
                        {/*logo char*/}
                        {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                        {/*char details*/}
                        </div>{/*details*/}

                    </div>{/*Box*/}

                    

                    </li>

                    {/*gen10*/}
                    <li className="item-a">
                        
                        {/*Slider Box*/}
                    <div className="box-aboutus">
                        {/*model*/}

                        {/*Penjelasan*/}
                        {/* <div className="penjelasan"> */}
                        <img className="penjelasan-aboutus" src="assets/aboutus/au8.png"></img>
                        {/* </div> */}

                        {/*details*/}
                        
                        <div className="details"> 
                        {/*logo char*/}
                        {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                        {/*char details*/}
                        </div>{/*details*/}

                    </div>{/*Box*/}

                    

                    </li>

                    {/*gen10*/}
                    <li className="item-a">
                        
                        {/*Slider Box*/}
                    <div className="box-aboutus">
                        {/*model*/}

                        {/*Penjelasan*/}
                        {/* <div className="penjelasan"> */}
                        <img className="penjelasan-aboutus" src="assets/aboutus/au7.png"></img>
                        {/* </div> */}

                        {/*details*/}
                        
                        <div className="details"> 
                        {/*logo char*/}
                        {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                        {/*char details*/}
                        </div>{/*details*/}

                    </div>{/*Box*/}

                    

                    </li>

                    {/*gen10*/}
                    <li className="item-a">
                        
                        {/*Slider Box*/}
                    <div className="box-aboutus">
                        {/*model*/}

                        {/*Penjelasan*/}
                        {/* <div className="penjelasan"> */}
                        <img className="penjelasan-aboutus" src="assets/aboutus/au6.png"></img>
                        {/* </div> */}

                        {/*details*/}
                        
                        <div className="details"> 
                        {/*logo char*/}
                        {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                        {/*char details*/}
                        </div>{/*details*/}

                    </div>{/*Box*/}

                    

                    </li>

                    {/*gen10*/}
                    <li className="item-a">
                        
                        {/*Slider Box*/}
                    <div className="box-aboutus">
                        {/*model*/}

                        {/*Penjelasan*/}
                        {/* <div className="penjelasan"> */}
                        <img className="penjelasan-aboutus" src="assets/aboutus/au5.png"></img>
                        {/* </div> */}

                        {/*details*/}
                        
                        <div className="details"> 
                        {/*logo char*/}
                        {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                        {/*char details*/}
                        </div>{/*details*/}

                    </div>{/*Box*/}

                    

                    </li>

                    {/*gen10*/}
                    <li className="item-a">
                        
                        {/*Slider Box*/}
                    <div className="box-aboutus">
                        {/*model*/}

                        {/*Penjelasan*/}
                        {/* <div className="penjelasan"> */}
                        <img className="penjelasan-aboutus" src="assets/aboutus/au4.png"></img>
                        {/* </div> */}

                        {/*details*/}
                        
                        <div className="details"> 
                        {/*logo char*/}
                        {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                        {/*char details*/}
                        </div>{/*details*/}

                    </div>{/*Box*/}

                    

                    </li>

                    {/*gen10*/}
                    <li className="item-a">
                        
                        {/*Slider Box*/}
                    <div className="box-aboutus">
                        {/*model*/}

                        {/*Penjelasan*/}
                        {/* <div className="penjelasan"> */}
                        <img className="penjelasan-aboutus" src="assets/aboutus/au3.png"></img>
                        {/* </div> */}

                        {/*details*/}
                        
                        <div className="details"> 
                        {/*logo char*/}
                        {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                        {/*char details*/}
                        </div>{/*details*/}

                    </div>{/*Box*/}

                    

                    </li>

                    {/*gen10*/}
                    <li className="item-a">
                        
                        {/*Slider Box*/}
                    <div className="box-aboutus">
                        {/*model*/}

                        {/*Penjelasan*/}
                        {/* <div className="penjelasan"> */}
                        <img className="penjelasan-aboutus" src="assets/aboutus/au2.png"></img>
                        {/* </div> */}

                        {/*details*/}
                        
                        <div className="details"> 
                        {/*logo char*/}
                        {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                        {/*char details*/}
                        </div>{/*details*/}

                    </div>{/*Box*/}

                    

                    </li>

                    {/*gen10*/}
                    <li className="item-a">
                        
                        {/*Slider Box*/}
                    <div className="box-aboutus">
                        {/*model*/}

                        {/*Penjelasan*/}
                        {/* <div className="penjelasan"> */}
                        <img className="penjelasan-aboutus" src="assets/aboutus/au1.png"></img>
                        {/* </div> */}

                        {/*details*/}
                        
                        <div className="details"> 
                        {/*logo char*/}
                        {/*<img src="#" className="logo" width="100px" style="hieght: auto;"></img>*/}
                        {/*char details*/}
                        </div>{/*details*/}

                    </div>{/*Box*/}

                    

                    </li>

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
