import React from 'react'
import styles from './NewSection.module.scss'

const NewSection = () => {
    return (
        <section className={styles.newSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Image - Floated to Right */}
                    <div className={styles.image}>
                        <img
                            src='/assets/about/aboutImg.png'
                            alt="BigScrew Solutions"
                        />
                    </div>

                    {/* Text Content - Wraps around image */}
                    <div className={styles.text}>
                        <p>
                            <strong>BIGSCREW SOLUTIONS</strong> is a new-age foundation technology company rooted in over four decades of manufacturing excellence. Founded by industry veterans with deep experience in sheet metal fabrication, precision machining, and large-scale engineering, the company brings proven industrial expertise to the world of modern foundation systems.
                        </p>
                        <p>
                            As the <strong>first Indian company</strong> to scale up ground screw production, <strong>BIGSCREW SOLUTIONS</strong> leads the industry with a powerful blend of heritage craftsmanship, advanced automation, and engineering precision.
                        </p>
                        <p>
                            Our state-of-the-art facilities features pipe and sheet laser cutting machines and automatic welding systems — ensuring accuracy, repeatability, and world-class quality in every <strong>BigScrew</strong> we manufacture.
                        </p>
                        <p>
                            With a strong foundation of experience and a vision for the future, <strong>BIGSCREW SOLUTIONS</strong> is redefining how India builds — delivering sustainable, high-performance, and ready-to-install foundation systems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewSection