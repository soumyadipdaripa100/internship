import React from 'react'
import {Container} from 'react-bootstrap'
import { AiFillApple } from "react-icons/ai";

import './AppleDiv.css'

const appleDiv = props => {
    return (
        <Container className="appleDiv">
            <div className="flex">
                <div className="LogoDiv">
                    <AiFillApple className="Logo" />
                </div>
                <div className="desc">
                    <p className="p1"><b>Apple Inc.</b></p>
                    <p className="p2">ending soon</p>
                </div>
            </div>
            <p className="p3">Hey, don't forget, there's still time to get that tenders</p>
        </Container>
    )
}

export default appleDiv