import React from 'react';
import './ImageLink.scss'

export default class ImageLinkComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <a href={this.props.srcTarget}>
                <img src={this.props.srcImage} style={{ maxWidth: '100%' }} />
            </a>
        )
    }
}
