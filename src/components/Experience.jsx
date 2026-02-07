import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        company: 'Infineon Technologies (Semi-Conductor)',
        role: 'Automation Engineer Intern',
        period: 'Present',
        description: 'Current internship focused on automation systems.',
        points: [
            'Implementing new solution to achieve Industry4.0 standard.',
            'Executing User Acceptance Testing (UAT) for new hardware.',
            'Collaborating with engineering teams to further optimise workflow.'
        ]
    },
    {
        company: 'Kilde (FinTech)',
        role: 'Data Science Intern',
        period: 'Past',
        description: 'Internship focused on financial data analysis and modeling.',
        points: [
            'Discover relationship between datasets using SQL.',
            'Creating insightful and interactive dashboard in Metabase.',
            'Cleaning and organising data in Metabase using MySQL.',
            'Setting up Segment to webpages to track customer activity.',
            'Grouping an audience for specific advertising targeting',
            'Designed and setup website on Leadpages.'
        ]
    }
];

const Experience = () => {
    return (
        <section className="section experience" id="experience" style={{ backgroundColor: 'var(--section-bg)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    Work Experience
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Timeline Line */}
                    <div className="timeline-line" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="timeline-container"
                        >
                            {/* Timeline Dot */}
                            <div
                                className="timeline-dot"
                                style={{
                                    background: index === 0 ? 'var(--accent-orange)' : 'var(--bg-color)',
                                    border: `2px solid ${index === 0 ? 'var(--accent-orange)' : 'var(--accent-cyan)'}`,
                                }}
                            />

                            <div
                                className="experience-card"
                                style={{
                                    borderLeft: `4px solid ${index === 0 ? 'var(--accent-orange)' : 'var(--accent-cyan)'}`
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                                        <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Briefcase size={18} /> {exp.company}
                                        </h4>
                                    </div>
                                    <span style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.5rem 1rem',
                                        background: 'var(--chip-bg)',
                                        borderRadius: '20px',
                                        marginTop: '0.5rem' // Added for mobile wrapping spacing
                                    }}>
                                        <Calendar size={14} /> {exp.period}
                                    </span>
                                </div>

                                <ul style={{ listStyle: 'none' }}>
                                    {exp.points.map((point, i) => (
                                        <li key={i} style={{
                                            marginBottom: '0.8rem',
                                            position: 'relative',
                                            paddingLeft: '1.5rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
