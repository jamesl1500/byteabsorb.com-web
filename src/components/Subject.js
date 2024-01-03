import React from 'react';

import { API_PUBLIC_URL } from '@/config/definitions';

import Image from 'next/image';

/**
 * Redirect function for onClick events
 */
function redirectLesson(id){
    //redirect('/lessons/'+id);
}

/**
 * Lesson componant to display lesson information in a block format
 * @param {*} param0 
 * @returns 
 */
const Subject = ({ data }) => {
    const subject = data.attributes;
    const subject_name = subject.subject_name;
    const subject_subtext = subject.subject_subtext;
    const subject_slug = subject.subject_slug;
    const subject_image = API_PUBLIC_URL + subject.subject_icon.data.attributes.url;

    console.log(subject);

    return (
        <div onClick={redirectLesson(data.id)} className="lesson" key={data.id}>    
            <div className="lesson-inner">
                <div className="lesson-inner-image">
                    <img src={subject_image} alt={subject_name} />
                </div>
                <div className="lesson-inner-title">
                    <h5>Subject {data.id}</h5>
                    <h3>{subject_name}</h3>
                    <p>{subject_subtext}</p>
                    <a href={"/subjects/"+subject_slug}>View Subject</a>
                </div>
            </div>
        </div>
    );
}

export default Subject;