import React from 'react';

// Import env variables
import { API_URL, API_PUBLIC_URL } from '@/config/definitions';

async function getSubjects(){
  // Get All subjects from API
  const res = await fetch(API_URL + '/subjects?populate=*');
  const data = await res.json();
  return data;
}

export default async function Page() {
  // Get subject data
  const data = await getSubjects();

  return (
    <div className="page page-home">
      <div className="page-header">
        <div className="page-header-inner container-lg">
          <div className="page-header-left">
            <div className="page-header-title">
              <h1>Welcome to Codefreedom</h1>
            </div>
            <div className="page-header-description">
              <p>Codefreedom is a free online resource for learning to code. We have a wide range of subjects and lessons to help you learn to code.</p>
            </div>
            <div className="page-header-actions">
              <a href="/subjects" className="btn btn-primary">View Subjects</a>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content page-content-subjects">
        <div className="page-content-inner container-lg">
          <div className="page-content-inner-title">
            <h2>Popular Subjects</h2>
            <p>View some of our most viewed subjects</p>
          </div>
          <div className="page-content-inner-content">
            {/* Subjects */}
            <div className='subject-items'>
              {data.data.map((subject) => (
                <div className="subject-item">
                  <div className="subject-item-inner">
                    <div className="subject-item-inner-image">
                      <img src={API_PUBLIC_URL + subject.attributes.subject_icon.data.attributes.url} alt="HTML" />
                    </div>
                    <div className="subject-item-inner-title">
                      <h3>{subject.attributes.subject_name}</h3>
                    </div>
                    <div className="subject-item-inner-description">
                      <p>{subject.attributes.subject_subtext}</p>
                    </div>
                    <div className="subject-item-inner-actions">
                      <a href={`/subjects/${subject.attributes.subject_slug}`} className="btn btn-primary">View Subject</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="page-content page-content-about">
        <div className="page-content-inner container-lg">
          <div className="page-content-inner-title">
            <h2>About Codefreedom</h2>
            <p>Learn more about Codefreedom</p>
          </div>
          <div className="page-content-inner-content">
            <div className="page-content-inner-content-left">
              <div className="page-content-inner-content-left-image">
              </div>
            </div>
            <div className="page-content-inner-content-right">
              <div className="page-content-inner-content-right-title">
                <h3>What is Codefreedom?</h3>
                <p>Codefreedom is a free online resource for learning to code. We have a wide range of subjects and lessons to help you learn to code.</p>

                <h3>Why use Codefreedom?</h3>
                <p>With our easy to follow lessons, you can learn to code in no time. We have a wide range of subjects and lessons to help you learn to code.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}