import React from 'react';
import { notFound } from 'next/navigation';

// Import env variables
import { API_URL, API_PUBLIC_URL } from '@/config/definitions';

import Lesson from '@/components/Lesson';

async function getData(slug){
    const res = await fetch(API_URL + '/subjects?populate=*&filters\[subject_slug\]='+slug+'&filters\[status\]=published');
    const data = await res.json();
    return data;
}

export default async function Page({params}) 
{
    const data = await getData(params.slug);

    // Make sure this slug exists
    if(data.data.length == 0){
        // Navigate to 404 page
        notFound();
    }else{
        // Subject info
        const subject = data.data[0].attributes;

        const subject_name = subject.subject_name;
        const subject_description = subject.subject_description;

        const subject_image = subject.subject_icon;
        const subject_image_url = API_PUBLIC_URL + subject_image.data.attributes.url;

        return (
            <div className="page subject-page">
                <div className="page-header">
                    <div className="page-header-inner container-lg">
                        <div className="page-header-image">
                            {/* Get image from data */}
                            <img src={subject_image_url} alt="" />
                        </div>
                        <div className="page-header-title">
                            <h1>{subject_name}</h1>
                        </div>
                        <div className="page-header-description">
                            <p>{subject_description}</p>
                        </div>
                    </div>
                </div>
                <div className="page-content container-lg">
                    <div className="page-content-inner">
                        <div className="page-content-row">
                            {/* Lessons */}
                            <div className="page-content-section page-content-lessons">
                                <div className="page-content-section-inner">
                                    <div className="page-content-section-title">
                                        <h2>Lessons</h2>
                                        <p>View all of our free lessons related to {subject_name}</p>
                                    </div>
                                    <div className="page-content-section-list grid">
                                        {/* Loop through lessons */}
                                        {subject.lessons.data.reverse().map((lesson, index) => (
                                            <Lesson data={lesson} key={index} />
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