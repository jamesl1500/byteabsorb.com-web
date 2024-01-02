/**
 * Terms
 * 
 */
import React from 'react';

import { API_URL, API_PUBLIC_URL } from '@/config/definitions';

import { notFound } from 'next/navigation';

export default async function Page() 
{

    return (
        <div className="page terms-page">
            <div className="page-header">
                <div className="page-header-inner container-lg">
                    <div className="page-header-title">
                        <h1>Terms</h1>
                    </div>
                    <div className="page-header-description">
                        <p>View all of our terms here</p>
                    </div>
                </div>
            </div>
            <div className="page-content container-lg">
                <div className="page-content-inner">
                    <div className="page-content-row">
                        {/* Terms */}

                    </div>
                </div>
            </div>
        </div>
    )
}