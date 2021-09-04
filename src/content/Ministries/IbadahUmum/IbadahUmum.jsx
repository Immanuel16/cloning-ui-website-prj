import React from 'react';
import '../style.scss';
import Header from './../../../components/Header/Header';
import FooterComponent from './../../../components/Footer/Footer';
import ParallaxComponent from './../../../components/Parallax/Parallax';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageLinkComponent from '../../../components/ImageLink/ImageLink';
import SwiperCore, { Autoplay } from 'swiper'
import { Col, Row } from 'react-bootstrap';

SwiperCore.use(Autoplay);


export default class IbadahUmumPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listContent: [
                {
                    ministryName: 'Ibadah Raya 1',
                    ministryTime: 'Pk. 07:00 - 09:00 WIB',
                    ministryLocation: 'Lt. 10 Grand Ballroom'
                },
                {
                    ministryName: 'Ibadah Raya 2',
                    ministryTime: 'Pk. 09:00 - 11:00 WIB',
                    ministryLocation: 'Lt. 10 Grand Ballroom'
                },
                {
                    ministryName: 'Ibadah Raya 3',
                    ministryTime: 'Pk. 11:30 - 13:30 WIB',
                    ministryLocation: 'Lt. 10 Grand Ballroom'
                },
                {
                    ministryName: 'Ibadah Raya 4',
                    ministryTime: 'Pk. 14:00 - 16:00 WIB',
                    ministryLocation: ''
                },
                {
                    ministryName: 'Ibadah Raya 5',
                    ministryTime: 'Pk. 16:30 - 19:00 WIB',
                    ministryLocation: 'Lt. 10 Grand Ballroom'
                },
            ]
        }
    }
    
    goBack = () => {
        this.props.history.goBack();
    }
    
    render(){
        return(
            <React.Fragment>
                <Header 
                    title="Ministries - Ibadah Umum"
                />
                
                <ParallaxComponent 
                    srcImg="https://home.gbiprj.org/img/gbiprj.org/header_img/default.jpg"
                    titleSection="Ibadah Umum"
                />
                
                <div className="bg-img-line-bottom">
                    <div id="container-card-ibadah">
                        <br />
                        <a className="btn btn-back" onClick={() => this.goBack()} >
                            <i className="fas fa-chevron-left" title="Kembali"></i>
                        </a>
                        <a className="btn btn-jadwal" href="/jadwal-ibadah">
                            <i className="fas fa-calendar-alt" title="Jadwal"></i>
                        </a>
                        <Row
                            style={{ maxWidth: '100%', marginTop:"20px" }}
                        >
                            {
                                this.state.listContent.map(content => {
                                    return(
                                        <Col
                                            md="6"
                                            lg="6"
                                        >
                                            <div id="container-card-ibadah-umum">
                                                <p className="title-ibadah">
                                                    <strong>{ content.ministryName }</strong>
                                                </p>
                                                
                                                <p className="isi-content">
                                                    <span><i className="far fa-clock"></i></span> { content.ministryTime }
                                                </p>
                                                
                                                <p className="isi-content">
                                                    <span><i className="fas fa-map-marker-alt"></i></span> { content.ministryLocation }
                                                </p>
                                            </div>
                                    </Col>
        
                                    )
                                })
                            }
                        </Row>
                                            
                    </div>
                </div>

                {/* area slide logo */}
                <div className="area-slide-logo">
                    {/* slider logo */}
                    <div className="container-fluid">
                        <Swiper align="center" effect="slide" loop="true" spaceBetween={30} slidesPerView={9} centeredSlides="true" autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/woi.jpg"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/cancer_ministry.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/menara_doa.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/rumah_doa.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/unify_dancer.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/moi.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/2pm.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/316.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/jc.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/gods_arrows.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/jesus_and_me.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/jg.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/kk.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageLinkComponent
                                    srcTarget="/"
                                    srcImage="https://www.gbiprj.org/img/icon/toddler.jpg"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    {/* end of slider logo */}
                </div>
                
                <FooterComponent />
                
                
            </React.Fragment>
        )
    }
    
    
}