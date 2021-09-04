import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Card.scss'

export default class CardMoreInfo extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div id="container-card-more-info-custom">
                <a href="">
                    <p className="title-card">
                        {this.props.titleCard}
                    </p>
                    {
                        this.props.srcImg ?  <img src={this.props.srcImg} alt="" /> : <iframe className="embed-responsive-item" src={this.props.srcVideo} allowFullScreen width="100%" />
                    }

                </a>
            </div>
        )
        
    }
}