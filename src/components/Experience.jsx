import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        company: 'Infineon Technologies',
        role: 'Automation Engineer Intern',
        period: 'Present',
        description: 'Current internship focused on automation systems.',
        points: [
            'Facilitated critical User Acceptance (UAT) and Functional Integration Testing (FIT) for the Overhead Hoist Transport (OHT) system, ensuring seamless alignment with operational requirements prior to go-live.',
            'Monitored system stability during the Hypercare phase, contributing to a stable rollout that achieved a 6% increase in Test OEE, 85% reduction in manual labor, and 100% elimination of customer returns.',
            'Managed the maintenance lifecycle for a fleet of 25 AMRs, transitioning from hands-on troubleshooting (LiDAR sensors, drive units) to supervising technical teams for preventive maintenance execution.',
            'Developed 5 interactive Tableau dashboards used by cross-departmental management to monitor ASRS storage efficiency and AMR breakdown trends, directly enabling the shift toward data-driven predictive maintenance.'
        ]
    },
    {
        company: 'Kilde',
        role: 'Data Science Intern',
        period: 'Past',
        description: 'Internship focused on financial data analysis and modeling.',
        points: [
            'Consolidated 20+ disparate datasets using SQL to reveal key customer investing behaviors, enabling the leadership team to pivot strategy toward high-performing product lines.',
            'Designed 30+ interactive Metabase dashboards for C-Suite executives, directly influencing the decision to discontinue underperforming investment packages.',
            'Spearheaded the integration of Segment tracking to uncover user drop-off points, collaborated with engineering to resolve UI/UX friction which resulted in improved customer retention.',
            'Supported marketing campaigns that scaled daily lead generation by 8x (from ~50 to ~400), ensuring seamless data capture across 10+ landing pages.'
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
