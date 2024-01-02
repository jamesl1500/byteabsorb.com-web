"use client";

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

/**
 * SearchSubmit function for search form
 */

const header = () => {
    async function searchSubmit(event) {    
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const search_query = formData.get('search_query');
        window.location.href = '/search/'+search_query;
    }

    return (
        <header className="header-main">
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
                                <li><a href="/subjects/html">HTML</a></li>
                                <li><a href="/subjects/css">CSS</a></li>
                                <li><a href="/subjects/javascript">JavaScript</a></li>
                                <li><a href="/subjects/python">Python</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-search col-3">
                        <form action="/search" method="get" onSubmit={searchSubmit}>
                            <input type="text" name="search_query" placeholder="Search..." autoComplete="none"/>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default header;