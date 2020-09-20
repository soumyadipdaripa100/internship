import React from 'react'
import {Row, Col} from 'react-bootstrap'

import './Card.css'

const card = props => (
    <div className="Card">
        <h5>{props.card.title}</h5>
        <div className="ImgDiv">
            <img src={props.card.logo} alt="logo" />
        </div>
        <h4 className={props.card.color}>{props.card.timer}</h4>
        <h5>{props.card.desc}</h5>
        <Row className="Price">
            <Col>
                <p>{props.card.price[0]}</p>
                <p>Teams</p>
            </Col>
            <Col>
                <p>${props.card.price[1]}</p>
                <p>budget</p>
            </Col>
            <Col>
                <p>{props.card.price[2]}%</p>
                <p>success</p>
            </Col>
        </Row>
    </div>
)

export default card