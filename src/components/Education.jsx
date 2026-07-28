import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

const educationData = [
    {
        institution: 'Singapore Institute of Technology',
        degree: 'Bachelor of Engineering with Honors in Robotics System',
        period: 'Aug 2023 – Apr 2027 (Expected)',
        badge: 'University'
    },
    {
        institution: 'Nanyang Polytechnic',
        degree: 'Diploma in Business Information Systems',
        subDegree: 'Diploma Plus in Robotic Process Automation (RPA)',
        period: 'Apr 2018 – Apr 2021',
        badge: 'Polytechnic'
    }
];

const certificatesData = [
    {
        title: 'AIxTech',
        issuer: 'AI Singapore',
        date: 'May 2026',
        description: 'Acquired practical skills in Agentic AI product development with AI coding assistant (Codex).'
    },
    {
        title: 'AI for Industry',
        issuer: 'AI Singapore',
        date: 'Sept 2023',
        description: 'Learnt data science & ML model for real-world industry.'
    },
    {
        title: 'RPA Developer',
        issuer: 'UiPath',
        date: 'Mar 2019',
        description: 'Certified in designing, testing and deploying automation for repetitive processes.'
    }
];

const Education = () => {
    return (
        <section className="section education" id="education">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    Education & Certifications
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'start'
                }}>
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                padding: '0.6rem',
                                background: 'var(--accent-glow)',
                                borderRadius: '12px',
                                color: 'var(--accent-cyan)',
                                display: 'flex'
                            }}>
                                <GraduationCap size={26} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--text-primary)' }}>Education</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {educationData.map((edu, index) => (
                                <div
                                    key={index}
                                    style={{
                                        background: 'var(--card-bg)',
                                        padding: '1.8rem',
                                        borderRadius: '8px',
                                        border: '1px solid var(--card-border)',
                                        borderLeft: '4px solid var(--accent-cyan)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.8rem' }}>
                                        <span style={{
                                            fontSize: '0.8rem',
                                            fontWeight: 'bold',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '20px',
                                            background: 'var(--accent-glow)',
                                            color: 'var(--accent-cyan)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            {edu.badge}
                                        </span>
                                        <span style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.4rem'
                                        }}>
                                            <Calendar size={14} /> {edu.period}
                                        </span>
                                    </div>

                                    <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                        {edu.institution}
                                    </h4>
                                    <p style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontWeight: '500', marginBottom: edu.subDegree ? '0.4rem' : '0' }}>
                                        {edu.degree}
                                    </p>
                                    {edu.subDegree && (
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                            + {edu.subDegree}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certificates Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                padding: '0.6rem',
                                background: 'rgba(255, 159, 28, 0.1)',
                                borderRadius: '12px',
                                color: 'var(--accent-orange)',
                                display: 'flex'
                            }}>
                                <Award size={26} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--text-primary)' }}>Certifications</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {certificatesData.map((cert, index) => (
                                <div
                                    key={index}
                                    style={{
                                        background: 'var(--card-bg)',
                                        padding: '1.5rem',
                                        borderRadius: '8px',
                                        border: '1px solid var(--card-border)',
                                        borderLeft: '4px solid var(--accent-orange)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                        <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <CheckCircle2 size={16} color="var(--accent-orange)" />
                                            {cert.title}
                                        </h4>
                                        <span style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.4rem',
                                            background: 'var(--chip-bg)',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '12px'
                                        }}>
                                            <Calendar size={13} /> {cert.date}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--accent-orange)', fontWeight: '600', marginBottom: '0.5rem' }}>
                                        {cert.issuer}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                                        {cert.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
