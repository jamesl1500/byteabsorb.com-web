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
const Lesson = ({ data }) => {
    const lesson = data.attributes;
    const lesson_name = lesson.lesson_name;
    const lesson_description = lesson.lesson_description;

    return (
        <div onClick={redirectLesson(data.id)} className="lesson" key={data.id}>    
            <div className="lesson-inner">
                <div className="lesson-inner-title">
                    <h5>Lesson {data.id}</h5>
                    <h3>{lesson_name}</h3>
                    <a href={"/lessons/"+data.id}>View Lesson</a>
                </div>
            </div>
        </div>
    );
}

export default Lesson;