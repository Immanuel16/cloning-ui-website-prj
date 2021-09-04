import React from 'react'
import ParallaxComponent from './../../../components/Parallax/Parallax';
import Header from '../../../components/Header/Header';
import '../styles.scss';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageLinkComponent from '../../../components/ImageLink/ImageLink';
import SwiperCore, { Autoplay } from 'swiper'
import FooterComponent from '../../../components/Footer/Footer';

SwiperCore.use([Autoplay]);

export default class GatsuPage extends React.Component{
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
                    title="Article - Gbi Gatot Subroto"
                />
                <ParallaxComponent 
                    srcImg="https://home.gbiprj.org/img/gbiprj.org/header_img/default.jpg"
                    titleSection="GBI Jl. Gatot Subroto"
                />
                
                <div className="bg-img-line-bottom">
                    <div className="container-content-gatsu">
                        <button className="btn btn-back" onClick={() => this.goBack()} >
                            <i className="fas fa-chevron-left" title="Kembali"></i>
                        </button>
                        
                        <p className="isi-content" style={{ marginTop: "15px" }}>
                            Gereja Bethel Indonesia Jemaat Induk Jalan Gatot Subroto (GBI Jl. Gatot Subroto atau dulu dikenal juga GBI Senayan) adalah sebuah gereja lokal yang berdiri sejak <strong>4 September 1988</strong> di Wisma Karsa Pemuda, Jakarta Pusat, di bawah Sinode Gereja Bethel Indonesia. Gereja ini digembalakan oleh Pdt. DR. Ir. Niko Njotorahardjo dan melaksanakan kebaktian setiap minggunya di Jakarta Convention Center (JCC), Jalan Gatot Subroto, Senayan, Jakarta.
                        </p>
                        
                        <p className="isi-content">
                            Sebelum menggunakan nama GBI Jl. Gatot Subroto, gereja ini bernama GBI Bethany Jakarta.
                        </p>
                        
                        <p className="isi-content">
                            Pada saat berdirinya, GBI Jl. Gatot Subroto berada di bawah pembinaan GBI Bethany Pusat Surabaya (sejak tahun 2003 berdiri sendiri sebagai sebuah sinode baru, Sinode Gereja Bethany Indonesia)
                        </p>
                        
                        <p className="isi-content">
                            Pada tahun 2002, menuruti keputusan sidang Sinode Gereja Bethel Indonesia, Pdt. DR. Ir. Niko Njotorahardjo selaku gembala sidang GBI Bethany Jakarta, memutuskan untuk menurunkan nama Bethany dan menggunakan nama GBI Jl. Gatot Subroto.
                        </p>
                        
                        <p className="isi-content">
                            Pada 3 Juni 2007, Pdt. DR. Ir. Niko Njotorahardjo mengumumkan nama Healing Movement Ministry untuk persekutuan dan pelayanan GBI Jl. Gatot Subroto beserta seluruh cabang atau rantingnya.
                        </p>
                        
                        <h4 className="title-content">
                            <strong>dna gereja</strong>
                        </h4>
                        
                        <p className="isi-content">
                            GBI Jl. Gatot Subroto berdiri dengan sebuah tugas khusus, visi-misi yang jelas, yaitu <strong>Restorasi Pondok Daud</strong> sebagaimana tertulis dalam Kisah Para Rasul 15:16-17, <em>“Kemudian Aku akan kembali dan membangunkan kembali pondok Daud yang telah roboh, dan reruntuhannya akan Kubangun kembali dan akan Kuteguhkan, supaya semua orang lain mencari Tuhan dan segala bangsa yang tidak mengenal Allah, yang Kusebut milik-Ku demikianlah firman Tuhan yang melakukan semuanya ini.”</em>
                        </p>
                        
                        <p className="isi-content">
                            Pdt. DR. Ir. Niko Njotorahardjo menyampaikan, Restorasi Pondok Daud adalah DNA GBI Jl. Gatot Subroto. Selama perjalanan GBI Jl. Gatot Subroto, pengertian restorasi Pondok Daud berkembang secara dinamis:
                        </p>
                        
