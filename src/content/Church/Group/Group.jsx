import React from 'react'
import ParallaxComponent from './../../../components/Parallax/Parallax';
import Header from '../../../components/Header/Header';
import '../styles.scss';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageLinkComponent from '../../../components/ImageLink/ImageLink';
import SwiperCore, { Autoplay } from 'swiper'
import FooterComponent from '../../../components/Footer/Footer';
import { Col, Row } from 'react-bootstrap';
import { MapsComponent } from './../../../components/Maps/Maps';

SwiperCore.use(Autoplay);

export default class GroupPage extends React.Component{
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
                    title="Article - Ck7 Group"
                />

                <ParallaxComponent 
                    srcImg="https://home.gbiprj.org/img/gbiprj.org/header_img/default.jpg"
                    titleSection="CK7 Group"
                />
                
                <div className="bg-img-line-bottom">
                    <div className="container-content-ck7-group">
                        <button className="btn btn-back" onClick={() => this.goBack()} >
                            <i className="fas fa-chevron-left" title="Kembali"></i>
                        </button>
                        
                        <p className="church-name">
                            GBI PRJ (Praise Revival for Jesus)
                        </p>
                        
                        <Row>
                            <Col
                                md="6"
                                lg="6"
                            >
                                <p className="isi-content">
                                    Integrity Convention Centre (ICC) Lt. 9 - 10, Mall Mega Glodok Kemayoran, Jl. Angkasa Kav. B. 6, Kemayoran, Jakarta Pusat
                                </p>
                                
                                <p className="isi-content">
                                    <strong>
                                        Pk. 07.00, 09.00, 11.30 & 16.30 WIB
                                    </strong>
                                </p>
                                
                                <p className="isi-content">
                                    <ul type="circle">
                                        <li>Ibadah Raya</li>
                                        <li>Welcome Baby Day (Ibadah Khusus Ibu Hamil)</li>
                                        <li>2pm Service (Ibadah Dewasa Muda)</li>
                                        <li>3:16</li>
                                        <li>Junior Indonesian Service</li>
                                        <li>Joshua generation Kids Church Englis Service</li>
                                        <li>Ibadah Anak (d/h Sekolah Minggu)</li>
                                        <li>Little Blessing Toddler</li>
                                        <li>King Kids</li>
                                    </ul>
                                </p>
                            </Col>
                            <Col
                                md={6}
                                lg={6}
                            >
                                <MapsComponent 
                                    srcMaps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.825747131031!2d106.84698571390567!3d-6.154087162031813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f596229bc4c7%3A0xc48460cbec57eed0!2sGBI%20PRJ%20CK7!5e0!3m2!1sen!2sid!4v1629438915199!5m2!1sen!2sid"
                                    widthMaps="100%"
                                    heightMaps="100"
                                    minHeightMaps="400px"
                                    
                                />
                            </Col>
                        </Row>
                        
                        
                        {/* GBI INtercon */}
                        
                        <p className="church-name">
                            GBI Intercon
                        </p>
                        
                        <Row>
                            <Col
                                md="6"
                                lg="6"
                            >
                                <p className="isi-content">
                                    Grand Intercon, Komp. Intercon Plaza Blok 1 - 12, Jl. Meruya Ilir Raya, Kebon Jeruk, Jakarta Barat
                                </p>
                                
                                <p className="isi-content">
                                    <strong>
                                        Pk. 07.00, 09.00, 11.30, 16.30 & 18:30 WIB
                                    </strong>
                                </p>
                                
                                <p className="isi-content">
                                    <ul type="circle">
                                        <li>Ibadah Raya</li>
                                        <li>Junior Indonesian Service</li>
                                        <li>Ibadah Anak (d/h Sekolah Minggu)</li>
                                        <li>Little Blessing Toddler</li>
                                        <li>Switch Youth Service, setiap hari Sabtu Pk. 17.00 WIB</li>
                                    </ul>
                                </p>
                            </Col>
                            <Col
                                md={6}
                                lg={6}
                            >
                                <MapsComponent 
                                    srcMaps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4954300271356!2d106.74462691419335!3d-6.198177962445231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f76ab5b35127%3A0xab73bc51e6c838!2sGBI%20Intercon!5e0!3m2!1sen!2sid!4v1630661200977!5m2!1sen!2sid"
                                    widthMaps="100%"
                                    heightMaps="100"
                                    minHeightMaps="400px"
                                    
                                />
                            </Col>
                        </Row>
                        
                        
                        {/* GBI St. Moritz */}
                        
                        <p className="church-name">
                            GBI St. Moritz
                        </p>
                        
                        <Row>
                            <Col
                                md="6"
                                lg="6"
                            >
                                <p className="isi-content">
                                    The St. Moritz Px Pavillion Lt. 5, Puri Indah Raya Boulevard Blok U1, Puri Indah, CBD, Jakarta Barat
                                </p>
                                
                                <p className="isi-content">
                                    <strong>
                                        Pk. 08.00, 10.30 & 17.00 WIB
                                    </strong>
                                </p>
                                
                                <p className="isi-content">
                                    <ul type="circle">
                                        <li>Ibadah Raya</li>
                                        <li>Junior Indonesian Service</li>
                                        <li>Fire Youth Service</li>
                                        <li>Ibadah Anak (d/h Sekolah Minggu)</li>
                                        <li>Little Blessing Toddler</li>
                                    </ul>
                                </p>
                            </Col>
                            <Col
                                md={6}
                                lg={6}
                            >
                                <MapsComponent 
                                    srcMaps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5709978251093!2d106.73568881419327!3d-6.1881187623508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f752bca178bf%3A0x1780dc998b8d4f11!2sGBI%20St.Moritz%20(CK7)!5e0!3m2!1sen!2sid!4v1630661417356!5m2!1sen!2sid"
                                    widthMaps="100%"
                                    heightMaps="100"
                                    minHeightMaps="400px"
                                    
