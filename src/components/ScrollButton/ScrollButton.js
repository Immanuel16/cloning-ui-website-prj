import React from 'react';

export default class ScrollButtonComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
    }
    
    toggleVisible(){
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
            this.setState({
                visible: true
            })
        } else if(scrolled <= 300){
            this.setState({
                visible: false
            })
        }
    }
}