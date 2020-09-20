import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Card from './Card/Card'

const cardContainer = props => (
    <Container>
        <Row>
            {
                props.cards.map(card => (
                    <Col sm="4">
                        <Card card={card} />
                    </Col>
                ))
            }
        </Row>
    </Container>
)

export default cardContainer