                                />
                            </Col>
                        </Row>
                        
                        
                        {/* GBI PRJ Mandarin Service */}
                        
                        <p className="church-name">
                            GBI PRJ Mandarin Service
                        </p>
                        
                        <Row>
                            <Col
                                md="6"
                                lg="6"
                            >
                                <p className="isi-content">
                                    The St. Moritz Px Pavillion Lt. 5, Puri Indah Raya Boulevard Blok U1, Puri Indah, CBD, Jakarta Barat
                                </p>
                                
                                <p className="isi-content">
                                    <strong>
                                        Pk. 09.00, 11.15 WIB
                                    </strong>
                                </p>
                            </Col>
                            <Col
                                md={6}
                                lg={6}
                            >
                                <MapsComponent 
                                    srcMaps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.825747131031!2d106.84698571390567!3d-6.154087162031813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f596229bc4c7%3A0xc48460cbec57eed0!2sGBI%20PRJ%20CK7!5e0!3m2!1sen!2sid!4v1629438915199!5m2!1sen!2sid"
                                    widthMaps="100%"
                                    heightMaps="100"
                                    minHeightMaps="400px"
                                    
                                />
                            </Col>
                        </Row>
                        
                        {/* GBI HCR */}
                        
                        <p className="church-name">
                            GBI HCR (Hawaii City Resort)
                        </p>
                        
                        <Row>
                            <Col
                                md="6"
                                lg="6"
                            >
                                <p className="isi-content">
                                    Rukan Hawaii Blok A No. 9 - 10, City Resort, Jl. Kamal Outering Road - Cengkareng, Jakarta Barat
                                </p>
                                
                                <p className="isi-content">
                                    <strong>
                                        Pk. 08.00, 11.00 & 16.30 WIB
                                    </strong>
                                </p>
                                
                                <p className="isi-content">
                                    <ul type="circle">
                                        <li>Ibadah Raya</li>
                                        <li>Junior Indonesian Service</li>
                                        <li>Ibadah Anak (d/h Sekolah Minggu)</li>
                                    </ul>
                                </p>
                            </Col>
                            <Col
                                md={6}
                                lg={6}
                            >
                                <MapsComponent 
                                    srcMaps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.980431887663!2d106.72882821419273!3d-6.133331261839371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d5135e023ff%3A0xc6e3f9faa43177ac!2sGBI%20Hawaii%20City%20Resort!5e0!3m2!1sen!2sid!4v1630661880894!5m2!1sen!2sid"
                                    widthMaps="100%"
                                    heightMaps="100"
                                    minHeightMaps="400px"
                                />
                            </Col>
                        </Row>
                        
                        {/* GBI PRJ Pluit */}
                        
                        <p className="church-name">
                            GBI PRJ Pluit
                        </p>
                        
                        <Row>
                            <Col
                                md="6"
                                lg="6"
                            >
                                <p className="isi-content">
                                    Pluit Village Lt. 3 Unit 63A-B, 97, 98, & 101 B, Jl. Pluit Indah Raya, Jakarta Utara - 14450
                                </p>
                                
                                <p className="isi-content">
                                    <strong>
                                        Pk. 09.00, 11.00 & 16.30 WIB
                                    </strong>
                                </p>
                                
                                <p className="isi-content">
                                    <ul type="circle">
                                        <li>Ibadah Raya</li>
                                        <li>Mandarin Service Pk. 09.00 WIB</li>
                                        <li>Junior Indonesian Service</li>
                                        <li>Ibadah Anak (d/h Sekolah Minggu)</li>
                                        <li>Little Blessing Toddler</li>
                                    </ul>
                                </p>
                            </Col>
                            <Col
                                md={6}
                                lg={6}
                            >
                                <MapsComponent 
                                    srcMaps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.104895440235!2d106.78877371419252!3d-6.116579561683974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d958157dfc1%3A0x1ff64b368355d879!2sGBI%20PRJ%20Pluit%20CK7!5e0!3m2!1sen!2sid!4v1630662085363!5m2!1sen!2sid"
                                    widthMaps="100%"
                                    heightMaps="100"
                                    minHeightMaps="400px"
                                    
                                />
                            </Col>
                        </Row>
                        
                        {/* GBI PRJ Mandarin Service */}
                        
                        <p className="church-name">
                            GBI Alam Sutera Mall
                        </p>
                        
                        <Row>
                            <Col
                                md="6"
                                lg="6"
                            >
                                <p className="isi-content">
                                    Mall @ Alam Sutera Lt. I Unit 01 - AT - 02A, Jl. Jalur Sutera Barat Kav. 16, Alam Sutera - Tangerang
                                </p>
                                
                                <p className="isi-content">
                                    <strong>
                                        Pk. 09.00, 11.15 , 14.00 & 16.30 WIB
                                    </strong>
                                </p>
                                
                                <p className="isi-content">
                                    Disertai dengan Ibadah Junior Indonesian Service, Sekolah Minggu, & Little Blessing Toddler
                                </p>
                            </Col>
                            <Col
                                md={6}
                                lg={6}
                            >
                                <MapsComponent 
                                    srcMaps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.314309503787!2d106.64978431419357!3d-6.222221862671641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9601a57d933%3A0x69c197fdeb3f6a1!2sGBI%20Alam%20Sutera%20Mall%20(CK7)!5e0!3m2!1sen!2sid!4v1630662201898!5m2!1sen!2sid"
                                    widthMaps="100%"
                                    heightMaps="100"
                                    minHeightMaps="400px"
                                    
                                />
                            </Col>
                        </Row>
                        
                    </div>
                </div>
                
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