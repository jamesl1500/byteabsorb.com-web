import React from 'react';

// Import env variables
import { API_URL, API_PUBLIC_URL } from '@/config/definitions';

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
    const res = await fetch(API_URL + '/appendices?filters\[appendix_name\][$contains]='+query+'&populate=*');
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
    const res = await fetch(API_URL + '/subjects?filters\[subject_name\][$contains]='+query+'&populate=*');
    const data = await res.json();
    return data;
}

export default async function Page({params}) {
  // Get subject data
  const appendicies = await searchAppendix(params.search_query);
  const subjects = await searchSubjects(params.search_query);

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
                        <ul>
                            {appendicies.data.map((appendix) => (
                                <li key={appendix.id}>
                                    <a href={API_PUBLIC_URL + '/appendix/' + appendix.attributes.appendix_slug}>
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

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}