import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Import env variables
import { API_URL, API_PUBLIC_URL } from '@/config/definitions';

import Lesson from '@/components/Lesson';

async function getData(slug){
    const res = await fetch(API_URL + '/subjects?populate=*&filters\[subject_slug\]='+slug+'&filters\[status\]=published', { cache: 'no-store' });
    const data = await res.json();
    return data;
}

async function getSubSubjectLessons(slug){
    // Get lesson data
    const res = await fetch(API_URL + '/sub-subjects?populate=*&filters\[sub_subject_slug\]='+slug+'&filters\[status\]=published', { cache: 'no-store' });
    const data = await res.json();
    return data;
}

async function SubSubjectLessons(slug){
    // Get subject lessons
    const sub_subject_lessons = await getSubSubjectLessons(slug);
    const lessons = sub_subject_lessons.data[0].attributes.lessons.data;

    return (
        <div className='lessons-content-inner'>
            <ul>
                {lessons.map((lesson) => (
                    <li key={lesson.id}>
                        <a href={"/lessons/"+lesson.id}>
                            <h4>{lesson.attributes.lesson_name}</h4>
                            <p>{lesson.attributes.lesson_description}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
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
        const subject_subtext = subject.subject_subtext;
        const subject_description = subject.subject_description;
        const subject_slug = subject.subject_slug;

        const subject_image = subject.subject_icon;
        const subject_image_url = API_PUBLIC_URL + subject_image.data.attributes.url;

        // Get subject sub subjects
        const subject_sub_subjects = subject.sub_subjects;
        
        return (
            <div className="page subjects-page">
                <div className="page-header">
                    <div className="page-header-inner container-lg">
                        <div className='page-header-top'>
                            <div className="page-header-image">
                                {/* Get image from data */}
                                <img src={subject_image_url} alt={subject_name} />
                            </div>
                            <div className="page-header-title">
                                <h1>{subject_name}</h1>
                                <p>{subject_subtext}</p>
                            </div>
                        </div>
                        <div className="page-header-description">
                            <p>{subject_description}</p>
                        </div>
                    </div>
                </div>
                <div className="page-content container-lg">
                    <div className="page-content-inner">
                        <div className="page-content-row">
                            {/* Sub Subjects */}
                            <div className="page-content-section page-content-sub-subjects">
                                <div className="page-content-section-inner">
                                    <div className="page-content-section-title">
                                        <h2>Sections</h2>
                                        <p>View all of our sections related to {subject_name}</p>
                                    </div>
                                    <div className="page-content-section-list">
                                        {/* Loop through subjects */}
                                        <ul>
                                        {subject_sub_subjects.data.map((sub_subject, index) => (
                                            <li key={index}>
                                                <a href={'/subjects/'+ subject_slug +'#'+sub_subject.attributes.sub_subject_slug}>
                                                    {sub_subject.attributes.sub_subject_name}
                                                </a>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                                            
                            {/* Lessons */}
                            <div className="page-content-section page-content-lessons">
                                <div className="page-content-section-inner">
                                    { /* Loop through sub subjects */ }
                                    {subject_sub_subjects.data.map((sub_subject, index) => (
                                        <div className='lessons-content' key={index} id={sub_subject.attributes.sub_subject_slug}>
                                            <div className="page-content-section-title">
                                                <h2 id={sub_subject.attributes.sub_subject_slug}>{sub_subject.attributes.sub_subject_name}</h2>
                                                <p>{sub_subject.attributes.sub_subject_description}</p>
                                            </div>
                                            <div className="page-content-section-list">
                                                {/* Loop through lessons */}
                                                {SubSubjectLessons(sub_subject.attributes.sub_subject_slug)}
                                            </div>
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