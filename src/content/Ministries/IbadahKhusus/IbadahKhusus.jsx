import React from 'react';
import '../style.scss';
import Header from '../../../components/Header/Header';
import FooterComponent from '../../../components/Footer/Footer';
import ParallaxComponent from '../../../components/Parallax/Parallax';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageLinkComponent from '../../../components/ImageLink/ImageLink';
import SwiperCore, { Autoplay } from 'swiper'
import { Row, Col } from 'react-bootstrap';

SwiperCore.use(Autoplay);


export default class IbadahKhususPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listContent: [
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/ktm.jpg',
                    ministryName: 'Kebaktian Tengah Minggu (KTM)',
                    ministryDescription: 'Setiap Rabu, selain minggu ke 2 & terakhir Pk. 19.00',
                    buttonInfo: false
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/ppw.jpg',
                    ministryName: 'Pray Praise and Worship Night (PPW)',
                    ministryDescription: 'Setiap Rabu, selain minggu ke 2 & terakhir Pk. 19.00',
                    buttonInfo: false
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/woi.jpg',
                    ministryName: 'Women of Integrity (WOI)',
                    ministryDescription: 'Ibadah Wanita Setiap Kamis, minggu ke 4 Pk. 10.00',
                    buttonInfo: false
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/cancer_ministry.jpg',
                    ministryName: 'Cancer Ministry',
                    ministryDescription: 'Setiap hari Sabtu, minggu 2 & 4 Pk. 10.30',
                    buttonInfo: true
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/umas.jpg',
                    ministryName: 'UMAS',
                    ministryDescription: 'Setiap Sabtu, minggu ke 2 & 4 Pk. 10.30',
                    buttonInfo: false
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/rumah_doa.jpg',
                    ministryName: 'Rumah Doa',
                    ministryDescription: 'Setiap hari Jumat Pk. 10.00',
                    buttonInfo: false
                },
                {
                    srcImg: 'https://home.gbiprj.org/img/icon/moi.jpg',
                    ministryName: 'Man of Integrity',
                    ministryDescription: 'Setiap hari Jumat Pk. 10.00',
                    buttonInfo: false
                },
                
            ],
            listSwiper: [
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/woi.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/cancer_ministry.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/menara_doa.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/rumah_doa.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/unify_dancer.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/moi.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/2pm.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/316.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/jc.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/gods_arrows.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/jesus_and_me.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/jg.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/kk.jpg"
                },
                {
                    srcTarget: '',
                    srcImage: "https://www.gbiprj.org/img/icon/toddler.jpg"
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
                    title="Ministries - Ibadah Khusus"
                />
                
                <ParallaxComponent 
                    srcImg="https://home.gbiprj.org/img/gbiprj.org/header_img/default.jpg"
                    titleSection="Ibadah Khusus"
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
                            style={{ marginTop: '20px', maxWidth: "100%" }}
                        >
                            {
                                this.state.listContent.map(content => {
                                    return (
                                        <Col
                                            md="4"
                                            lg={3}
                                            sm={6}
                                            style={{ marginBottom: '20px' }}
                                        >
                                            <div id="container-card-ibadah-khusus">
                                                <div className="card h-100">
                                                    <img src={ content.srcImg } alt="" className="card-img-top" />
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
                    <div className="container-fluid">
                        <Swiper align="center" effect="slide" loop="true" spaceBetween={30} slidesPerView={9} centeredSlides="true" autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}>
                            {
                                this.state.listSwiper.map( slide => {
                                    return(
                                        <SwiperSlide>
                                            <ImageLinkComponent 
                                                srcTarget={slide.srcTarget}
                                                srcImage={slide.srcImage}
                                            />
                                        </SwiperSlide>
                                    )
                                } )
                            }
                        </Swiper>
                    </div>
                </div>
                
                <FooterComponent />
                
            </React.Fragment>
        )
    }
}