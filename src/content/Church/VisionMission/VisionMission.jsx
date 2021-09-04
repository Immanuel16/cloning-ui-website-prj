import React from 'react'
import ParallaxComponent from './../../../components/Parallax/Parallax';
import Header from '../../../components/Header/Header';
import '../styles.scss';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageLinkComponent from '../../../components/ImageLink/ImageLink';
import SwiperCore, { Autoplay } from 'swiper'
import FooterComponent from '../../../components/Footer/Footer';
import { Row, Col } from 'react-bootstrap';

SwiperCore.use(Autoplay);

export default class VisionMissionPage extends React.Component{
    constructor(props){
        super(props);
    }
    
    goBack = () => {
        this.props.history.goBack();
    }
    
    render(){
        return(
            <React.Fragment>
                <Header 
                    title="Article - Vision Mission Culture Ck7"
                />

                <ParallaxComponent 
                    srcImg="https://home.gbiprj.org/img/gbiprj.org/header_img/default.jpg"
                    titleSection="Vision, Mission, Culture CK7"
                />
                
                <div className="bg-img-line-bottom">
                    <div className="container-content-history">
                        <button className="btn btn-back" onClick={() => this.goBack()} >
                            <i className="fas fa-chevron-left" title="Kembali"></i>
                        </button>
                        
                        <Row>
                            <Col
                                md="4"
                                lg="4"
                                sm={12}
                                xs="12"
                            >
                                <div className="container-content-history-subcontent">
                                    <p className="title-content">
                                        vision
                                    </p>
                                    <p className="isi-content">
                                        Menjadi Gereja yang berkarakter Kristus dan berdampak bagi sesama
                                    </p>
                                </div>
                            </Col>
                            
                            <Col
                                md="4"
                                lg="4"
                                sm={12}
                                xs="12"
                            >
                                <div className="container-content-history-subcontent">
                                    <p className="title-content">
                                        mission
                                    </p>
                                    <p className="isi-content">
                                        Membangun Karakter Kristus dengan melengkapi setiap tahapan kehidupan melalui pengembalaan, pengajaran, pelatihan dan teknologi
                                    </p>
                                </div>
                            </Col>
                            
                            <Col
                                md="4"
                                lg="4"
                                sm={12}
                                xs="12"
                            >
                                <div className="container-content-history-subcontent">
                                    <p className="title-content">
                                        culture
                                    </p>
                                    <p className="isi-content">
                                        Kasih, Iman, Integritas, Kreatif
                                    </p>
                                </div>
                            </Col>
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