import React from 'react';
// import { Row, Col, Form } from 'react-bootstrap';
import './Card.scss';
import {
    Col,
    Input,
    Label,
    Row
} from "reactstrap";


export default class CardContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
            card: false
        }
    }
    
    componentDidMount(){
        window.addEventListener("scroll", this.handleZindexTop);
        
    }
    
    handleZindexTop = () => {
        if(window.pageYOffset > 1000){
            if(!this.state.card){
                this.setState({ card: true });
            }
        } else{
            if(this.state.card){
                this.setState({ card: false });
            }
        }
    }

    render() {
        const { address, labelName, labelAddress, labelPhoneNum, labelEmail, labelMessages } = this.props;
        return (
            <div className={`flex-center-cwh ${this.state.card && 'zIndexTop' }`} id="container-card-contact-us">
                <h2 style={{ textTransform: "uppercase", fontSize: "2em", padding: "0px 15px", marginTop: "35px" }}>contact <b>us</b> </h2>
                <p style={{ textAlign: "center", fontSize: "1.2em", padding: "15px 25px", marginBottom: "25px", color: "#757575" }}>{address}</p>

                <span className="linesTest"></span>

                <Row style={{ width: "95%", marginTop: "30px" }}>
                    <Col xs="12" md="6">
                        <Label
                            htmlFor="Nama"
                            className="label-form-custom"
                        >
                            {labelName}
                        </Label>
                        <Input
                            className="form-control-lg"
                            type="text"
                            name="Nama"
                            id="Nama"
                            placeholder=""
                        />
                    </Col>
                    <Col xs="12" md="6">
                        <Label
                            htmlFor="Address"
                            className="label-form-custom"

                        >
                            {labelAddress}
                        </Label>
                        <Input
                            className="form-control-lg"
                            type="text"
                            name="Address"
                            id="Address"
                            placeholder=""
                        />
                    </Col>
                </Row>

                <Row style={{ width: "95%", marginTop: "15px" }}>
                    <Col xs="12" md="6">
                        <Label
                            htmlFor="phoneNum"
                            className="label-form-custom"
                        >
                            {labelPhoneNum}
                        </Label>
                        <Input
                            className="form-control-lg"
                            type="text"
                            name="phoneNum"
                            id="phoneNum"
                            placeholder=""
                        />
                    </Col>
                    <Col xs="12" md="6">
                        <Label
                            htmlFor="labelEmail"
                            className="label-form-custom"
                        >
                            {labelEmail}
                        </Label>
                        <Input
                            className="form-control-lg"
                            type="text"
                            name="labelEmail"
                            id="labelEmail"
                            placeholder=""
                        />
                    </Col>
                </Row>

                <Row style={{ width: "95%", marginTop: "15px" }}>
                    <Col xs="12" md="12">
                        <Label
                            htmlFor="messages"
                            className="label-form-custom"

                        >
                            {labelMessages}
                        </Label>
                        <Input
                            className="form-control-lg"
                            type="textarea"
                            name="messages"
                            id="messages"
                            placeholder=""
                        />
                    </Col>
                </Row>

                <button className="btn custom-btn bg-violet"><i className="far fa-paper-plane mr-2"></i> Kirim</button>
            </div>
        )
    }
}
