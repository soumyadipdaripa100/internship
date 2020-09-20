import React, { Component } from 'react';
import { AiFillCodepenCircle } from "react-icons/ai";

import NavigationItems from '../../components/NavigationItems/NavigationItems'

import './Sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <div>
                    <h5 className="tenderfarm"> <AiFillCodepenCircle /> Tenderfarm</h5>
                </div>
                <NavigationItems />
            </div>
        );
    }
}

export default Sidebar;
