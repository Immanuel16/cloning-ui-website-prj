import Aos from 'aos';
import "aos/dist/aos.css";
import React, { Component } from 'react';
import './Card.scss';


export default class CardSermon extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        Aos.init();
    }

    render() {
        const { labelIbadah, srcImgPastor, titleCardName, pastorName, timeSermon, ringkasanKhotbah, readMore } = this.props;
        return (
            <div id="container-card-sermon-custom" className="h-100">
                <a href="">
                    <figure>
                        <img src={srcImgPastor} />
                    </figure>
                    <div className="detail-sermon">
                        <h5 className="title-card">
                            {titleCardName}
                        </h5>
                        {
                            labelIbadah.map(label => {
                                return <span className="label-ibadah">
                                    {label}
                                </span>
                            })
                        }
                        <div className="mt-3 section-info-sermon">
                            <i className="far fa-user"></i>
                            <em>{pastorName}</em>
                        </div>
                        <div className="mt-2 section-info-sermon">
                            <i className="far fa-calendar-alt"></i>
                            <em>{timeSermon}</em>
                        </div>
                        <p className="ringkasan-khotbah" style={{ display: "inline-block" }}>
                            {ringkasanKhotbah} <u>{readMore}</u>
                        </p> 
                        
                    </div>
                </a>
            </div>
        )
    }
}