import React from 'react';
import './Card.scss'

export default class CardComponent extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="flex-center-cwh" id="container-card-custom">
                <a href="">
                    <i className={`${this.props.icons_name} icon-header-card ${this.props.icons_name_specific}`}></i>
                    <p className="section-title-card">{this.props.text_title}</p>
                    <span className="section-subtitle-card">{this.props.text_subtitle}</span>
                </a>
            </div>
        )
        
    }
}