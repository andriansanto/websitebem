import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../slidersukm/slideraboutus';
import '../../css/reactabout.css';



    {/* function bawah*/}

    

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
        <div className="timeline-container" id="timeline-1">

            <div className="timeline-header">
                <h2 className="timeline-header__title">Badan Eksekutif Mahasiswa</h2>
                <h3 className="timeline-header__subtitle">Universitas Multimedia Nusantara</h3>
            </div>{/*timeline header*/}  

                <div className="timeline">

                    <div className="timeline-item" data-text="GENERASI">
                        <div className="timeline__content"><img className="timeline__img" src="assets/aboutus/au10.png" />
                            <h2 className="timeline__content-title">Gen X</h2>
                            <p className="timeline__content-desc">He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed
                                woman, raised him and his sister.</p>
                        </div>
                    </div>

                    <div className="timeline-item" data-text="GENERASI">
                        <div className="timeline__content"><img className="timeline__img" src="assets/aboutus/au10.png" />
                            <h2 className="timeline__content-title">GEN IX</h2>
                            <p className="timeline__content-desc">First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa's
                                superior achievement.</p>
                        </div>
                    </div>

                    <div className="timeline-item" data-text="GENERASI">
                        <div className="timeline__content"><img className="timeline__img" src="http://www.volpeypir.com/upload/3732.jpg" />
                            <h2 className="timeline__content-title">GEN VIII</h2>
                            <p className="timeline__content-desc">In 1905, Mustafa Kemal graduated from the War Academy in Istanbul with the rank of Staff Captain. Posted in Damascus, he started with several colleagues, a clandestinesociety called "Homeland and Freedom" to fight against the Sultan'sdespotism.</p>
                        </div>
                    </div>

                </div>{/*timeline*/}  
        </div>{/*timeline container*/}  


        {/* </div>Containerawal */}

        </div>
        );
    }
}


export default AboutUs;

if (document.getElementById('AboutUs')) {
    ReactDOM.render(<AboutUs />, document.getElementById('AboutUs'));
}
