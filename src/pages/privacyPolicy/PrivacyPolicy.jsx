import React, { useState } from 'react';
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (sectionId) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

    const sections = [
        {
            id: 'what-data',
            title: 'What data do we collect?',
            items: [
                'Your domain name and/or IP address',
                'Which internet browser you are using',
                'The device and/or environment you are using',
                'The origin of your visit to our website (such as through a Google search result, through our Facebook page, etc.)',
                'Your surfing behavior and activity on our online services (such as what you look at on the website, what you click, how much time you spend on the website, etc.)',
                'Your viewing of our online advertisements',
                'Your user experience with our online services',
                'Your full name',
                'Your address',
                'Your email address',
                'Your company',
                'Your telephone number',
                'Your requests',
                'Your entries into promotions, contests, or surveys',
                'Any additional information that you directly provide to us (such as emails, phone calls, letters, online contact form information, personal information, etc.)'
            ],
            note: 'Our online services intended to provide information and to collect information only from those over the age of 18. People under the age of 18 are prohibited to provide any information on or through our online services. If we learn that we have collected or received personal information from a child under the age of 18, without verified parental consent, we will try and delete the information collected. We do not knowingly solicit or collect personal information from or about children under the age of 18, and we do not knowingly market our products or services to children under the age of 18.'
        },
        {
            id: 'how-collect',
            title: 'How do we collect this data?',
            content: 'The way we collect this data depends on how you use our online services, request product samples, request quotes, or contact us. Some data is collected automatically as you interact with our online services. Other data is collected directly from you (such as information you provide for a specific purpose, request, etc.) or with your consent. Where required by law, we will obtain your consent for the collection and processing of your information (such as for the purpose of direct marketing). An overview of all possible ways in which data can be collected is listed below:',
            items: [
                'When you visit our website and accept cookies',
                'When you create an account (such as for online tools etc.)',
                'When you contact us (such as via telephone, an online contact form, e-mail, postal mail etc.)',
                'When you request product samples or quotes',
                'When you input data or information into an online tool or form'
            ],
            note: 'Our online services may automatically record certain information through the use of cookies. Unless you adjust your browser settings to refuse the use of cookies, our online services will issue cookies when you are on our website. We may use Google Analytics, which uses cookies and/or text files that are stored on your computer that allow an analysis of your use of our website.'
        },
        {
            id: 'why-collect',
            title: 'Why do we collect these data?',
            content: 'It is necessary for us to collect certain data. For example, we cannot contact you unless we have your e-mail address, name, or phone number, and we need an address to which product samples can be shipped. In addition, we also collect certain data for marketing purposes. An overview of possible reasons we collect your data is listed below:',
            items: [
                'To provide the samples, quotes, and/or services you request (such as quotations, recommended layouts, product samples, product literature, offers, etc.)',
                'To process and ship product samples',
                'To be able to contact you, for example, about product sample requests, quote requests, or branded gear, or to answer questions when you have contacted us',
                'To manage your accounts and provide you with support/customer service',
                'To assess our existing or potential business relationship',
                'To enforce our terms and conditions',
                'To conduct sales and marketing activities, including, but not limited to, pursuing marketing prospects, conducting market research, evaluating our advertising effectiveness and managing our brand',
                'To manage our business',
                'To evaluate, operate and improve our business by enhancing our products and services, through the development of new products and services, managing the relationships with our customers, performing billing, accounting, auditing, reconciliation and collection activities',
                'To provide you with the best and most personal customer experience',
                'To improve your surfing and experience of our online services'
            ]
        },
        {
            id: 'how-long',
            title: 'How long do we store these data?',
            content: 'We store your data only for as long as is necessary for the purposes mentioned in this Privacy Policy, in accordance with reasonable business practices and applicable laws.'
        },
        {
            id: 'how-protect',
            title: 'How do we protect these data?',
            content: 'We take appropriate security measures (such as physical, electronic, and administrative safeguards) to protect any data we collect from unauthorized or inappropriate access. We restrict access to information about you to those workers who need to know the information in order to achieve the purposes mentioned in this Privacy Policy.'
        },
        {
            id: 'policy-changes',
            title: 'Does this Privacy Policy ever change?',
            content: 'We reserve the right to modify or supplement this privacy policy. Please check this Privacy Policy periodically to inform yourself of any changes.'
        }
    ];

    return (
        <div className={styles.privacyPolicy}>
            <div className={styles.privacyPolicy__container}>
                <header className={styles.privacyPolicy__header}>
                    <h1 className={styles.privacyPolicy__title}>Privacy Policy</h1>
                    <p className={styles.privacyPolicy__intro}>
                        When you use our online services, contact us (such as via telephone, an online contact form or e-mail, etc.),
                        request product samples, or request quotes, we may process and collect your personal data. This privacy policy
                        explains which data are collected, how we store and use the data, and what your rights are with regard to your data.
                    </p>
                </header>

                <div className={styles.privacyPolicy__content}>
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className={`${styles.privacyPolicy__section} ${activeSection === section.id ? styles['privacyPolicy__section--active'] : ''}`}
                        >
                            <button
                                className={styles.privacyPolicy__sectionHeader}
                                onClick={() => toggleSection(section.id)}
                                aria-expanded={activeSection === section.id}
                            >
                                <h2 className={styles.privacyPolicy__sectionTitle}>{section.title}</h2>
                                <span className={styles.privacyPolicy__icon}>
                  {activeSection === section.id ? '−' : '+'}
                </span>
                            </button>

                            <div className={styles.privacyPolicy__sectionBody}>
                                {section.content && (
                                    <p className={styles.privacyPolicy__description}>{section.content}</p>
                                )}

                                {section.items && (
                                    <ul className={styles.privacyPolicy__list}>
                                        {section.items.map((item, index) => (
                                            <li key={index} className={styles.privacyPolicy__listItem}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.note && (
                                    <div className={styles.privacyPolicy__note}>
                                        <strong>Note:</strong> {section.note}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <footer className={styles.privacyPolicy__footer}>
                    <p>Last Updated: October 2025</p>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;