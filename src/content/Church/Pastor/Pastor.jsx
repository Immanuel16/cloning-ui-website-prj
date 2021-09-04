import React from 'react';
import ParallaxComponent from '../../../components/Parallax/Parallax';
import Header from './../../../components/Header/Header';
import '../styles.scss'
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageLinkComponent from '../../../components/ImageLink/ImageLink';
import SwiperCore, { Pagination, EffectCoverflow,Autoplay } from 'swiper';
import FooterComponent from '../../../components/Footer/Footer';

SwiperCore.use([Autoplay]);



export default class PastorsComponent extends React.Component{
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
                    title="Article - Pastors"
                />
                <ParallaxComponent 
                    srcImg="https://home.gbiprj.org/img/gbiprj.org/header_img/default.jpg"
                    titleSection="Pastors"
                />
                <div className="bg-img-line-bottom">

                    <div className="container-content-pastor">
                        <button className="btn btn-back" onClick={() => this.goBack()} >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        
                        <h4 className="pastorName"><strong>Pdt. DR. Ir. Niko Njotorahardjo</strong></h4>
                        
                        <p className="isi-content-pastors">
                            <strong>Pdt. </strong> <strong>DR. Ir. Niko Njotorahardjo</strong> lahir di Bondowoso, Jawa Timur, pada 20 Februari 1949. Saat ini beliau merupakan Gembala Sidang dari keluarga besar GBI Jl. Gatot Subroto.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Pelayanan beliau dimulai pada tahun 1985. Tuhan memanggil beliau masuk ke dalam pelayanan sepenuh waktu dengan mengirim dua orang hamba Tuhan untuk memberikan konfirmasi kepada beliau, yaitu <strong>Pdt. S. Damaris</strong>, seorang hamba Tuhan senior yang juga dikenal sebagai penginjil pertama di Indonesia, serta <strong>Pdt. Schenk</strong> yang merupakan seorang hamba Tuhan dari Belanda.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Pdt. Damaris menunjukkan bahwa Tuhan telah memanggil beliau untuk melayani-Nya sepenuh waktu dalam area pujian & penyembahan untuk merestorasi Pondok Daud. Pdt. Damaris berkata bahwa beliau adalah orang pertama yang dipanggil Tuhan untuk melayani-Nya di dalam area ini dalam kapasitas sepenuh waktu dengan tugas yang spesifik, yaitu untuk merestorasi Pondok Daud. Karena itu, beliau harus mempersiapkan diri untuk menghadapi segala konsekuensinya.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Pdt. Schenk mengkonfirmasi panggilan tersebut saat sedang berkhotbah di Surabaya. Pdt. Schenk mendatangi beliau dan berkata bahwa Tuhan memanggil Pdt. Niko untuk membawa umat-Nya datang ke hadirat-Nya.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Beliau mulai berkeliling, memimpin penyembahan dari satu desa ke desa lain, dari satu tempat ke tempat lain. Tidak banyak orang yang mengenal pelayanannya karena hampir tidak ada orang lain yang dipanggil untuk melayani dalam kapasitas itu.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Seiring bertambahnya tahun pelayanan, pada tahun 1988, Pdt. Niko dipercayakan oleh GBI Bethany yang berpusat di Surabaya, di bawah Pdt. Dr. Abraham Alex Tanuseputra, untuk membuka & menggembalakan GBI Bethany di wilayah Indonesia Bagian Barat. Hal tersebut ditandai dengan ibadah perdana GBI Bethany Jakarta pada 4 September 1988 di Gedung Wisma Karsa Pemuda, Senayan.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Dalam kelanjutannya, GBI Bethany wilayah Barat di bawah penggembalaan Pdt. Niko berkembang sangat pesat, baik dari jumlah cabang yang telah mencapai sekitar 800-an cabang gereja lokal di dalam negeri dan luar negeri, 6.000 kelompok COOL (COmmunity Of Love, yang sebelumnya dikenal dengan nama Family Altar) dengan sekitar 250 ribu jemaat.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Saat ini, Pdt. Niko menjabat sebagai pengarah Jaringan Doa Nasional (JDN) dan anggota Majelis Penasihat Sinode Gereja Bethel Indonesia, serta menjabat sebagai Ketua Umum Persekutuan & Pelayanan Hamba Tuhan Garis Depan (PPHTGD).
                        </p>
                        
