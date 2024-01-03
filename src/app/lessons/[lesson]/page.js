/**
 * Lesson page
 * @module lessons/[lesson]/page
 */

import React from 'react';

// Head
import Head from 'next/head';

// Markdown
import ReactMarkdown from 'react-markdown'; 

import { notFound } from 'next/navigation';

// Import env variables
import { API_URL } from '@/config/definitions';

/**
 * Get lesson data from API
 */
async function getData(id){
    // Get lesson data
    const res = await fetch(API_URL + '/lessons/' + id + '?populate=*', { cache: 'no-store' });
    const data = await res.json();
    return data;
}

/**
 * Get lessons under subject
 * @param {*} param0
 */
async function getSubjectLessons(slug){
    // Get lesson data
    const res = await fetch(API_URL + '/subjects?populate=*&filters\[subject_slug\]='+slug+'&filters\[status\]=published', { cache: 'no-store' });
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

        const next_lesson_id = data.data.id + 1;
        const next_lesson_data = await getData(next_lesson_id);

        if(next_lesson_data.data == null){
            var next_lesson = null;
        }else{
            var next_lesson = next_lesson_data.data;
        }

        const appendicies = lesson.appendices;

        return (
            <>
            <Head>
                <title>{lesson_name} | Codefreedom</title>
            </Head>
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
                                    {/* Appendicies */}
                                    {appendicies == null ? null :
                                        <div className="appendicies">
                                            <div className="appendicies-inner">
                                                <div className="appendicies-inner-title">
                                                    <h4>Appendix</h4>
                                                </div>
                                                <div className="appendicies-inner-content">
                                                    <ul>
                                                        {appendicies.data.map((appendix) => {
                                                            return (
                                                                <li key={appendix.id}>
                                                                    <a href={"appendix/" + appendix.attributes.appendix_slug}>{appendix.attributes.appendix_name}</a>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {/* Next Lesson button */}
                                    <div className="next-lesson">
                                        {next_lesson == null ? null : 
                                            <a href={"/lessons/"+next_lesson.id}>
                                                <div className="next-lesson-inner">
                                                    <div className="next-lesson-inner-title">
                                                        <h3>Next Lesson:</h3>
                                                    </div>
                                                    <div className="next-lesson-inner-content">
                                                        <h4>{next_lesson.attributes.lesson_name}</h4>
                                                    </div>
                                                </div>
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}