/**
 * Terms
 * 
 */
import React from 'react';

export default async function Page() 
{

    return (
        <div className="page page-about">
            <div className="page-header">
                <div className="page-header-inner container-lg">
                    <div className="page-header-title">
                        <h1>About Us</h1>
                    </div>
                    <div className="page-header-description">
                        <p>Learn more about us</p>
                    </div>
                </div>
            </div>
            <div className="page-content container-lg">
                <div className="page-content-inner">
                    <div className="page-content-row">
                        {/* About us */}
                        <p>
                            Byteabsorb is a website that provides free educational resources for students and teachers.
                        </p>
                        <p>
                            We are commited to teaching people around the world how to code and we are commited to providing free resources for teachers to use in their classrooms. Or if you are a student, you can use our resources to learn to code.
                        </p>    
                    </div>
                </div>
            </div>
        </div>
    )
}