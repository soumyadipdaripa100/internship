import React from 'react';
import {Badge} from 'react-bootstrap'
import { BsFillHouseDoorFill, BsSearch, BsChatQuoteFill, BsFillEnvelopeFill, BsFillPersonFill } from "react-icons/bs";

import AppleDiv from './AppleDiv/AppleDiv'
import Footer from './Footer/Footer'

import './NavigationItems.css'

const NavigationItems = (props) => {
    return (
        <div className="NavigationItems">
            <ul>
                <li><BsFillHouseDoorFill className="Icons" /> Company</li>
                <li className="active"><BsSearch  className="Icons yellowBar" />  Explore</li>
                <ul className="innerUL">
                    <li>Latest Tenders</li>
                    <li className="active">Best Tenders</li>
                    <li>Team Search</li>
                </ul>
                <li>
                    <BsChatQuoteFill className="Icons" /> Notifications
                    <Badge variant="warning" className="Badge">1</Badge>
                </li>
                <AppleDiv />
                <li><BsFillEnvelopeFill className="Icons" /> Messages</li>
                <li><BsFillPersonFill className="Icons" /> Profile</li>
            </ul>
            <Footer />
        </div>
    );
}

export default NavigationItems;
