import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { BsFillGearFill, BsFillPeopleFill } from "react-icons/bs";

import './Footer.css'

const footer = props => {
    return (
        <Container className="Footer">
            <Row>
                <Col md={{ span: 4, offset: 0 }} className="box">
                    <BsFillGearFill className="boxIcons" />
                </Col>
                <Col md={{ span: 4, offset: 1 }} className="box">
                    <BsFillPeopleFill className="boxIcons" />
                </Col>
            </Row>
        </Container>
    )
}

export default footer