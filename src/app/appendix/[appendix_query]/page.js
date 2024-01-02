/**
 * Subjects page
 * 
 */
import React from 'react';

import { notFound } from 'next/navigation';

// Import env variables
import { API_URL } from '@/config/definitions';

// Import components
import ReactMarkdown from 'react-markdown'; 

/**
 * Get appendix data
 */
async function getAppendix(slug){
    // Get lesson data
    const res = await fetch(API_URL + '/appendices?populate=*&filters\[appendix_slug\]='+slug+'&filters\[status\]=published');
    const data = await res.json();
    return data;
}

export default async function Page({params}) {
    // Get subject data
    const data = await getAppendix(params.appendix_query);
    const appendix = data.data[0].attributes;
    console.log(appendix.lessons);

    // Make sure there are subjects
    if(data.data == null){
        // Navigate to 404 page
        notFound();
    }else{
        return (
        <div className="page page-appendix">
            <div className="page-header">
                <div className="page-header-inner container-lg">
                    <div className="page-header-title">
                        <h1>Appendix</h1>
                    </div>
                    <div className="page-header-description">
                        <p>View appendices here</p>
                    </div>
                </div>
            </div>
            <div className="page-content container-lg">
                <div className="page-content-inner">
                    <div className="page-content-row">
                        {/* Appendices */}
                        <div className='page-content-title'>
                            <h2>{appendix.appendix_name}</h2>
                            <p>{appendix.appendix_description}</p>
                        </div>
                        {appendix.appendix_content != null &&
                            <div className='page-content-elaboration'>
                                <h3>Elaboration</h3>
                                <ReactMarkdown>
                                    {appendix.appendix_content}
                                </ReactMarkdown>
                            </div>
                        }
                        <div className='page-content-related-lessons'>
                            <h3>Related Lessons</h3>
                            <div className='page-content-related-lessons-list'>
                                {appendix.lessons.data.reverse().map((lesson, index) => (
                                    <div className='page-content-related-lessons-list-item' key={index}>
                                        <a href={'/lessons/'+lesson.id}>
                                            <h3>{lesson.attributes.lesson_name} <span>Lesson</span></h3>
                                            <p>{lesson.attributes.lesson_description}</p>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}