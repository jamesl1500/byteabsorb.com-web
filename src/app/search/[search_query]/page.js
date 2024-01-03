import React from 'react';

// Import env variables
import { API_URL, APP_URL } from '@/config/definitions';

// Import components
import Subject from '@/components/Subject';

/**
 * SearchAppendix
 * ------------------
 * Search api for appendicies
 * 
 * @param {*} query
 * @returns array
 */
async function searchAppendix(query){
    // Get All subjects from API
    const res = await fetch(API_URL + '/appendices?filters\[appendix_name\][$contains]='+query+'&populate=*', { cache: 'no-store' });
    const data = await res.json();
    return data;
}

/**
 * SearchSubjects
 * ------------------
 * Search api for subjects
 * 
 * @param {*} query
 * @returns array
 */
async function searchSubjects(query){
    // Get All subjects from API
    const res = await fetch(API_URL + '/subjects?filters\[subject_name\][$contains]='+query+'&populate=*', { cache: 'no-store' });
    const data = await res.json();
    return data;
}

/**
 * SearchLessons
 * ------------------
 * Search api for lessons
 * 
 * @param {*} query
 * @returns array
 */
async function searchLessons(query){
    // Get All subjects from API
    const res = await fetch(API_URL + '/lessons?filters\[lesson_name\][$contains]='+query+'&populate=*', { cache: 'no-store' });
    const data = await res.json();
    return data;
}

export default async function Page({params}) {
  // Get subject data
  const appendicies = await searchAppendix(params.search_query);
  const subjects = await searchSubjects(params.search_query);
  const lessons = await searchLessons(params.search_query);

  return (
    <div className="page page-search">
        <div className="page-header">
            <div className="page-header-inner container-lg">
                <div className="page-header-title">
                    <h1>Search</h1>
                </div>
                <div className="page-header-description">
                    <p>Lets find what you are ooking for!</p>
                </div>
            </div>
        </div>
        <div className="page-content container-lg">
            <div className="page-content-inner">
                <div className="page-content-row appendix-search-results">
                    {/* Appendix search results */}
                    <div className='appendix-search-results-title'>
                        <h2>Appendix</h2>
                        <p>Search our appendix</p>
                    </div>
                    <div className='appendix-search-results-inner'>
                        {appendicies.data.length == 0 &&
                            <p>No results found</p>
                        }
                        <ul>
                            {appendicies.data.map((appendix) => (
                                <li key={appendix.id}>
                                    <a href={APP_URL + '/appendix/' + appendix.attributes.appendix_slug}>
                                        {appendix.attributes.appendix_name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="page-content-row subjects-search-results">
                    {/* Subjects search results */}
                    <div className='subjects-search-results-title'>
                        <h2>Subjects</h2>
                        <p>Search our subjects</p>
                    </div>
                    <div className='subjects-search-results-inner grid'>
                        {subjects.data.length == 0 &&
                            <p>No results found</p>
                        }
                        {subjects.data.map((subject, index) => (
                            <Subject data={subject} key={index}/>
                        ))}
                    </div>
                </div>
                <div className="page-content-row lessons-search-results">
                    {/* Lessons search results */}
                    <div className='lessons-search-results-title'>
                        <h2>Lessons</h2>
                        <p>Search our lessons</p>
                    </div>
                    <div className='lessons-search-results-inner'>
                        <ul>
                            {lessons.data.length == 0 &&
                                <p>No results found</p>
                            }
                            {lessons.data.map((lesson) => (
                                <li key={lesson.id}>
                                    <a href={APP_URL + '/lessons/' + lesson.id}>
                                        <h4>{lesson.attributes.lesson_name} <span>Lesson</span></h4>
                                        <p>{lesson.attributes.lesson_description}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}