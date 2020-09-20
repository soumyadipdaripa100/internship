import React from 'react'
import {Container, Badge} from 'react-bootstrap'
import { BsBell, BsSearch } from "react-icons/bs";

import './Header.css'
import Avatar from '../../../assets/AirBrush_20171115141929 (2).jpg'

const header = props => (
    <Container className="Header flex">
        <div className="HeadingDiv">
            <h5 className="BestTenders">Best Tenders</h5>
        </div>
        <div className="flex rightHeader">
            <div>
                <Badge variant="danger" className="BadgeHeader">5</Badge>
                <BsBell className="IconBell" />
            </div>
            <div className="InputDiv">
                <BsSearch className="InputIcon" />
                <input type="text" placeholder="   search" className="Input" />
            </div>
            <div className="flex">
                <img src={Avatar} className="Avatar" alt="avatar" />
                <h5>David</h5>
            </div>
        </div>
    </Container>
)

export default header