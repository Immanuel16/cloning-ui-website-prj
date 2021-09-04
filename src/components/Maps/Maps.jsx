import React from 'react';


export class MapsComponent extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <iframe src={this.props.srcMaps}
                width={this.props.widthMaps}
                height={this.props.heightMaps}
                style={{ 
                    border: 0, minHeight: this.props.minHeightMaps
                }}
                allowFullScreen
                loading="lazy"
            >
            </iframe>
        )
    }
}