/**
 * Lesson page
 * @module lessons/[lesson]/page
 */

import React from 'react';

import { notFound } from 'next/navigation';

// Import env variables
import { API_URL, API_PUBLIC_URL } from '@/config/definitions';

/**
 * Get lesson data from API
 */
async function getData(id){
    // Get lesson data
    const res = await fetch(API_URL + '/lessons?id=' + id + '&populate=*');
    const data = await res.json();
    return data;
}

export default async function Page() {
    // Get lesson data
    const data = await getData(1);

    // Make sure this slug exists
    if(data.data.length == 0){
        // Navigate to 404 page
        notFound();
    } else {
        // Lesson info
        const lesson = data.data[0].attributes;

        const lesson_name = lesson.lesson_name;
        const lesson_description = lesson.lesson_description;

        const subject = lesson.subject.data.attributes;

        console.log(lesson.subject);

        return (
        <div className="page lesson-page">
            <div className="page-header">
                <div className="page-header-inner container-lg">
                    <div className="page-header-title">
                        <h1>{ lesson_name }</h1>
                    </div>
                    <div className="page-header-description">
                        <p>{ lesson_description }</p>
                    </div>
                </div>
            </div>
            <div className="page page-breadcrumb">
                <div className="page-breadcrumb-inner container-lg">
                    <div className="page-breadcrumb-inner-left">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/subjects">Subjects</a></li>
                            <li><a href="/subjects/{subject.subject_slug}">{subject.subject_name}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="page-content container-lg">
                <div className="page-content-inner">
                    {/* Left Navigation */}    
                    <div className="left-column">
                        <div className="left-column-inner">
                        
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="right-column">
                        <div className="right-column-inner">
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}