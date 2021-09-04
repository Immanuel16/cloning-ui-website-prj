import React, { useState } from 'react';
import './Layout.scss'
import Header from '../../components/Header/Header';
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow,Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css'
import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import FancyBoxComponent from './../../components/FancyBox/FancyBox';
import { SRLWrapper } from 'simple-react-lightbox';
import CardComponent from '../../components/Card/Card-Keep-Updated/Card';
import ImageLinkComponent from '../../components/ImageLink/ImageLink';
import CardSermon from './../../components/Card/Card-Sermon/Card';
import { CardBody } from 'reactstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import CardMoreInfo from '../../components/Card/Card-More-Info/Card';
import Aos from 'aos';
import "aos/dist/aos.css";
import CardContactUs from './../../components/Card/Card-Contact-Us/Card';
import FooterComponent from '../../components/Footer/Footer';


SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);


const listImage = [
    "https://www.gbiprj.org/img/ibadah-online/ir-2021-08-15.jpg",
    "https://www.gbiprj.org/img/ibadah-online/ir-2021-08-15.jpg",
    "https://www.gbiprj.org/img/ibadah-online/ir-2021-08-15.jpg",
]

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        document.title = props.title;
        this.state = {
            photoIndex: 0,
            isOpen: false,
            labelListIbadahRaya: [
                'Ibadah Raya 1',
                'Ibadah Raya 2',
                'Ibadah Raya 3',
                'Ibadah Raya 4',
                'Ibadah Raya 5'
            ],
            listSrcAssetCardInfo: [
                'https://www.gbiprj.org/img/bulletin-cool-18.jpg',
                'https://www.gbiprj.org/img/info/konseling-caring.jpg',
                'https://www.youtube.com/embed/gltVtwZljgM?rel=0',
                'https://www.youtube.com/embed/6HJlV7JwoUg?rel=0'
            ],
            listTitleCardInfo: [
                'buletin cool 18',
                'pelayanan konseling & caring',
                'cancer ministry - surprise squad part. 2',
                'Pdt. DR. Ir. NIKO BICARA TENTANG PENTAKOSTA KE 3'
            ],
            history: '',
            card: false,
        };
    }
    
    componentDidMount() {
        Aos.init();
        // window.addEventListener("scroll", this.handleZindexTop);
    }
    
    // componentWillUnmount(){
    //     window.removeEventListener("scroll");
    // }
    
    
    

    render() {
        const labelListDoaFajar = ['Doa Fajar'];
        return (
            <div className="default-wrapper">
                <Header title="GBI PRJ (CK7)" />
                {/* Content */}
                {/* --------- Slide Show --------- */}
                <Swiper style={{ marginBottom: '75px' }} align="center" pagination={{ clickable: true, dynamicBullets: true }} effect="coverflow" loop="true" coverflowEffect={{
                    rotate: 20,
                    stretch: 450,
                    depth: 20,
                    modifier: 1,
                    slideShadows: true,
                }} spaceBetween={0} centeredSlides="true" autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}>
                    <SwiperSlide>
                        <img src={`https://home.gbiprj.org/img/gbiprj.org/flashupdate/7112679785131558-l.jpg`} style={{ width: '900px', backgroundSize: 'contain' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={`https://home.gbiprj.org/img/gbiprj.org/flashupdate/8781244258095935-l.jpg`} style={{ width: '900px' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={`https://home.gbiprj.org/img/gbiprj.org/flashupdate/288404562123907-l.jpg`} style={{ width: '900px' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={`https://home.gbiprj.org/img/gbiprj.org/flashupdate/2595454149081228-l.jpg`} style={{ width: '900px' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={`https://home.gbiprj.org/img/gbiprj.org/flashupdate/882652282215110-l.jpg`} style={{ width: '900px' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={`https://home.gbiprj.org/img/gbiprj.org/flashupdate/6373630078094949-l.jpg`} style={{ width: '900px' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={`https://home.gbiprj.org/img/gbiprj.org/flashupdate/6556086115073101-l.jpg`} style={{ width: '900px' }} />
                    </SwiperSlide>
                </Swiper>
                <Container>
                    {/* Setiap hari minggu */}
                    {/* <div className="flex-center-cwh container-title-section">
                        <h2 className="title-section"><span className="firstText">Ibadah</span> Online</h2>
                        <p className="subtitle-section">Ibadah Online <strong><u>15 Agustus 2021</u></strong> dapat disaksikan di <span style={{ color: "#ae1e7e" }}>YouTube Channel GBI PRJ CK7</span></p>
                        <span className="lines">
                        </span>
                    </div> */}
                    {/* <br /> */}
                    {/* <Row>
                        <Col md="4" sm="6" lg={4}>
                            <Card>
                                <FancyBoxComponent source="https://www.gbiprj.org/img/ibadah-online/ir-2021-08-15.jpg" />
                            </Card>
                        </Col>\
                    </Row> */}

                    <div className="flex-center-cwh container-title-section">
                        <p className="title-section">Keep <span className="second-text">Updated</span> </p>
                        <p className="subtitle-section">Update Renungan Harian, Warta, News, Pesan Gembala, Jadwal Ibadah, dll</p>
                        <span className="lines">
                        </span>
                    </div>

                    <Row style={{ marginTop: '50px' }} data-aos="fade-up" data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out-cubic">
                        <Col md={4} lg={4} sm={6}>
                            <CardComponent icons_name="fas fa-bible" text_title="Renungan Harian" text_subtitle="16 Agustus 2021" icons_name_specific="bible" />
                        </Col>
                        <Col md={4} lg={4} sm={6}>
                            <CardComponent icons_name="far fa-newspaper" text_title="Weekly Updates" text_subtitle="Warta Sepekan & News" icons_name_specific="warta" />
                        </Col>
                        <Col md={4} lg={4} sm={6}>
                            <CardComponent icons_name="far fa-play-circle" text_title="Live Streaming" text_subtitle="Video & Audio" icons_name_specific="bible" />
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '50px', marginBottom: '50px' }} data-aos="fade-up" data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out-cubic">
                        <Col md={4} lg={4} sm={6}>
                            <CardComponent icons_name="fas fa-church" text_title="Pesan Gembala" text_subtitle="Maret 2020" icons_name_specific="church" />
                        </Col>
                        <Col md={4} lg={4} sm={6}>
                            <CardComponent icons_name="far fa-calendar-alt" text_title="Jadwal Ibadah" text_subtitle="Agustus 2021 - September 2021" icons_name_specific="calendar" />
                        </Col>
                        <Col md={4} lg={4} sm={6}>
                            <CardComponent icons_name="fas fa-users" text_title="KKJ" text_subtitle="Kartu Keluarga Jemaat" icons_name_specific="kkj" />
                        </Col>
                    </Row>
                </Container>
                <div id="tema-area">
                    <div className="tema">
                        <div>
                            <img src="https://www.gbiprj.org/img/tema-2021.png" alt="" />
                        </div>
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
                <Container style={{}} data-aos="fade-up" data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out-cubic">
                    <div className="flex-center-cwh container-title-section">
                        <p className="title-section">Sermon <span className="second-text">Notes</span> </p>
                        <p className="subtitle-section">Ringkasan Khotbah Ibadah Raya, 2PM, Kebaktian Tengah Minggu (KTM), Women Of Integrity (WOI), dll</p>
                        <span className="lines">
                        </span>
                    </div>
                    <CardSermon
                        srcImgPastor="https://home.gbiprj.org/img/photos/pembicara/no_foto.jpg"
                        titleCardName="Belajar Untuk Bersabar"
                        labelIbadah={labelListDoaFajar}
                        md={12}
                        lg={12}
                        sm={12}
                        pastorName="Bp. Sudy Tandi"
                        timeSermon="23 Agustus 2021, Pk. 04.40 WIB"
                        ringkasanKhotbah="Psikolog menyatakan, kebajikan paling berguna ialah kesabaran, sebab kita memerlukannya setiap kali, di manapun kita berada. Ketidaksabaran sering menjerumuskan kita dalam problem, dan jika terus-menerus membiarkannya, maka akan terjadi badai kehidupan di banyak area. Sabar ialah salah satu ..."
                        readMore="Lihat Selengkapnya"
                        data-aos="fade-up" data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out-cubic"
                    />
                    <Row style={{ marginBottom: '50px' }}>
                        <Col
                            md={6}
                            lg={6}
                            sm={6}
                        >
                            <CardSermon
                                srcImgPastor="https://home.gbiprj.org/img/photos/pembicara/4995317869151410.jpg"
                                titleCardName="Our Blessed Hope"
                                labelIbadah={this.state.labelListIbadahRaya}
                                pastorName="Pdt. Dr. Timotius Arifin Tedjasukmana"
                                timeSermon="22 Agustus 2021, Pk. 07:00,09:00,11:30,14:00,16:30 WIB"
                                data-aos="fade-up" data-aos-delay="50"
                                data-aos-duration="2000"
                                data-aos-easing="ease-in-out-cubic"
                            />
                        </Col>
                        <Col
                            md={6}
                            lg={6}
                            sm={6}
                        >
                            <CardSermon
                                srcImgPastor="https://home.gbiprj.org/img/photos/pembicara/7549947490.jpg"
                                titleCardName="Doa Fajar Sabtu 14 Agustus 2021"
                                labelIbadah={labelListDoaFajar}
                                pastorName="Pdm. Grace Elizabeth Suhadi"
                                timeSermon="20 Agustus 2021, Pk. 04.40 WIB"
                                data-aos="fade-up" data-aos-delay="50"
                                data-aos-duration="2000"
                                data-aos-easing="ease-in-out-cubic"
                            />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '50px', }}>
                        <Col
                            md={6}
                            lg={6}
                            sm={6}
                        >
                            <CardSermon
                                srcImgPastor="https://home.gbiprj.org/img/photos/pembicara/9541834371105803.jpg"
                                titleCardName="On Time"
                                labelIbadah={labelListDoaFajar}
                                pastorName="Pdp. Rita Arifin"
                                timeSermon="19 Agustus 2021, Pk. 04:40 WIB"
                                data-aos="fade-up" data-aos-delay="50"
                                data-aos-duration="2000"
                                data-aos-easing="ease-in-out-cubic"
                            />
                        </Col>
                        <Col
                            md={6}
                            lg={6}
                            sm={6}
                        >
                            <CardSermon
                                srcImgPastor="https://home.gbiprj.org/img/photos/pembicara/1679278742111141.jpg"
                                titleCardName="Murid Kristus Yang Berani"
                                labelIbadah={labelListDoaFajar}
                                pastorName="Pdt. Drs. Markus Simanjuntak, M.Th."
                                timeSermon="18 Agustus 2021, Pk. 04.40 WIB"
                                data-aos="fade-up" data-aos-delay="50"
                                data-aos-duration="2000"
                                data-aos-easing="ease-in-out-cubic"
                            />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '50px' }} data-aos="fade-up" data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out-cubic">
                        <Col md={12} lg={12}>
                            <a href="" className="btn btn-rounded float-right">
                                lihat semua ringkasan
                            </a>
                        </Col>
                    </Row>
                </Container>
                <div id="area-subscribe-ringkasan">
                    <div className="overlay">
                        <div className="container text-right-custom">
                            <img src="https://www.gbiprj.org/img/bible.png" alt="" />
                            <div className="container-text-button">
                                <span className="simple-word">
                                    Bagi Bapak / Ibu yang membutuhkan Ringkasan Khotbah Ibadah Raya I s/d V, 2PM Service, Kebaktian Tengah Minggu, Women Of Integrity maupun Doa Fajar via Whatsapp atau Email
                                </span>
                                <a href="https://api.whatsapp.com/send?phone=6287723005577&text=Shalom%2C%20Saya%20membutuhkan%20ringkasan%20khotbah%20GBI%20-%20PRJ.%20Terima%20kasih" className="btn btn-custom link-whatsapp">
                                    <i className="fab fa-whatsapp"></i> Whatsapp
                                </a>
                                <a href="mailto:multimedia.gbiprj@gmail.com?subject=Request%20Ringkasan%20Khotbah&body=Shalom%2C%20Saya%20membutuhkan%20ringkasan%20khotbah%20GBI%20-%20PRJ.%20Terima%20kasih" className="btn btn-custom link-email">
                                    <i className="far fa-envelope"></i> Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Container>
                    <div className="flex-center-cwh container-title-section">
                        <p className="title-section">More <span className="second-text">Info</span> </p>
                        <p className="subtitle-section">Info lainnya, Majalah Integrity & Majalah COOL</p>
                        <span className="lines">
                        </span>
                    </div>

                    <Row>
                        <Col
                            md={6}
                            lg="4"
                            sm={12}
                        >
                            <CardMoreInfo
                                titleCard={this.state.listTitleCardInfo[0]}
                                srcImg={this.state.listSrcAssetCardInfo[0]}
                            />
                        </Col>
                        <Col
                            md={6}
                            lg="4"
                            sm={12}
                        >
                            <CardMoreInfo
                                titleCard={this.state.listTitleCardInfo[1]}
                                srcImg={this.state.listSrcAssetCardInfo[1]}
                            />
                        </Col>
                        <Col
                            md={6}
                            lg="4"
                            sm={12}
                        >
                            <CardMoreInfo
                                titleCard={this.state.listTitleCardInfo[2]}
                                srcVideo={this.state.listSrcAssetCardInfo[2]}
                            />
                            <CardMoreInfo
                                titleCard={this.state.listTitleCardInfo[3]}
                                srcVideo={this.state.listSrcAssetCardInfo[3]}
                            />
                        </Col>
                    </Row>
                </Container>
                {/* E-money area */}
                
                <Row style={{ background: "#151414", minHeight: "415px",display:"flex", justifyContent:"center", alignItems: "center", maxWidth: "100%" }}>
                    <Col
                        md={6}
                        lg={6}
                        sm={12}
                    >
                        <div className="flex-center-cwh">
                            <div style={{ paddingLeft: "20px" }}>
                                <h2 style={{ textTransform: 'uppercase', fontSize: "2em", color:"#fff", textAlign:"center" }}>kartu e-money <b>ck7</b> </h2>
                                <p className="desc-text-emoney">Ayo!! Bergabung menjadi Merchant CK7 Emoney <br /> Saling memberkati, dari Jemaat untuk Jemaat </p>
                            </div>
                            
                            <div className="space-between-custom">
                                <a href="/merchants" className="btn custom-btn"  ><i className="fas fa-boxes mr-2"></i>merchants</a>
                                <a href="/merchants" className="btn custom-btn bg-yellow"><i className="fas fa-shopping-cart mr-2"></i>how to buy</a>
                                <a href="https://www.instagram.com/ck7.emoney/" className="btn custom-btn"><i className="fab fa-instagram mr-2"></i>@ck7.emoney</a>
                            </div>
                            
                        </div>
                    </Col>
                    
                    <Col
                        md="6"
                        lg="6"
                        sm="12"
                        style={{ padding:"20px 35px"  }}
                    >
                        <div className="flex-center-cwh">
                            <img src="https://www.gbiprj.org/img/card_depan.png" alt="" style={{ width: "100%", maxWidth: "350px", borderRadius: "15px" }}/>
                        </div>
                    </Col>
                </Row>
                
                {/* End of e-money area */}
                <div id="google-maps">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.825747131031!2d106.84698571390567!3d-6.154087162031813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f596229bc4c7%3A0xc48460cbec57eed0!2sGBI%20PRJ%20CK7!5e0!3m2!1sen!2sid!4v1629438915199!5m2!1sen!2sid" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, minHeight: '600px', zIndex: "20", position: 'relative' }} 
                        allowFullscreen="" 
                        loading="lazy" />
                </div>
                
                <div id="contact-area" className={`bg-img-line-bottom p-b-100`}>
                    <div className="contact-area-container">
                            
                        <CardContactUs 
                            address="Office : GBI - PRJ (CK7) Mall MGK Lt. 3, Jl. Angkasa Kav. B - 6. Kemayoran, Jakarta Pusat - 10610, Telp 021 2605 1888 / 021 2937 1333, Fax 021 2605 1999 / 021 6570 1589"
                            labelName="Nama"
                            labelAddress="Alamat"
                            labelPhoneNum="No. Telp / Whatsapp"
                            labelEmail="Email"
                            labelMessages="Pesan"
                        />
                    </div>
                </div>
                
                <FooterComponent />
                
            </div>

        );
    }
}