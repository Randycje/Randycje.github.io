import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section about" id="about" style={{ backgroundColor: 'var(--section-bg-alt)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                >
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About Me</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            I am a passionate <strong>Individual</strong> with a unique background in <strong>Robotics Systems (University)</strong> and <strong>Business Informatics (Polytechnic)</strong>. This distinctive combination allows me to bridge the gap between business logic, data analytics, and physical systems.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Technology have always been a huge interest of mine and pursuing my degree in Robotics System is helping me to elevate my interest, by gaining the required knowledge to understand how Robotics and AI works together.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            I am hoping in the future, I am able to be part of a big project that is in my field of interest to help contribute back to the society.
                        </p>
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default About;
