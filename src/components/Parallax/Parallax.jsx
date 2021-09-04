import React from 'react';
import './Parallax.scss'
import { Row, Col } from 'react-bootstrap';

export default class ParallaxComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render(){
        const { titleSection, srcImg, descriptionSection, logoSection } = this.props;
        return(
            <div className="parallax-custom" style={{ backgroundImage: `url(${srcImg})` }}>
                {
                    logoSection && (
                        <div style={{ position: "relative" }}>
                            <img src="https://www.gbiprj.org/img/icon/kom.jpg" alt="" width="120px" height="" style={{ float:"right", background: "#fff", padding: "10px", position:"absolute", right:"30px", top:"20px" }} />
                        </div>
                    )
                }
                <div className="title-parallax">
                    <h2> { titleSection } </h2>
                </div>
                {
                    logoSection && (
                        <div style={{ position: "relative" }}>
                            <p className="desc">
                                <em>Kehidupan Orientasi Melayani</em>
                            </p>
                        </div>
                    )
                }
            </div>
        )
    }
}