import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './FooterContent.css'

class FooterContent extends Component {
    render() {
        return (
            <div className="container" >
                <div className="footer-left">
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Terms & Conditions</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-right">© Fundwatch 2016, All Rights Reserved.</div>
            </div>
        );
    }
}

export default FooterContent;