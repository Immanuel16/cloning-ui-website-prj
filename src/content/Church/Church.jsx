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


export default class ChurchLayout extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <React.Fragment>
                <Header 
                    title={this.props.titleBar}
                />
                <ParallaxComponent 
                    srcImg="https://home.gbiprj.org/img/gbiprj.org/header_img/default.jpg"
                    titleSection={this.props.titleSectionChurch}
                />
                
            
            </React.Fragment>
        )
    }
}