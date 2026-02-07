import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    { category: 'Soft Skills', items: ['Critical Thinking', 'Innovative Thinking', 'Adaptability', 'Problem Solving'] },
    { category: 'Management Skills', items: ['Project Management', 'Agile Methodologies', 'Stakeholder Management'] },
    { category: 'Technical Skills', items: ['Python', 'SQL', 'C++', 'C', 'C#', 'HTML/CSS', 'JavaScript'] },
    { category: 'Platform & Software', items: ['ROS', 'UiPath', 'Tableau', 'Metabase'] }
];

const colors = ['var(--accent-cyan)', '#0A84FF', '#FF9F1C', '#9D4EDD'];

const Skills = () => {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    Area of Expertise
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                    {skillsData.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'var(--card-bg)',
                                padding: '2rem',
                                borderRadius: '4px',
                                borderTop: `3px solid ${colors[index % colors.length]}`
                            }}
                        >
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>{group.category}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {group.items.map((skill, i) => (
                                    <span key={i} style={{
                                        padding: '0.5rem 1rem',
                                        background: 'var(--chip-bg)',
                                        borderRadius: '20px',
                                        color: 'var(--text-primary)',
                                        fontSize: '0.9rem',
                                        fontFamily: 'var(--font-heading)',
                                        border: '1px solid var(--card-border)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