                        <p className="isi-content-pastors">
                            Beliau juga merupakan Co-Chairman dari Empowered-21 Asia, anggota dari Empowered-21 Global Cabinet, serta penatua dari Jerusalem House of Prayer for All Nations.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Pdt. DR. Ir. Niko Njotorahardjo pun sudah banyak melakukan Kebaktian Kebangkitan Rohani (KKR), dan sering dinamakan dengan Healing Movement Crusade yang telah memenangkan banyak jiwa bagi Tuhan Yesus.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Tahun 2001, Pdt. Niko mendapatkan gelar Doctor of Divinity, sebuah gelar kehormatan dari Church of God, Lee University, Cleveland, Tennessee, Amerika Serikat.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Kemudian, pada tahun 2013, Pentecostal Theological Seminary yang dinaungi Church of God, mendirikan The Niko Njotorahardjo Endowed Chair for Global Mission Leadership and Prayer for The Restoration of The Tabernacle of David, yaitu suatu jabatan/badan akademis di dalam institusi seminari terkemuka tersebut yang bertugas untuk menyusun kurikulum, membuat forum-forum kepemimpinan, pelayanan lintas budaya yang berfokus pada pengembangan pengajaran-pengajaran dan visi-visi yang dibagikan Pdt. Niko, khususnya mengenai pemulihan atau Restorasi Pondok Daud
                        </p>
                        
                        <p className="isi-content-pastors">
                            Pada tahun 2018 pun, Church of God, Cleveland memilih Pdt. Niko sebagai salah satu penasihat yang tergabung dalam The Council of Eighteen Church of GOD. Beliau pun diakui sebagai salah satu pendeta dari Asia yang peka mendengarkan suara Tuhan.
                        </p>
                        
                        <h4 className="pastorName"><strong>Pdt. DR. Janto Simkoputera, MD PhD</strong></h4>
                        
                        <p className="isi-content-pastors">
                            Sebagai Gembala CK7, Pdt. DR. Janto Simkoputera, MD PhD juga merupakan seorang dokter ahli penyakit dalam atau internis yang cukup dihormati. Saat ini pun beliau melakukan praktik di salah satu rumah sakit ternama di Kebon Jeruk, Jakarta Barat. Beliau menamatkan pendidikan spesialis penyakit dalam di University of Hamburg, Jerman pada tahun 1976. Beliau juga anggota Ikatan Dokter Indonesia (IDI), serta Perhimpunan Dokter Spesialis Penyakit Dalam Indonesia.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Latar belakang pendidikan medis beliau
                        </p>
                        
                        <p className="isi-content-pastors">
                            <ul>
                                <li><em>Medical Doctor - Universitat Des Saarlandes, Hamburg, Jerman, 1971</em></li>
                                <li><em>Spesialis Penyakit Dalam - University of Hamburg, Jerman, 1976</em></li>
                                <li><em>Gastroenterologist - Harvard Medical School, Boston, AS, 1980</em></li>
                                <li><em>Hepatologist - Chiba University, Jepang, 1982</em></li>
                            </ul>
                        </p>
                        
                        <p className="isi-content-pastors">
                            <strong>Pdt. DR. Janto Simkoputera, MD PhD</strong>, atau secara akrab disapa dan dikenal sebagai DR. Janto, memiliki moto: to be or not to be. Artinya, menjadi orang Kristen harus taat firman Tuhan, atau tidak sama sekali! Sebab sama-sama berdosa kalau melanggar firman Tuhan, dan upah dosa ialah maut. Jadi, tidak banyak pilihan. Benar-benar mengutamakan Tuhan atau tidak sama sekali. Tidak bisa setengah-setengah. Sebab banyak orang yang melayani Tuhan, tetapi melanggar firman.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Beliau selalu mendorong jemaat dan orang-orang agar percaya firman dan memprioritaskan Tuhan. Itulah wujud persembahan kepada Tuhan, yaitu melalui pelayanan yang penuh tanggung jawab.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Sebagai seorang dokter spesialis yang sukses, sekaligus melakukan pelayanan penggembalaan jemaat dengan benar, beliau harus mengorbankan sebagian besar jam-jam praktik medisnya guna memberikan pelayanan terbaik kepada Tuhan.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Itulah yang beliau pegang. Beliau percaya, semua pengorbanan itu wujud persembahan untuk Tuhan. Ada proses pembentukan karakter dan hati. Dan selama pelayanan pun proses pembentukan karakter pasti terus terjadi, dan baru selesai bila Tuhan Yesus datang kelak untuk kedua kalinya.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Beliau memulai awal pelayanan penggembalaannya pada tahun 1998 dengan jemaat hanya sekitar 100 orang. Kini jumlah jemaat terus bermultiplikasi mencapai hingga puluhan ribu jemaat.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Penggembalaan beliau mengikuti tuntunan Gembala Sidang, yaitu Pdt. DR. Ir. Niko Njotorahardjo, yaitu Restorasi Pondok Daud. Artinya, membawa hadirat Tuhan ke gereja ini. Itu pun yang menjadi DNA CK7. Dengan mengikuti tuntunan Gembala Sidang, Tuhan mengirimkan jiwa-jiwa, bukan melalui program-program yang menyenangkan manusia, atau dengan mengandalkan kekuatan sendiri.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Dan dengan mengandalkan & mengikuti pimpinan Roh Kudus, gereja ini dipakai oleh Tuhan untuk memulihkan dan merestorasi Pondok Daud. Melalui doa, pujian, dan penyembahan di gereja ini, banyak jemaat yang merasakan hadirat-Nya.
                        </p>
                        
