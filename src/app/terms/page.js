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
        <div className="page page-terms">
            <div className="page-header">
                <div className="page-header-inner container-lg">
                    <div className="page-header-title">
                        <h1>Terms of service</h1>
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
                        <p><b>Byteabsorb Terms of Service</b></p>

                        <p><b>Last Updated: January 1st, 2024</b></p>

                        <p>Welcome to Byteabsorb! Please read these Terms of Service carefully before using our website. By accessing or using Byteabsorb (the "Service"), you agree to comply with and be bound by these Terms. If you do not agree with any part of the Terms, you may not access the Service.</p>

                        <p><b>1. Acceptance of Terms</b></p>

                        <p>By using the Service, you agree to be bound by these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific features of the Service.</p>

                        <p><b>2. Use of the Service</b></p>

                        <p>2.1. Eligibility: You must be at least 13 years old to use Byteabsorb. If you are under 13, you may only use the Service under the supervision of a parent or legal guardian.</p>

                        <p>2.2. Account Creation: To access certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process.</p>

                        <p>2.3. Code of Conduct: You agree to use the Service in accordance with all applicable laws and regulations. You will not engage in any conduct that may disrupt the functionality of the Service or interfere with other users' ability to use the Service.</p>

                        <p><b>3. Content and Intellectual Property</b></p>

                        <p>3.1. User-Generated Content: You may submit content, including code snippets, comments, and other materials. By submitting content, you grant Byteabsorb a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform your content.</p>

                        <p>3.2. Intellectual Property: The Service and its original content, features, and functionality are owned by Byteabsorb and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

                        <p><b>4. Prohibited Activities</b></p>

                        <p>You agree not to engage in any of the following activities:</p>

                        <p>4.1. Unauthorized Access: Attempt to gain unauthorized access to any part of the Service or any related systems or networks.</p>

                        <p>4.2. Malicious Use: Use the Service for any purpose that is illegal or prohibited by these Terms, or to engage in any harmful or malicious activities.</p>

                        <p>4.3. Impersonation: Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</p>

                        <p><b>5. Termination</b></p>

                        <p>We reserve the right to terminate or suspend your account and access to the Service at our sole discretion, without prior notice, for any reason, including but not limited to a breach of these Terms.</p>

                        <p><b>6. Changes to Terms</b></p>

                        <p>We may update these Terms of Service from time to time. Any changes will be effective immediately upon posting. Your continued use of the Service after the posting of the revised Terms constitutes your acceptance of the changes.</p>

                        <p><b>7. Contact Information</b></p>

                        <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:hello@byteabsoorb.com">hello@byteabsorb.com</a>.</p>

                        <p>Thank you for using Byteabsorb! Happy coding!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}