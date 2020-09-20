import React, { Component } from 'react';
// import {Row, Col} from 'react-bootstrap'

import Header from '../../components/Main/Header/Header'
import CardContainer from '../../components/Main/CardContainer/CardContainer'

import './Main.css'

import apple from '../../assets/apple_logo.png'
import nike from '../../assets/nike.png'
import samsung from '../../assets/Samsung_Logo.png'
import evernote from '../../assets/evernote.png'
import twitter from '../../assets/Twitter-Logo.png'
import sound from '../../assets/soundcloud_logo.jpg'

class Main extends Component {

    state = {
        cards: [
            {
                title: 'Apple Inc.',
                logo: apple,
                timer: '02d:15h:54m',
                color: 'yellow',
                desc: 'IOS 10 Lead Team Design',
                price: [89, 88.5, 15.2]
            },
            {
                title: 'Nike Inc.',
                logo: nike,
                timer: '10d:21h:33m',
                color: 'yellow',
                desc: 'Full Winter 2016 commercial',
                price: [254, 14.5, 5.9]
            },
            {
                title: 'Samsung Electronics Co. Ltd',
                logo: samsung,
                timer: '23d:05h:17m',
                color: 'yellow',
                desc: 'Samsung Center App Design',
                price: [642, 10.2, 28.5]
            },
            {
                title: 'Evernote Corp.',
                logo: evernote,
                timer: '02m:20d:15h',
                color: 'gray',
                desc: 'Full Product Redesign',
                price: [856, 8.7, 67.4]
            },
            {
                title: 'Twitter Inc.',
                logo: twitter,
                timer: '03m:14d:06h',
                color: 'gray',
                desc: 'Mobile Clients Design',
                price: [964, 5, 10.3]
            },
            {
                title: 'Soundcloud LLC.',
                logo: sound,
                timer: '03m:10d:22h',
                color: 'gray',
                desc: 'Innovative Product Monetization',
                price: [230, 4.9, 39.2]
            },
        ],
    }

    render() {
        return (
            <div className="Main">
                <Header />
                <CardContainer cards={this.state.cards}  />
            </div>
        );
    }
}

export default Main;
