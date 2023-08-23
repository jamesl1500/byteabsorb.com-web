/**
 * Header
 * @module temps/header
 * @requires react
 * 
 * 
 */
import React from 'react';
import Image from 'next/image';

import Logo from '../assets/logos/codefreedom-logo-white-black-text.png';

const header = () => {
    return (
        <header className="header-main container-lg">
            <div className="inner-header container">
                <div className="header-row row">
                    <div className="header-branding col-3">
                        <a href="/">
                            <Image className="header-branding-logo" src={Logo} alt="CodeFreedom Logo" />
                        </a>
                    </div>
                    <div className="header-navigation col-6">
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">HTML</a></li>
                                <li><a href="/about">CSS</a></li>
                                <li><a href="/about">JavaScript</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-search col-3">
                        <form action="/search" method="get">
                            <input type="text" name="q" placeholder="Search..." autoComplete="none"/>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default header;