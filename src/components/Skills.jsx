import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, Layers, UserCheck } from 'lucide-react';

const skillsData = [
    { 
        category: 'AI & ML', 
        icon: Brain,
        color: 'var(--accent-cyan)',
        items: ['LlamaIndex', 'HuggingFace', 'ComfyUI', 'LangChain', 'LangSmith', 'APIs', 'PyTorch', 'Matplotlib', 'NumPy', 'Pandas', 'Scikit-learn'] 
    },
    { 
        category: 'Technical Skills', 
        icon: Code,
        color: 'var(--accent-blue)',
        items: ['Python', 'SQL', 'C++', 'C', 'C#', 'HTML/CSS', 'JavaScript'] 
    },
    { 
        category: 'Platform & Software', 
        icon: Cpu,
        color: 'var(--accent-orange)',
        items: ['ROS', 'UiPath', 'Tableau', 'Metabase'] 
    },
    { 
        category: 'Management Skills', 
        icon: Layers,
        color: 'var(--accent-orange)',
        items: ['Project Management', 'Agile Methodologies', 'Stakeholder Management'] 
    },
    { 
        category: 'Soft Skills', 
        icon: UserCheck,
        color: 'var(--accent-purple)',
        items: ['Critical Thinking', 'Innovative Thinking', 'Adaptability', 'Problem Solving'] 
    }
];

const Skills = () => {
    return (
        <section className="section skills" id="skills" style={{ position: 'relative' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    Area of <span style={{ color: 'var(--accent-cyan)' }}>Expertise</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))', gap: '1.2rem' }}>
                    {skillsData.map((group, index) => {
                        const IconComponent = group.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card"
                                style={{
                                    padding: '1.6rem 1.25rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                        <div style={{
                                            padding: '0.5rem',
                                            borderRadius: '12px',
                                            background: `${group.color}15`,
                                            color: group.color,
                                            display: 'flex'
                                        }}>
                                            <IconComponent size={22} />
                                        </div>
                                        <h3 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--text-primary)' }}>{group.category}</h3>
                                    </div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                        {group.items.map((skill, i) => (
                                            <motion.span
                                                key={i}
                                                whileHover={{ scale: 1.05 }}
                                                style={{
                                                    padding: '0.4rem 0.85rem',
                                                    background: 'var(--chip-bg)',
                                                    borderRadius: 'var(--radius-full)',
                                                    color: 'var(--text-primary)',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '500',
                                                    display: 'inline-block',
                                                    lineHeight: '1.3',
                                                    border: `1px solid ${group.color}25`,
                                                    transition: 'all 0.2s ease'
                                                }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
