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
            'Manage manufacturing efficiency improvements by supporting technology upgrades and process enhancement across 30+ production lines.',
            'Support User Acceptance Testing (UAT) for new system implementations, ensuring seamless integration and alignment with operational requirements before deployment.',
            'Developed 5+ interactive Tableau dashboards to enable real-time monitoring of daily operations, empowering stakeholders and AI with data-driven insights for faster decision-making.',
            'Collaborated with multiple cross-functional teams to identify automation opportunities, streamline workflows, and enhance overall production efficiency.',
            'Performed preventive and corrective maintenance on Autonomous Mobile Robots (AMRs), including parts replacement to minimize downtime and maintain operational continuity.'
        ]
    },
    {
        company: 'Kilde (FinTech)',
        role: 'Data Science Intern',
        period: 'Past',
        description: 'Internship focused on financial data analysis and modeling.',
        points: [
            'Discover relationship between 20+ datasets and over 10,000+ rows of data using SQL.',
            'Created 30+ insightful and interactive dashboard in Metabase to uncover business insights and customer behaviour.',
            'Set up Segment plugin to multiple webpages to track customer activity and user behaviour, to better understand user journey.',
            'Led the creation of multiple audience group based on their behaviour and demographics for specific advertising targeting.',
            'Designed and set up 10+ landing pages on Leadpages for market insights and lead generation.'
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
