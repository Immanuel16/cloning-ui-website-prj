import React, { Component } from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { Image } from 'react-bootstrap';
export default class FancyBoxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const options = {
            settings: {
                overlayColor: "rgb(25, 136, 124)",
                autoplaySpeed: 1500,
                transitionSpeed: 900,
            },
            buttons: {
                backgroundColor: "#1b5245",
                iconColor: "rgba(126, 172, 139, 0.8)",
            },
            caption: {
                captionColor: "#a6cfa5",
                captionFontFamily: "Raleway, sans-serif",
                captionFontWeight: "300",
                captionTextTransform: "uppercase",
            }
        };
        return (
            <div style={{ marginBotton: "100px" }}>
                <SimpleReactLightbox>
                    <SRLWrapper options={options}>
                        <a href={this.props.source} >
                            <Image src={this.props.source} width="100%" />
                        </a>
                    </SRLWrapper>
                </SimpleReactLightbox>
            </div>
        )
    }
}