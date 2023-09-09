/**
 * Lesson page
 * @module lessons/[lesson]/page
 */

import React from 'react';
import { ReactDOM } from 'react';

// Markdown
import ReactMarkdown from 'react-markdown'; 

import { notFound } from 'next/navigation';

// Import env variables
import { API_URL, API_PUBLIC_URL } from '@/config/definitions';

/**
 * Get lesson data from API
 */
async function getData(id){
    // Get lesson data
    const res = await fetch(API_URL + '/lessons/' + id + '?populate=*');
    const data = await res.json();
    return data;
}

/**
 * Get lessons under subject
 * @param {*} param0
 */
async function getSubjectLessons(slug){
    // Get lesson data
    const res = await fetch(API_URL + '/subjects?populate=*&filters\[subject_slug\]='+slug+'&filters\[status\]=published');
    const data = await res.json();
    return data;
}

export default async function Page({params}) {
    // Get lesson data
    const data = await getData(params.lesson);

    // Make sure this slug exists
    if(data.data == null){
        // Navigate to 404 page
        notFound();
    } else {
        // Lesson info
        const lesson = data.data.attributes;

        const lesson_name = lesson.lesson_name;
        const lesson_description = lesson.lesson_description;

        const subject = lesson.subject.data.attributes;

        // Get subject lessons
        const subject_lessons = await getSubjectLessons(subject.subject_slug);

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
                            <li><a href={`/subjects/${subject.subject_slug}`}>{subject.subject_name}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="page-content container-lg">
                <div className="page-content-inner row">
                    {/* Left Navigation */}    
                    <div className="left-column col-lg-3">
                        <div className="left-column-inner">
                            <div className="left-column-inner-title">
                                <h3>Lessons</h3>
                            </div>
                            <div className="left-column-inner-content">
                                <ul>
                                    {subject_lessons.data[0].attributes.lessons.data.reverse().map((lesson) => {
                                        if (lesson.id == data.data.id) {
                                            return <li key={lesson.id} className="active"><a href={"/lessons/"+lesson.id}>{lesson.attributes.lesson_name}</a></li>
                                        }else {
                                            return <li key={lesson.id}><a href={"/lessons/"+lesson.id}>{lesson.attributes.lesson_name}</a></li>
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="right-column col-lg-9">
                        <div className="right-column-inner">
                            <div className="right-column-inner-content">
                                {/* Lesson Content */}
                                <ReactMarkdown>
                                {lesson.lesson_content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}