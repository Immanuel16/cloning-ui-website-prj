import React from 'react';
import '../style.scss';
import Header from '../../../components/Header/Header';
import FooterComponent from '../../../components/Footer/Footer';
import ParallaxComponent from '../../../components/Parallax/Parallax';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageLinkComponent from '../../../components/ImageLink/ImageLink';
import SwiperCore, { Autoplay } from 'swiper'
import { Row, Col, Card } from 'react-bootstrap';

SwiperCore.use(Autoplay);

export default class IbadahBPAPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listContent: [
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/2pm.jpg',
                    ministryName: 'Ibadah Dewasa Muda',
                    ministryDescription: 'Bahasa Indonesia Pk. 14.00 23 - 35 Years Old',
                    buttonInfo: false
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/316.jpg',
                    ministryName: 'Youth Community',
                    ministryDescription: 'Bahasa Indonesia Pk. 14.00 23 - 35 Years Old',
                    buttonInfo: true
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/2pm.jpg',
                    ministryName: 'Junior Church',
                    ministryDescription: 'English Service Pk. 07.00, 09.00 & 11.30, 7 - 11 Years Old',
                    buttonInfo: false
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/jg.jpg',
                    ministryName: 'Joshua Generation',
                    ministryDescription: 'English Service Pk. 07.00, 09.00 & 11.30, 7 - 11 Years Old',
                    buttonInfo: true
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/jesus_and_me.jpg',
                    ministryName: 'Jesus and Me',
                    ministryDescription: 'English Service Pk. 09.00 & 11.30, 4 - 6 Years Old',
                    buttonInfo: false
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/toddler.jpg',
                    ministryName: 'Little Blessings',
                    ministryDescription: 'Bahasa Indonesia Pk. 07.00, 09.00 & 11.30 0 - 3 Years Old',
                    buttonInfo: true
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/kk.jpg',
                    ministryName: 'Ibadah Anak Berkebutuhan Khusus',
                    ministryDescription: 'Bahasa Indonesia Pk. 09.00 & 11.30 Special Needs Class',
                    buttonInfo: true
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/gods_arrows.jpg',
                    ministryName: "God's Arrow",
                    ministryDescription: 'English Pk. 07.00, 09.00, 11:30 & 16:30',
                    buttonInfo: false
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
                    title="Ministries - Ibadah Bpa"
                />
                
                <ParallaxComponent 
                    srcImg="https://home.gbiprj.org/img/gbiprj.org/header_img/default.jpg"
                    titleSection="Ibadah BPA"
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
                            style={{ maxWidth: '100%', marginTop: '20px' }}
                        >
                            {
                                this.state.listContent.map(content => {
                                    return(
                                        <Col
                                            md="4"
                                            lg="3"
                                            sm="6"
                                            style={{ marginBottom: "20px" }}
                                        >
                                            <div id="container-card-ibadah-bpa" >
                                                <div className="card h-100">
                                                    <img src={content.srcImg} alt="" className="card-img-top" />
                                                    <div className="card-body">
                                                        <p className="title-ibadah">
                                                            <strong>{ content.ministryName }</strong>
                                                        </p>
                                                        <p className="description-ibadah">
                                                            { content.ministryDescription }
                                                        </p>
                                                        
                                                        {
                                                            content.buttonInfo && <a href="" className="btn btn-more-info">Info Selengkapnya</a>
                                                        }
                                                    </div>
                                                </div>
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