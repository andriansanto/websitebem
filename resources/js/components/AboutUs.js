import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../slidersukm/slideraboutus';
import '../../css/reactabout.css';



    {/* function bawah*/}
    function timeline(){
    $(document).ready(function() {
    (function($) {
        $.fn.timeline = function() {
          var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
          };
          selectors.item.eq(0).addClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .first()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          var itemLength = selectors.item.length;
          $(window).scroll(function() {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function(i) {
              min = $(this).offset().top;
              max = $(this).height() + $(this).offset().top;
              var that = $(this);
              if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                selectors.item.removeClass(selectors.activeClass);
                selectors.id.css(
                  "background-image",
                  "url(" +
                    selectors.item
                      .last()
                      .find(selectors.img)
                      .attr("src") +
                    ")"
                );
                selectors.item.last().addClass(selectors.activeClass);
              } else if (pos <= max - 40 && pos >= min) {
                selectors.id.css(
                  "background-image",
                  "url(" +
                    $(this)
                      .find(selectors.img)
                      .attr("src") +
                    ")"
                );
                selectors.item.removeClass(selectors.activeClass);
                $(this).addClass(selectors.activeClass);
              }
            });
          });
        };
      })(jQuery);
      
      
      $("#timeline-1").timeline();
    });
}

class AboutUs extends Component{

    constructor(props){
        super(props);
        this.state = {
            itemaboutus: [],
        }
        this._isMounted = true;
    }

    

    async componentDidMount(){
        try{
            const res = await fetch('http://127.0.0.1:8000/api/gen',{
                headers:{
                    'APP_KEY' : '$2y$10$pcvhQneM.7eHbKkH5CdPP.fwhn/BV4Jp6zclZB75j68eocwH7lrr.',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Credentials':'true',
                        // 'Access-Control-Allow-Origin':'http://127.0.0.1:4545'
                }
            }).then((Response) => Response.json()).
            then((findresponse) => 
                {   
                    if(this._isMounted){
                    // console.log(findresponse);
                    this.setState({
                        itemaboutus: findresponse,
                    })
                    // console.log(itemaboutus);
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
                {this.state.itemaboutus.map((itemgen,index)  => {
                    return(
                    <div className="timeline-item" data-text="GENERASI" onChange={timeline()}>
                        <div className="timeline__content"><img className="timeline__img" src={itemgen.photo} />
                            <h2 className="timeline__content-title">Gen X</h2>
                            <p className="timeline__content-desc">He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed
                                woman, raised him and his sister.</p>
                        </div>
                    </div>
                    )
                })}

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
