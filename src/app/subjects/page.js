/**
 * Subjects page
 * 
 */
import React from 'react';
import { ReactDOM } from 'react';

// Markdown
import ReactMarkdown from 'react-markdown';

import { notFound } from 'next/navigation';

// Import env variables
import { API_URL, API_PUBLIC_URL } from '@/config/definitions';

// Import components
import Subject from '@/components/Subject';

/**
 * Get all subjects
 */
async function getSubjects(){
    // Get All subjects from API
    const res = await fetch(API_URL + '/subjects?populate=*');
    const data = await res.json();
    return data;
}

export default async function Page() {
    // Get subject data
    const data = await getSubjects();

    // Make sure there are subjects
    if(data.data == null){
        // Navigate to 404 page
        notFound();
    }else{
        return (
        <div className="page subjects-page">
            <div className="page-header">
                <div className="page-header-inner container-lg">
                    <div className="page-header-title">
                        <h1>Subjects</h1>
                    </div>
                    <div className="page-header-description">
                        <p>View all of our subjects here</p>
                    </div>
                </div>
            </div>
            <div className="page-content container-lg">
                <div className="page-content-inner">
                    <div className="page-content-row">
                        {/* Subjects */}
                        <div className="page-content-section page-content-lessons">
                            <div className="page-content-section-inner">
                                <div className="page-content-section-list grid">
                                    {data.data.map((subject, index) => (
                                        <Subject data={subject} key={index}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}