                        <p className="isi-content-pastors">
                            <strong>Pdt. DR. Janto Simkoputera, MD PhD</strong> pun mesti membagi waktu antara menangani pekerjaan sebagai seorang dokter sekaligus menggembalakan jemaat. Memang tidak mudah membagi waktu antara profesi dokter dan sebagai gembala gereja. Seharusnya seorang gembala memang menjadi seorang fulltimer (sepenuh waktu), bukan bekerja sekuler. Tetapi, di lain pihak justru melalui profesi beliau sebagai dokterlah yang memudahkan/membantunya mengajak banyak orang atau pasien untuk mencari Tuhan. Sebuah pekerjaan yang mungkin tidak banyak pendeta yang bisa mengatasinya.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Pdt. Niko pun meneguhkan beliau supaya tidak perlu meninggalkan atau beralih profesi, sebab hanya dengan menjadi pendeta tidak dapat mengisi profesi dokter dalam menjangkau jiwa-jiwa. Dan hal itu memang benar, karena banyak sekali pasien beliau yang akhirnya menjadi jemaat CK7 sebab melihat campur tangan dan kuasa pertolongan Tuhan dalam hidup mereka lewat kesaksian serta pelayanan DR. Janto. Sebab itulah, DR. Janto tidak mengubah profesinya, sesuai anjuran Gembala Sidang.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Tentang membagi waktu, memang berat sekali karena begitu banyak pekerjaan di rumah sakit dan dengan tanggung jawab yang sedemikian besar. Perlu pengorbanan yang tidak sedikit pula untuk semuanya. Tetapi, beliau yakin, <strong>tujuan kekristenan adalah untuk menjadi umat yang berkenan dengan memberikan yang terbaik bagi Allah</strong>.
                        </p>
                        
                        <p className="isi-content-pastors">
                            DR. Janto pun menerapkan disiplin di gereja yang beliau gembalakan. Salah satunya adalah melalui Doa Fajar. Kegiatan tersebut pun ternyata sangat bermanfaat bagi pertumbuhan rohani jemaat maupun pertumbuhan gereja sendiri.
                        </p>
                        
                        <p className="isi-content-pastors">
                            CK7 pun dikenal dengan kegiatan Doa Fajarnya yang sudah dimulai sejak belasan tahun silam. Doa Fajar dilaksanakan mulai pukul 04.45 WIB. Jemaat yang hadir diajar untuk mencari wajah Tuhan melalui doa, pujian dan penyembahan, serta penyampaian firman Tuhan.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Puji Tuhan, seluruh cabang CK7 pun memiliki kegiatan Doa Fajar. Awalnya, semua itu hanya dimulai secara sederhana dengan empat orang di cabang Intercon, dan sekarang rata-rata jemaat yang hadir mencapai sekitar, bahkan lebih dari 250 orang setiap pagi. Bila Doa Fajar gabungan, bisa mencapai ribuan jemaat beserta pengerja gereja.
                        </p>
                        
                        <p className="isi-content-pastors">
                            Tuhan mempercayakan visi kepada CK7 adalah <strong>menjadi gereja yang berkarakter Kristus dan berdampak bagi sesama</strong>.
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