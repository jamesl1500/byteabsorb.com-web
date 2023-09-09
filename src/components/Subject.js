import React from 'react';

import { redirect } from 'next/navigation';

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
    const subject_slug = subject.subject_slug;

    return (
        <div onClick={redirectLesson(data.id)} className="lesson" key={data.id}>    
            <div className="lesson-inner">
                <div className="lesson-inner-title">
                    <h5>Subject {data.id}</h5>
                    <h3>{subject_name}</h3>
                    <a href={"/subjects/"+subject_slug}>View Subject</a>
                </div>
            </div>
        </div>
    );
}

export default Subject;