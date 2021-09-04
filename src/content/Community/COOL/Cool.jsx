import React from 'react'
import ParallaxComponent from './../../../components/Parallax/Parallax';
import Header from '../../../components/Header/Header';
import '../style.scss';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageLinkComponent from '../../../components/ImageLink/ImageLink';
import SwiperCore, { Autoplay } from 'swiper'
import FooterComponent from '../../../components/Footer/Footer';
import { Col, Row } from 'react-bootstrap';



SwiperCore.use(Autoplay);

export default class CoolPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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
                    title="Community - Community Of Love"
                />
                
                <ParallaxComponent 
                    srcImg="https://home.gbiprj.org/img/gbiprj.org/header_img/default.jpg"
                    titleSection="Community Of Love"
                />
                
                
                <div className="bg-img-line-bottom">
                    <div className="container-content-cool">
                        <button className="btn btn-back" onClick={() => this.goBack()} >
                            <i className="fas fa-chevron-left" title="Kembali"></i>
                        </button>
                        
                        <blockquote>
                            "COmmunity Of Love adalah wadah untuk mengembalakan sekaligus memuridkan Pengerja dan Jemaat untuk dapat dipersiapkan menjadi Umat yang layak sehingga akhirnya mereka menjadi Murid Kristus, Pemenang dan Mempelai Kristus."
                            <span className="blockquote-speaker">Pdt. DR. Ir. Niko Njotorahardjo</span>
                        </blockquote>
                        
                        <p className="isi-content">
                            COOL atau Community Of Love adalah transformasi dari Family Altar (FA) yang adalah komunitas sel dalam GBI Gatot Subroto yang mengalami kasih.
                        </p>
                        
                        <p className="isi-content">
                            Yang dimaksud adalah komunitas yang akan dipakai Tuhan untuk membawa dampak bagi lingkungannya. Kerinduan kami adalah mempraktekkan gaya hidup Allah dalam kehidupan sebuah komunitas.
                        </p>
                        
                        <p className="isi-content">
                            Kelompok kecil yang terdiri dari 3 - 15 orang yang bersepakat untuk bertumbuh dalam kelompok ini akan digembalakan dan mendapat pengajaran yang sehat dalam keterbukaan serta saling melayani sebagaimana lazimnya sebuah keluarga yang dimentori / difasilitasi oleh seorang Gembala COOL. Karena itu visi dari pelayanan ini adalah dalam Kasih mempersiapkan umat yang layak menjadi seperti Kristus dalam Kesatuan Hati, Tumbuh Bersama dan Memenangkan Jiwa.
                        </p>
                        
                        <Row>
                            <Col
                                md="6"
                                lg="6"
                            >
                                <p className="title-content">
                                    Moto
                                </p>
                                
                                <p className="isi-content">
                                    KTM (Kesatuan Hati, Tumbuh Bersama, Memenangkan Jiwa)
                                </p>
                                
                                <p className="title-content">
                                    Visi Umum
                                </p>
                                
                                <p className="isi-content">
                                    Lapangkanlah tempat kemahmu, dan bentangkanlah tenda tempat kediamanmu, janganlah menghematnya; panjangkanlah tali-tali kemahmu dan pancangkanlah kokoh-kokoh patok-patokmu! Sebab engkau akan mengembang ke kanan dan ke kiri, keturunanmu akan memperoleh tempat bangsa-bangsa, dan akan mendiami kota-kota yang sunyi. Yesaya 54:2-3
                                </p>
                            </Col>
                            <Col
                                md="6"
                                lg="6"
                                className="isi-content-list"
                            >
                                <p className="title-content">Suplement COOL</p>
                                <p className="isi-content">
                                    <ul className="list-unstyled download">
                                        <li>
                                            <a href="">
                                                <i className="far fa-file-pdf"></i> Umum #Week 35
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="far fa-file-pdf"></i> Youth #Week 35
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="far fa-file-pdf"></i> Kids #Week 35 <i className="fas fa-file-word word-doc"></i> Panduan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="far fa-file-pdf"></i> GIC & LGBTQ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="far fa-file-pdf"></i> Menyikapi Vaksinasi
                                            </a>
                                        </li>
                                    </ul>
                                </p>
                            </Col>

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