                        <p className="isi-content">
                            <ul>
                                <li>1988-1993: Yang direstorasi adalah pujian dan penyembahan</li>
                                <li>1993-1998: Ditambah dengan doa sehingga menjadi doa, pujian, dan penyembahan</li>
                                <li>1998-2003: Ditambah dengan unity, sehingga menjadi doa, pujian, dan penyembahan dalam unity</li>
                                <li>2003-2008: Pemantapan doa, pujian, dan penyembahan dalam unity</li>
                                <li>2008-2013: Ditambah dengan siang dan malam, sehingga menjadi Doa, Pujian, dan Penyembahan dalam unity, siang dan malam</li>
                            </ul>
                        </p>
                        
                        <p className="isi-content">
                            Sehingga pengertian Restorasi Pondok Daud secara lengkap adalah: Prajurit-prajurit Tuhan yang gagah perkasa yang gaya hidupnya doa, pujian, penyembahan dalam unity siang dan malam serta melakukan kehendak Bapa pada zaman ini.
                        </p>
                        
                        <p className="isi-content">
                            <em>(Mighty warriors of God that lead a lifestyle of pray, praise, and worship together ini unity, day and night, and do the Father's will in his generation.)</em>
                        </p>
                        
                        <h4 className="title-content">
                            <strong>organisasi</strong>
                        </h4>
                        
                        <p className="isi-content">
                            Dalam menggembalakan, membina, serta memimpin, Pdt. DR. Ir. Niko Njotorahardjo, atau Pdt. Niko begitu beliau akrab dipanggil, dibantu oleh empat Wakil Gembala Sidang/Pembina, yakni:
                        </p>
                        
                        <p className="isi-content">
                            <ul>
                                <li>Pdt. Danny Tumiwa, SH</li>
                                <li>Pdt. Paul R. Widjaja</li>
                                <li>Pdt. Ir. Djohan Handojo</li>
                                <li>Pdt. Ir. Arwijanto Tjokro</li>
                            </ul>
                        </p>
                        
                        <p className="isi-content">
                            Keempat wakil tersebut, masing-masing mengkonsentrasikan diri pada bidang-bidang lima jawatan serta delapan Divisi Pelayanan yang terbagi menjadi 16 (enam belas) Subdivisi Pelayanan.
                        </p>
                        
                        <p className="isi-content">
                            Hingga tahun 2007, jejaring penggembalaan Pdt. Niko juga dibantu oleh <strong>32 Kepala Rayon</strong> (yang terdiri dari 8 orang Kepala Rayon DKI, 20 orang Kepala Rayon Otonom Dalam Negeri, & 4 orang Kepala Rayon Luar Negeri), <strong>131 Gembala Cabang</strong> (termasuk 46 orang Gembala Cabang di luar negeri), serta sekitar <strong>5763 kelompok sel</strong> yang merupakan jaringan pengembalaan jemaat.
                        </p>
                        
                        <p className="isi-content">
                            <strong>Daftar Rayon Jakarta:</strong>
                        </p>
                        
                        <p className="isi-content">
                            <ul>
                                <li>Rayon 1a: Kebayoran</li>
                                <li>Rayon 1b: Puri Indah Mall</li>
                                <li>Rayon 1c: Gajah Mada, Kota</li>
                                <li>Rayon 1d: Tampak Siring, Kelapa Gading</li>
                                <li>Rayon 1e: Bintaro</li>
                                <li>Rayon 1f: Menara Gracia, Kuningan</li>
                                <li>Rayon 1g: Taman Mini</li>
                                <li>Rayoh 1h: Wisma AKR, Kebon Jeruk</li>
                            </ul>
                        </p>
                        
                        <p className="isi-content">
                            <strong>Daftar Cabang Khusus (dulu Cabang Otonom):</strong>
                        </p>
                        
                        <p className="isi-content">
                            <ul>
                                <li>CK1: City Tower</li>
                                <li>CK2: Mangga Dua Square</li>
                                <li>CK3: VOT Semanggi</li>
                                <li>CK4: Outbox Plaza Indonesia</li>
                                <li>CK5: Miracle Service</li>
                                <li>CK6: PIK Galaxy</li>
                                <li>CK7: PRJ Kemayoran</li>
                                <li>CK8: Gandaria City (Grow Center)</li>
                                <li>CK9</li>
                            </ul>
                        </p>
                        
                        <p className="isi-content">
                            <strong>Daftar Rayon Otonom Dalam Negeri:</strong>
                        </p>
                        
                        <p className="isi-content">
                            <ul>
                                <li>Rayon 2: Bandung</li>
                                <li>Rayon 3: Tangerang</li>
                                <li>Rayon 4: Jalan Iskandar Muda, Medan</li>
                                <li>Rayon 5: Bekasi Plaza</li>
                                <li>Rayon 7: Bogor</li>
                                <li>Rayon 8: Lippo Cikarang</li>
                                <li>Rayon 9: Depok</li>
                                <li>Rayon 10: Batam</li>
                                <li>Rayon 11: Jalan Tuanku Tambusai, Pekanbaru</li>
                                <li>Rayon 12: Jalan Ahmad Yani, Pekanbaru</li>
                                <li>Rayon 13: Bengkulu</li>
                                <li>Rayon 14: Jambi</li>
                                <li>Rayon 15: Palembang</li>
                                <li>Rayon 16: Pontianak</li>
                                <li>Rayon 17: Lampung</li>
                                <li>Rayon 18: Cibitung</li>
                                <li>Rayon 19: Padang</li>
                            </ul>
                        </p>
                        
                        <p className="isi-content">
                            <strong>Daftar Rayon Luar Negeri:</strong>
                        </p>
                        
                        <p className="isi-content">
                            <ul>
                                <li>Rayon 50: Amerika Serikat dan Kanada</li>
                                <li>Rayon 75</li>
                            </ul>
                        </p>
                        
                        <h4 className="title-content">
                            <strong>sejarah & visi</strong>
                        </h4>
                        
                        <p className="isi-content">
                            <strong>5 Tahun Pertama</strong>(1988-1993): Pujian dan Penyembahan. Sejak berdirinya pada 4 September 1988, selama lima tahun pertama, Tuhan merestorasi pujian dan penyembahan terlebih dulu. Pdt. Niko bersaksi bahwa selama lima tahun itu, topik khotbahnya pasti tentang pujian dan penyembahan. Namun demikian, jemaat yang datang semakin lama semakin banyak dan Wisma Karsa Pemuda yang menjadi tempat berbakti menjadi sedemikian penuhnya, dan gereja terus berkembang pesat.
                        </p>
                        
                        <p className="isi-content">
                            Tanggal 4 September 1988 merupakan kebaktian perdana GBI Senayan (pada saat itu masih bernama GBI Jemaat Bethany) yang diadakan di Gedung Serba Guna, Wisma Karsa Pemuda, Senayan, Jakarta.
                        </p>
                        
                        <p className="isi-content">
                            Lalu, gereja mulai bergerak kuat dalam urapan Tuhan melalui pujian dan penyembahan.
                        </p>
                        
                        <p className="isi-content">
                            Tuhan memberikan visi di dalam Yesaya 54:2-3, <em>"Lapangkanlah tempat kemahmu, dan bentangkanlah tenda tempat kediamanmu, janganlah menghematnya; panjangkanlah tali-tali kemahmu dan pancangkanlah kokoh-kokoh patok-patokmu! Sebab engkau akan mengembang ke kanan ke kiri, keturunanmu akan memperoleh bangsa-bangsa, dan akan mendiami kota-kota sunyi."</em>
                        </p>
                        
                        <p className="isi-content">
                            Wadah-wadah mulai dibuka melalui pelayanan gereja ini. Sampai pertengahan tahun 1993, terdapat 16 gereja yang berdiri lewat tahun-tahun perintisan ini. Tuhan menghendaki pendirian gereja dengan berpola adakan beberapa kali kebaktian Praise and Worship, setelah ada peneguhan lebih lanjut, dirikan gereja di tempat atau kota tersebut.
                        </p>
                        
                        <p className="isi-content">
                            <strong>5 Tahun Kedua</strong> (1993-1998): Doa, Pujian, dan Penyembahan. Tuhan menambahkan dengan doa dan mengirimkan almarhum Pdt. Timotius A. Rohim untuk tujuan itu, sehingga gereja mulai masuk dalam doa puasa, doa keliling, doa peperangan, dan sebagainya.
                        </p>
                        
                        <p className="isi-content">
                            Tahun 1994 merupakan tahun penggenapan visi yang Tuhan berikan di tahun 1993 melalui Yesaya 54:2-3 yang menjadi tema utama.
                        </p>
                        
                        <p className="isi-content">
                            Tahun ini merupakan tahun sejumlah persiapan, yaitu: Mempersiapkan Pasukan Doa Syafaat; Memulai doa puasa setiap hari Sabtu (dimulai pada tanggal 5 Maret); serta Mempersiapkan Family Altar (FA atau kelompok sel).
                        </p>
                        
                        <p className="isi-content">
                            Pada 1995, Tuhan memberikan visi di dalam Yesaya 56:7, <em>"Mereka akan Kubawa ke gunung-Ku yang kudus dan akan Kuberi kesukaan di rumah doa-Ku. Aku akan berkenan kepada korban-korban bakaran dan korban-korban sembelihan mereka yang dipersembahkan di atas mezbah-Ku, sebab rumah-Ku akan disebut rumah doa bagi segala bangsa."</em>
                        </p>
                        
                        <p className="isi-content">
                            Kemudian, pada 1996, Visi Rumah Doa menjadi tema utama, sebab Tuhan menghendaki umat-Nya untuk menjadi rumah doa. Khotbah-khotbah dan seminar-seminar doa gencar diadakan.
                        </p>
                        
                        <p className="isi-content">
                            Menginjak tahun 1997 adalah tahun misi dan penginjilan. <strong>Prof. Peter Wagner</strong>, seorang pakar pertumbuhan gereja menyimpulkan dalam bukunya bahwa pertumbuhan gereja yang paling efektif adalah dengan membuka gereja-gereja baru.
                        </p>
                        
                        <p className="isi-content">
                            Gereja-gereja baru tersebut merupakan rumah-rumah doa atau menjadi pangkalan doa. Pdt. Niko membaca buku tersebut dan menjadi rhema yang beliau terima dengan sukacita.
                        </p>
                        
                        <p className="isi-content">
                            Kejadian Mei 1997 yang mengguncangkan kota Jakarta menjadikan umat semakin menjadi rumah doa. Pada pertengahan tahun, dimulai pembentukan kubu-kubu doa. Kubu-kubu doa dibentuk di kelompok-kelompok sel (Family Altar) untuk pertahanan wilayah RT/RW/Kelurahan setempat, dan untuk memenangkan wilayah tersebut bagi Kristus, serta menjadikan jemaat Rumah Doa. Kubu Doa bersifat ringkas dan fleksibel. Dari satu kelompok sel (FA) dapat dibentuk dua atau tiga kubu doa.
                        </p>
                        
                        <p className="isi-content">
                            Kemudian, mulailah lima sampai enam FA menjadi satu gereja, dan ada pula yang sepuluh FA menjadi satu gereja. Dalam satu FA, kira-kira ada 12 orang. Dalam tempo satu setengah tahun, GBI Senayan menanam/merintis sekitar 200 gereja baru. Namun, Pdt. Niko saat itu juga mengalami kecaman dari banyak kalangan serta terjadi kesalahpahaman. Meskipun demikian, gereja tetap berkembang pesat.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 1998 adalah menuai dalam kasih. Tuhan memberikan tujuh strategi penuaian:
                        </p>
                        
                        <p className="isi-content">
                            <ul>
                                <li>Unity</li>
                                <li>Memperhatikan Kekurangan</li>
                                <li>Mendoakan bangsa-bangsa</li>
                                <li>Jangan takut</li>
                                <li>Pergi, injak, kumpulkan orang dan ajak berdoa</li>
                                <li>Banyak berdiam diri dan berdoa</li>
                                <li>Menjadi murid Kristus</li>
                            </ul>
                        </p>
                        
                        <p className="isi-content">
                            Doa menjadi awal dan prioritas untuk penuaian. Pada tahun 1998, Menara Doa (Watch Tower) mulai dirintis. Sebuah konvokasi doa di Yerusalem pada 1998 yang dihadiri bangsa-bangsa menyimpulkan, <strong>tanpa Menara Doa (Rumah Doa 24 jam) tidak akan terjadi penuaian</strong>. Maka, sejak September 1998, GBI Jl. Gatot Subroto memulai sebuah Menara Doa 24 jam yang bertempat di gedung BHS, lantai 25, Gajah Mada Kota, Jakarta.
                        </p>
                        
                        <p className="isi-content">
                            <strong>5 Tahun Ketiga</strong> (1998-2003): Doa, Pujian, dan Penyembahan dalam Unity. Pada tahun 1999, tuntunan Tuhan bagi gereja ini adalah:
                        </p>
                        
                        <p className="isi-content">
                            <ul>
                                <li>Persiapkan bahtera kehidupan</li>
                                <li>Menara Doa (tempat tinggi, intim 24jam, unity)</li>
                            </ul>
                        </p>
                        
                        <p className="isi-content">
                            Memasuki tahun ini diawali dengan doa puasa 40 hari. Tuhan menghendaki untuk masuk perhentian atau berdiam diri dan memikirkan perkara yang di atas, bukan yang di bumi. Ada tiga hal yang harus diperhatikan pada tahun ini: penuaian jiwa besar-besaran, goncangan yang besar, hidup berjaga-jaga. Sasaran penuaian: Bani Kedar dan Nebayot (Yesaya 21: 13-16).
                        </p>
                        
                        <p className="isi-content">
                            Pola penuaian di akhir zaman:
                        </p>
                        
                        <p className="isi-content">
                            <ul>
                                <li>Kemuliaan Tuhan memenuhi gereja-Nya (Ef. 5:18-21, Yoh. 17:21)</li>
                                <li>Doa, Pujian, dan Penyembahan (Pray, Praise, and Worship)</li>
                                <li>Bangkit dan menjadi terang (Yes. 60:1)</li>
                                <li>Miliki pikiran dan perasaan Kristus (Flp. 2:5)</li>
                                <li>Tuhan akan turun di hadapan seluruh bangsa agar mereka memiliki rasa takut akan Tuhan</li>
                            </ul>
                        </p>
                        
                        <p className="isi-content">
                            Pada tahun 2000, visi tahun ini adalah Tahun Pelipatgandaan, Tahun Mukjizat, Tahun Tidak Ada yang Mustahil bagi Orang Percaya. Bagi kita yang sudah melakukan apa yang terbaik, yaitu duduk di kaki Yesus seperti Maria untuk mendengarkan apa yang dikatakan Tuhan. Duduk diam di kaki Yesus berarti menanti-nantikan Tuhan. Di dalam Yesaya 40:31, <em>"...orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru: mereka seumpama rajawali..."</em>
                        </p>
                        
                        <p className="isi-content">
                            Pesan Konvokasi Doa Yerusalem 2001: <em>Deeper Intimacy</em> (intim lebih lagi dengan Tuhan). Maka, visi tahun 2001 adalah Persiapan Umat yang Layak. Hidup intim dengan Tuhan menjadi hal yang utama.
                        </p>
                        
                        <p className="isi-content">
                            Di dalam Wahyu 2:1-5, Tuhan kembali mengingatkan kita pada kasih mula-mula agar kita dapat mengalami hujan awal dan hujan akhir, yaitu mereka yang begitu haus dan lapar akan kebenaran, yang selalu memburu hadirat Tuhan, memburu firman Tuhan dan meresponinya. Juga memperoleh janji-Nya di 1 Korintus 2:9, <em>"…Apa yang tidak pernah dilihat oleh mata, dan tidak pernah didengar oleh telinga, dan yang tidak pernah timbul di dalam hati manusia: semua yang disediakan Allah untuk mereka yang mengasihi Dia."</em>
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2002 adalah Penuaian Jiwa Beribu-ribu Laksa. Tiga senjata Allah yang harus kita pergunakan untuk memasuki penuaian jiwa beribu-ribu laksa, seperti dalam Wahyu 5:8-12, yaitu terdiri dari tersungkur menyembah Tuhan Yesus; Doa, Pujian dan Penyembahan; menyanyikan nyanyian baru, seperti dalam Mazmur 40:4.
                        </p>
                        
                        <p className="isi-content">
                            Pada tahun 2002, Pdt. Niko mendapatkan visi dari Tuhan untuk menurunkan nama Bethany dan <em>Successful Bethany Families</em>, sehingga GBI Bethany Jakarta berubah nama menjadi GBI Jl. Gatot Subroto, Jakarta, sebagaimana diperintahkan oleh Sidang Sinode Gereja Bethel Indonesia.
                        </p>
                        
                        <p className="isi-content">
                            Gereja-gereja yang berada di bawah penggembalaannya turut menurunkan nama Bethany dan berubah menggunakan nama tempat/jalan mereka berlokasi. Sebagian kecil turut ke dalam Sinode Gereja Bethany Indonesia (2003), memisahkan diri dari Sinode Gereja Bethel Indonesia.
                        </p>
                        
                        <p className="isi-content">
                            Tahun 2003 adalah tahun pencanangan transformasi bagi bangsa Indonesia dan tahun lawatan Tuhan. Seperti dalam Yoel 2:23, <em>"Hai bani Sion, bersorak-soraklah dan bersukacitalah karena TUHAN, Allahmu! Sebab telah diberikan-Nya kepadamu hujan pada awal musim denagn adilnya, dan diturunkan-Nya kepadamu hujan, hujan pada awal dan hujan pada akhir musim seperti dahulu."</em>
                        </p>
                        
                        <p className="isi-content">
                            Tuhan sudah berbicara dan berjanji terjadi transformasi untuk Indonesia, dan dalam Ulangan 11:13-14, <em>"Jika kamu dengan sungguh-sungguh mendengarkan perintah yang kusampaikan kepadamu pada hari ini, sehingga kamu mengasihi TUHAN, Allahmu, dan beribadah kepada-Nya dengan segenap hatimu dan dengan segenap jiwamu, maka Ia akan memberikan hujan untuk tanahmu pada masanya, hujan awal dan hujan akhir, sehingga engkau dapat mengumpulkan gandummu, anggurmu dan minyakmu."</em> Maka, gereja ini akan membangun Rumah Doa bagi segala bangsa di Bukit Sentul, Bogor, Jawa Barat yang akan memberi dampak kepada TRANSFORMASI INDONESIA.
                        </p>
                        
                        <p className="isi-content">
                            <strong>5 Tahun Keempat</strong> (2003-2008): Pemantapan Doa, Pujian, dan Penyembahan dalam <em>Unity</em>. Visi Tuhan untuk tahun 2004 adalah Prepare the Way for the King of Glory. Untuk mempersiapkan kedatangan Raja Kemuliaan, kita harus semakin sungguh-sungguh dengan Tuhan, sesuai dalam 2 Petrus 3:11-12, <em>"...betapa suci dan salehnya kamu harus hidup yaitu kamu yang menantikan dan mempercepat kedatangan hari Allah..."</em>
                        </p>
                        
                        <p className="isi-content">
                            Visi untuk tahun 2005 adalah Tahun Kebangkitan Gereja. Kemudian, visi untuk 2006 adalah Tahun Kesaksian Gereja, Penginjilan, Mukjizat, Kemenangan, Peperangan Rohani.
                        </p>
                        
                        <p className="isi-content">
                            Pada 4 Juni 2006, <strong>Chuck Pierce</strong>, seorang hamba Tuhan dari Amerika Serikat yang datang dalam rangka acara Global Day of Prayer, memberikan sebuah lukisan anak kunci kepada Pdt. Niko dan mengucapkan nubuatan: <em>"Tuhan berkata bahwa Anda sedang memegang kunci penuaian untuk bangsa ini, dan penuaian akan datang melalui Healing Movement dengan cara yang baru."</em>
                        </p>
                        
                        <p className="isi-content">
                            Pada 8 Agustus 2006, diadakan KKR Kesembuhan Ilahi di Bandung, terjadi banyak mukjizat seperti orang sakit disembuhkan, orang buta melihat, lumpuh berjalan, tumor dan kanker sembuh seketika! Setelah KKR di Bandung ini, diadakan KKR secara beruntun di berbagai lokasi yang mendatangkan banyak mukjizat.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2007 adalah Tahun Peperangan Rohani, Kesembuhan, Mukjizat, Pertobatan. Pada 3 Juni 2007, diperkenalkan nama pelayanan baru bagi GBI Jl. Gatot Subroto sebagai <em>Healing Movement Ministry</em> yang terdiri dari:
                        </p>
                        
                        <p className="isi-content">
                            <ul>
                                <li><em>Healing Movement for the Poor</em> melalui Yayasan Kasih Peduli Masyarakat Indonesia (YKPMI)</li>
                                <li><em>Healing Movement Center</em>, yakni pembangunan Sentul City Convention Center (sekarang SICC atau Sentul International Covention Center)</li>
                                <li><em>Healing Movement Crusade</em> atau Kebaktian Kebangunan Rohani berkeliling di kota-kota</li>
                                <li><em>Healing Movement Camp</em>, sebuah retret pemulihan diri (dulu bernama <em>Retreat Encounter</em>)</li>
                            </ul>
                        </p>
                        
                        <p className="isi-content">
                            Jumlah gereja lokal di bawah pembinaan GBI Jl. Gatot Subroto hingga tahun 2007 tercatat telah berkembang menjadi sekitar 650 gereja (termasuk 66 cabang yang berada di luar negeri) dengan jumlah jemaat yang dibina melalui gembala-gembala rayon dan tim penggembalaan yang tersebar di dalam dan luar negeri sejumlah 175.000 jiwa (dewasa dan anak-anak).
                        </p>
                        
                        <p className="isi-content">
                            Di luar negeri, GBI Jl. Gatot Subroto di bawah penggembalaan Pdt. Niko telah memiliki cabang-cabang di Malaysia, Singapura, Hong Kong, Taiwan, China, Belanda, Jerman, Australia, Kanada, Thailand, dan Amerika Serikat.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2008 adalah Tahun Mukjizat dan Kesembuhan.
                        </p>
                        
                        <p className="isi-content">
                            <strong>5 Tahun Kelima</strong> (2008-2013): Doa, Pujian, dan Penyembahan dalam Unity, Siang dan Malam.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2009 adalah Tahun Mukjizat dan Kesembuhan yang Kreatif. Hingga tahun 2009, telah tercatat sekitar 800 cabang gereja tersebar di Indonesia, termasuk 70 cabang di luar negeri. Jumlah jemaat yang dipercayakan Tuhan untuk dibina melalui gembala-gembala rayon dan tim penggembalaan mencapai kurang lebih 200.000 orang (dewasa dan anak-anak) dengan sekitar 6.000 kelompok sel.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2010 adalah Tahun Pemulihan dan Kelimpahan. Pada 17 Januari 2010, Pdt. Bernard Njotorahardjo menyerahkan Persekutuan Hamba-Hamba Tuhan Garis Depan untuk dibina dan bergandengan tangan bersama Pdt. Niko. Persekutuan ini berasal dari pelbagai denominasi dan menjadi ujung tombak dalam pelayanan Healing Movement Crusade di berbagai tempat.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2011 adalah Tahun Multiplikasi dan Promosi. Hingga tahun 2011, terdapat sekitar 800 gereja cabang/ranting GBI Jl. Gatot Subroto beserta seluruh rayonnya, dengan jumlah jemaat yang mencapai lebih dari 200.000 jiwa.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2012 adalah Tahun Multiplikasi dan Promosi karena Perkenanan Tuhan. Tuntunan Tuhan untuk tahun 2012 didapatkan sehari sebelum <em>Rosh Hashanah</em> (tahun baru orang Yahudi) tahun 5772. Tuhan mengungkapkan bahwa tema tahun 2012 adalah Tahun Perkenanan Tuhan.
                        </p>
                        
                        <p className="isi-content">
                            Dalam Pesan Gembala Pembina atau <em>Pastor’s Message</em> Desember 2011, Pdt. Niko sebagai Gembala Pembina menyampaikan pesan Tuhan bahwa tahun 2011 dan tahun 2012 adalah dua tahun yang saling berhubungan, musim ganda, sehingga visi Multiplikasi dan Promosi tidak akan berakhir pada tahun 2011. Karena itu, tahun 2012 bisa dikatakan juga sebagai Tahun Multiplikasi dan Promosi karena Tuhan Berkenan.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2013 adalah Tahun Pemulihan Seutuhnya <em>(The Year of Recovery to Wholeness), Entering the Next Level</em>, Mujizat yang Kreatif Masih Ada.
                        </p>
                        
                        <p className="isi-content">
                            Dalam ulang tahun ke-25 gereja ini, Pdt. Niko menyampaikan lima tahap perkembangan keluarga besar GBI Jl. Gatot Subroto:
                        </p>
                        
                        <p className="isi-content">
                            <ul>
                                <li>5 tahun pertama (1988-1993): Yang direstorasi adalah pujian dan penyembahan</li>
                                <li>5 tahun kedua (1993-1998): Ditambah dengan doa sehingga menjadi doa, pujian, dan penyembahan</li>
                                <li>5 tahun ketiga (1998-2003): Ditambah dengan unity, sehingga menjadi doa, pujian, dan penyembahan dalam unity</li>
                                <li>5 tahun keempat (2003-2008): Pemantapan doa, pujian, dan penyembahan dalam unity</li>
                                <li>5 tahun kelima (2008-2013): Ditambah dengan siang dan malam, sehingga menjadi Doa, Pujian, dan Penyembahan dalam unity, siang dan malam</li>
                            </ul>
                        </p>
                        
                        <p className="isi-content">
                            Pada tahun 2013, GBI Jl. Gatot Subroto membina lebih dari 800 cabang gereja dan sekitar 250.000 jemaat.
                        </p>
                        
                        <p className="isi-content">
                            Perayaan Natal pun diadakan di Gelora Bung Karno (GBK) pada 25 Desember 2013 dengan tema Mukjizat yang Kreatif itu Nyata.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2014 adalah Tahun Dibuka-Nya Pintu–pintu Mukjizat (<em>The Year of God Opening Doors for Miracles</em>). Sesuai Wahyu 3:8.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2015 adalah Tahun Pelipatgandaan Mukjizat (<em>The Year of Multiplication of Miracles</em>). Sesuai Efesus 3:20 dan Kisah Para Rasul 2:19-20.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2016 adalah Tahun Pembebasan Seutuhnya (<em>The Year of Total Deliverance</em>). Sesuai Lukas 4:18-19 & 21.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2017 adalah Tahun Mukjizat Penuaian (<em>The Year of Miracle Harvest</em>). Sesuai Yoel 2:28-32.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2018 adalah Tahun Permulaan yang Baru (<em>The Year of New Beginnings</em>). Sesuai 2 Korintus 5:17.
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2019 adalah Tahun Kelahiran yang Baru (<em>The Year of A New Birth</em>). Sesuai Yehezkiel 36 : 26 - 27
                        </p>
                        
                        <p className="isi-content">
                            Visi tahun 2020 adalah Tahun Dimensi yang Baru (<em>The Year of A New Dimension</em>). Sesuai 2 Korintus 3 : 18 & Ulangan 28 : 13 - 14
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