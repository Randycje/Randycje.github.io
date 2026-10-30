import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        company: 'Infineon Technologies',
        role: 'Automation Engineer (Data Analytics & Systems)',
        period: 'Jan 2026 - Current',
        description: 'Automation Engineer experience focused on developing and testing/maintaining automated material handling systems.',
        points: [
            'Developed automated ETL pipelines using Python and Tableau Prep to ingest, clean, and transform database records, powering 30+ interactive Tableau dashboards that drove cross-departmental predictive maintenance operations.',
            'Led cross-functional Root Cause Analysis (RCA) and Pareto failure-mode evaluations across multi-vendor AMHS equipment, resolving recurring system errors and reducing preventive maintenance duration by 12%.',
            'Drove departmental execution of User Acceptance Testing (UAT), Functional Integration Testing (FIT), and Hypercare for new AMHS automation alongside vendor teams, cutting lane labor by 90% (~20 to 2 operators) and boosting OEE by 6%.'
        ]
    },
    {
        company: 'Singapore Institute of Technology',
        role: 'Student Catalyst Coach',
        period: 'Dec 2024 - Nov 2025',
        description: 'Coaching students on using fabrication lab equipment.',
        points: [
            'Achieved Platinum Certification to instruct peers on the safe operation of fabrication machinery (laser cutters, bench saws, and 3D printers).',
            'Trained 100+ students in 1-on-1 and group settings, maintaining a zero-accident safety record across all shifts. ',
            'Advised on student engineering projects, troubleshooting designs and optimizing manufacturing parameters (e.g., adjusting 3D print infill density for prototypes).'
        ]
    },
    {
        company: 'Kilde',
        role: 'Data Science',
        period: 'Mar 2021 - Aug 2021',
        description: 'Data Science experience focused on financial data analysis and modeling.',
        points: [
            'Authored complex SQL queries and multi-table aggregations across 20+ relational datasets to model investor behavior, building 30+ interactive Metabase dashboards for C-suite executives that steered decisions to discontinue underperforming investment tiers.',
            'Implemented Segment event tracking to perform user funnel and cohort analysis, identifying drop-off friction points and collaborating with software engineers to optimize user journey flows and retention.',
            'Conducted user acquisition and conversion rate optimization (CRO) analytics across campaign landing funnels, optimizing user onboarding pathways to drive an 8x surge in daily inbound leads (~50 to ~400).'
        ]
    }
];

const Experience = () => {
    const [showAllExp, setShowAllExp] = useState(false);
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '2.2rem', textAlign: 'center' }}
                >
                    Work Experience
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Timeline Line */}
                    <div className="timeline-line" />

                    {(showAllExp ? experiences : experiences.slice(0, 1)).map((exp, index) => (
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                                        <h4 style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            <Briefcase size={16} /> {exp.company}
                                        </h4>
                                    </div>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        padding: '0.3rem 0.8rem',
                                        background: 'var(--chip-bg)',
                                        borderRadius: '20px',
                                        marginTop: '0.4rem'
                                    }}>
                                        <Calendar size={13} /> {exp.period}
                                    </span>
                                </div>

                                <ul style={{ listStyle: 'none' }}>
                                    {exp.points.map((point, i) => (
                                        <li key={i} style={{
                                            marginBottom: '0.5rem',
                                            position: 'relative',
                                            paddingLeft: '1.3rem',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.5',
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

                    {experiences.length > 1 && (
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                            <button
                                onClick={() => setShowAllExp(!showAllExp)}
                                style={{
                                    padding: '0.8rem 2rem',
                                    background: 'transparent',
                                    color: 'var(--accent-cyan)',
                                    border: '2px solid var(--accent-cyan)',
                                    borderRadius: '30px',
                                    fontSize: '1rem',
                                    fontFamily: 'var(--font-heading)',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'var(--accent-cyan)';
                                    e.currentTarget.style.color = '#000';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--accent-cyan)';
                                }}
                            >
                                {showAllExp ? 'View Less' : 'View All Experience'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
