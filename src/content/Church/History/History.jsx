import React from 'react'
import ParallaxComponent from './../../../components/Parallax/Parallax';
import Header from '../../../components/Header/Header';
import '../styles.scss';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageLinkComponent from '../../../components/ImageLink/ImageLink';
import SwiperCore, { Autoplay } from 'swiper'
import FooterComponent from '../../../components/Footer/Footer';

SwiperCore.use(Autoplay);

export default class HistoryPage extends React.Component{
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
                    title="Article - History Ck7"
                />
                
                <ParallaxComponent 
                    srcImg="https://home.gbiprj.org/img/gbiprj.org/header_img/default.jpg"
                    titleSection="History CK7"
                />
                
                <div className="bg-img-line-bottom">
                    <div className="container-content-history">
                        <button className="btn btn-back" onClick={() => this.goBack()} >
                            <i className="fas fa-chevron-left" title="Kembali"></i>
                        </button>
                        
                        <h4 className="title-content" style={{ textTransform: "none" }}>
                            <strong>Sejarah GBI-PRJ</strong>
                        </h4>
                        
                        <p className="isi-content">
                            Gereja Bethel Indonesia (GBI-PRJ) didirikan pada tahun 1998 yang sebelumnya bernama Gereja Bethel Indonesia Borobudur yang berlokasi di Hotel Borobudur dan dihadiri oleh 100 jemaat yang beribada setiap minggu.
                        </p>
                        
                        <p className="isi-content">
                            Seturut dengan berkembangnya zaman yang juga ditandai pada tahun 2005 adalah "Tahun Kebangkitan Gereja" maka Gereja Bethel Indonesia (GBI-PRJ) pindah ke gedung yang baru yakni Gedung Pusat Niaga Arena Pekan Raya Jakarta yang diperkirakan mampu menampung jemaat sebanyak 1000 jemaat dengan 2 (dua kali Ibadah) yakni Pk. 07.30 WIB dan Pk. 10.00 WIB serta memperluas sarana ibadah dilengkapi dengan sarana Todler (ibadah anak usia 0 bulan sampai 3 tahun), Children Church yang terdiri dari ibadah Joshua Generation Kids Church (ibadah anak berbahasa Inggris), Ibadah Sekolah Minggu (ibadah anak berbahasa Indonesia) usia 4 tahun sampai dengan usia 10 tahun dibagi perkelas sesuai usianya, Ibadah Junior Church (ibadah Remaja berbahasa Indonesia usia 11 tahun sampai dengan usia 16 tahun), dan kebaktian khusus untuk Youth (remaja berusia 17 tahun sampai dengan 25 tahun) khusus Ibadah Youth diadakan pada hari sabtu.
                        </p>
                        
                        <p className="isi-content">
                            Pada Tahun Kebangkitan Gereja ini, sejalan juga dengan terus meningkatnya jemaat Gereja Bethel Indonesia (GBI-PRJ) dari waktu ke waktu, akhirnya guna menyiapkan penuaian besar pada bulan November 2008 mulai dibuka Ibadah Raya ke-3 sehingga jam ibadah berubah menjadi Ibadah yang ketiga pada Pk 11.15 WIB yang dihadiri oleh 5000 jemaat yang beribadah setiap minggu.
                        </p>
                        
                        <p className="isi-content">
                            Pertumbuhan jemaat yang terus berkembang, Gereja Bethel Indonesia (GBI-PRJ) menambah jam ibadah lagi pada tahun 2010 yakni pada Pk. 16.30 WIB disertai penambahan Ibadah JES (Junior English Service) yakni Ibadah remaja berbahasa Inggris dan Ibadah Martha Service yaitu ibadah yang diperuntukkan bagi pada baby sitter dan para pembantu dimana ibadah ini bersifat memberikan pelatihan berupa keterampilan kepada mereka sehingga mereka memiliki bekal nantinya.
                        </p>
                        
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