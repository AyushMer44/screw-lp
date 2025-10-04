import React, { useState } from 'react';
import styles from './TermsAndConditions.module.scss';

const TermsAndConditions = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (sectionId) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

    const sections = [
        {
            id: 'acceptance',
            title: '1. Acceptance of Terms',
            content: 'Welcome to Rajog Ground Screw. These terms and conditions govern the use of our products and services, including our website, and form a binding agreement between you (the "Customer") and Rajog Ground Screw. By purchasing our products or using our services, you agree to these terms.'
        },
        {
            id: 'orders',
            title: '2. Orders and Payment',
            items: [
                {
                    subtitle: 'Order Placement',
                    text: 'You may place orders for Products through the Website or by contacting our sales team directly.'
                },
                {
                    subtitle: 'Pricing and Availability',
                    text: 'Product prices and availability are subject to change without notice. We will confirm the final price and availability of your order before processing your payment.'
                },
                {
                    subtitle: 'Payment Methods',
                    text: 'We accept various payment methods. Payment is due in full at the time you place your order.'
                },
                {
                    subtitle: 'Order Confirmation',
                    text: 'Once your order is placed and payment is confirmed, you will receive an email confirmation with your order details.'
                }
            ]
        },
        {
            id: 'product-info',
            title: '3. Product Information',
            items: [
                {
                    subtitle: 'Product Descriptions',
                    text: 'We strive to provide accurate and up-to-date information on the Website regarding product specifications, load capacities, and suitability for various applications. However, we cannot guarantee that all information is error-free.'
                },
                {
                    subtitle: 'Engineering Requirements',
                    text: 'It is your responsibility to ensure the Products you purchase are suitable for your intended use and comply with all relevant building codes and engineering requirements. We recommend consulting with a qualified engineer to determine the appropriate size, quantity, and installation method for your specific project.'
                },
                {
                    subtitle: 'Custom Products',
                    text: 'We offer custom ground screw solutions. For custom orders, detailed engineering specifications will be required to ensure the product meets your specific needs.'
                }
            ]
        },
        {
            id: 'delivery',
            title: '4. Delivery and Shipping',
            items: [
                {
                    subtitle: 'Delivery Times',
                    text: 'Delivery times will be provided at the time you place your order and are subject to change due to factors beyond our control. We will use commercially reasonable efforts to deliver your Products within the estimated timeframe.'
                },
                {
                    subtitle: 'Shipping Costs',
                    text: 'Shipping costs will be calculated at checkout based on your order details and delivery location.'
                },
                {
                    subtitle: 'Risk of Loss',
                    text: 'Once the Products are shipped, the risk of loss and title to the Products pass to you. We are not responsible for any loss or damage to the Products during shipping.'
                }
            ]
        },
        {
            id: 'installation',
            title: '5. Installation',
            items: [
                {
                    subtitle: 'Professional Installation Recommended',
                    text: 'We strongly recommend that our Products are installed by a qualified and experienced professional familiar with ground screw installation techniques and local building codes.'
                },
                {
                    subtitle: 'Installation Instructions',
                    text: 'We may provide general installation instructions for informational purposes only. These instructions do not constitute professional advice, and you are solely responsible for ensuring the safe and proper installation of the Products.'
                }
            ]
        },
        {
            id: 'warranties',
            title: '6. Warranties',
            items: [
                {
                    subtitle: 'Limited Warranty',
                    text: 'We offer a limited warranty on our Products against manufacturing defects. The specific warranty terms will be provided with your product purchase.'
                },
                {
                    subtitle: 'Warranty Claims',
                    text: 'To make a warranty claim, please contact us within the warranty period with proof of purchase and a detailed description of the issue.'
                }
            ]
        },
        {
            id: 'limitation',
            title: '7. Limitation of Liability',
            content: 'We will not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from or related to the use of the website or the products.'
        },
        {
            id: 'intellectual',
            title: '8. Intellectual Property',
            content: 'The Website and all content, including but not limited to text, graphics, logos, images, and software, are the property of Rajog Ground Screw or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, distribute, or commercially exploit any of the content without our express written permission.'
        },
        {
            id: 'termination',
            title: '9. Termination',
            content: 'We may terminate your access to the Website or your ability to purchase Products for any reason, at any time, without notice.'
        },
        {
            id: 'governing',
            title: '10. Governing Law',
            content: 'These Terms shall be governed by and construed in accordance with the laws of India without regard to its conflict of laws provisions.'
        },
        {
            id: 'dispute',
            title: '11. Governing Law and Dispute Resolution',
            content: 'These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Rajog Ground Screw is headquartered. Any disputes arising out of or related to these Terms shall be resolved through negotiation. If negotiation fails, disputes shall be settled by binding arbitration in the specified jurisdiction.'
        },
        {
            id: 'amendments',
            title: '12. Amendments',
            content: 'Rajog Ground Screw reserves the right to amend these Terms at any time. Changes will be effective upon posting on our website.'
        },
        {
            id: 'contact',
            title: '13. Contact Information',
            content: 'For any questions or concerns regarding these Terms, please contact us at:',
            contactInfo: {
                company: 'Rajog Ground Screw',
                address: 'R, 413, Rabale MIDC Rd, MIDC Industrial Area, Rabale Navi Mumbai, Maharashtra 400701',
                email: 'contact@rajoggroundscrew.com',
                phone: '+919987995568'
            }
        }
    ];

    return (
        <div className={styles.termsConditions}>
            <div className={styles.termsConditions__container}>
                <header className={styles.termsConditions__header}>
                    <h1 className={styles.termsConditions__title}>Terms & Conditions</h1>
                    <p className={styles.termsConditions__intro}>
                        Welcome to Rajog Ground Screw. Please read these terms and conditions carefully before using our
                        products and services. By purchasing our products or using our services, you agree to be bound by these terms.
                    </p>
                </header>

                <div className={styles.termsConditions__content}>
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className={`${styles.termsConditions__section} ${activeSection === section.id ? styles['termsConditions__section--active'] : ''}`}
                        >
                            <button
                                className={styles.termsConditions__sectionHeader}
                                onClick={() => toggleSection(section.id)}
                                aria-expanded={activeSection === section.id}
                            >
                                <h2 className={styles.termsConditions__sectionTitle}>{section.title}</h2>
                                <span className={styles.termsConditions__icon}>
                  {activeSection === section.id ? '−' : '+'}
                </span>
                            </button>

                            <div className={styles.termsConditions__sectionBody}>
                                {section.content && (
                                    <p className={styles.termsConditions__description}>{section.content}</p>
                                )}

                                {section.items && (
                                    <div className={styles.termsConditions__items}>
                                        {section.items.map((item, index) => (
                                            <div key={index} className={styles.termsConditions__item}>
                                                <h3 className={styles.termsConditions__subtitle}>{item.subtitle}</h3>
                                                <p className={styles.termsConditions__text}>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.contactInfo && (
                                    <div className={styles.termsConditions__contact}>
                                        <p className={styles.termsConditions__contactCompany}>{section.contactInfo.company}</p>
                                        <p className={styles.termsConditions__contactDetail}>{section.contactInfo.address}</p>
                                        <p className={styles.termsConditions__contactDetail}>
                                            <strong>Email:</strong> <a href={`mailto:${section.contactInfo.email}`}>{section.contactInfo.email}</a>
                                        </p>
                                        <p className={styles.termsConditions__contactDetail}>
                                            <strong>Phone:</strong> <a href={`tel:${section.contactInfo.phone}`}>{section.contactInfo.phone}</a>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <footer className={styles.termsConditions__footer}>
                    <p>Last Updated: October 2025</p>
                </footer>
            </div>
        </div>
    );
};

export default TermsAndConditions;