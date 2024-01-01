/**
 * Footer
 * @module footer
 * @requires react
 * 
 */
import React from 'react';
import Image from 'next/image';

import Logo from '../assets/logos/codefreedom-logo-white-black-text.png';

const footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner container-lg">
                <div className="footer-top">
                    <div className="footer-top-inner">
                        <div className="footer-top-row footer-logo">
                            <Image className="header-branding-logo" src={Logo} alt="CodeFreedom Logo" />
                        </div>
                        <div className="footer-top-row footer-navigation">
                            <div className='footer-navigation-row'>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/subjects/html">HTML</a></li>
                                    <li><a href="/subjects/css">CSS</a></li>
                                    <li><a href="/subjects/javascript">JavaScript</a></li>
                                    <li><a href="/subjects/python">Python</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-copyright">
                    <p>Codefreedom is a free online resource for learning to code. We have a wide range of subjects and lessons to help you learn to code. When using our website you agree to our <a href="">Terms of service</a> and <a href="">Privacy Policy</a></p>
                    <p>&copy; <a href="https://lattentechnologies.com">Latten Technologies, LLC</a>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default footer;