import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        company: 'Infineon Technologies',
        role: 'Automation Engineer Intern',
        period: 'Jan 2026 - Current',
        description: 'Current internship focused on automation systems.',
        points: [
            'Developed 5 interactive Tableau dashboards used by cross-departmental management to monitor ASRS storage efficiency and AMR breakdown trends, directly enabling the shift toward data-driven predictive maintenance.',
            'Facilitated User Acceptance (UAT) and Functional Integration Testing (FIT) for new automation system, ensuring seamless alignment with operational requirements prior to go-live.',
            'Supported Hypercare during warehouse automation rollout, cutting labor from ~20 to 2 per lane, increasing Test OEE by 6%, and eliminating customer returns.',
            'Managed the maintenance lifecycle for all Automation Equipment, transitioning from hands-on troubleshooting (LiDAR sensors, drive units, sensor testing) to supervising technical teams for preventive maintenance execution.'
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
        role: 'Data Science Intern',
        period: 'Mar 2021 - Aug 2021',
        description: 'Internship focused on financial data analysis and modeling.',
        points: [
            'Consolidated 20+ disparate datasets using SQL to reveal key customer investing behaviors, enabling the leadership team to pivot strategy toward high-performing product lines.',
            'Designed 30+ interactive Metabase dashboards for C-Suite executives, directly influencing the decision to discontinue underperforming investment packages.',
            'Spearheaded the integration of Segment tracking to uncover user drop-off points, collaborated with engineering to resolve UI/UX friction which resulted in improved customer retention.',
            'Developed and supported a series of high-performing landing pages and marketing campaigns, resulting in an 8× surge in daily lead growth (~50 to ~400 leads).'
        ]
    }
];

const Experience = () => {
    const [showAllExp, setShowAllExp] = useState(false);
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
