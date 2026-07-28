import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Bot } from 'lucide-react';

const About = () => {
    return (
        <section className="section about" id="about" style={{ position: 'relative' }}>
            <div className="mesh-glow-bg" style={{ top: '10%', right: '10%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ maxWidth: '860px', margin: '0 auto' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', textAlign: 'center' }}>
                        About <span style={{ color: 'var(--accent-cyan)' }}>Me</span>
                    </h2>

                    <div className="glass-card" style={{ padding: '3rem 2.5rem' }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            I enjoy combining <strong style={{ color: 'var(--text-primary)' }}>Data, AI, and Robotics</strong> to build smarter solutions for complex challenges. My background covers both hardware and software, giving me a practical view of how technology works from start to finish.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            I built a solid foundation in data science, web development, and database management during my diploma studies. Now, as a <strong style={{ color: 'var(--text-primary)' }}>Robotics Systems</strong> student, I am using that data-first mindset to work with AI and physical automation, bridging the gap between software intelligence and real-world machinery.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Outside of my studies, I have a strong desire to keep growing. That is why I am constantly experimenting with personal <strong style={{ color: 'var(--text-primary)' }}>AI/ML projects</strong> to expand my knowledge and test out new ideas.
                        </p>

                        {/* Focus Pills */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1rem',
                            paddingTop: '1.5rem',
                            borderTop: '1px solid var(--card-border)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1rem', background: 'var(--chip-bg)', borderRadius: 'var(--radius-md)' }}>
                                <Database size={20} color="var(--accent-cyan)" />
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-primary)' }}>Data Science</h4>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Tableau, SQL & Insights</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1rem', background: 'var(--chip-bg)', borderRadius: 'var(--radius-md)' }}>
                                <Cpu size={20} color="var(--accent-blue)" />
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-primary)' }}>AI & Machine Learning</h4>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>LlamaIndex, PyTorch & Agents</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1rem', background: 'var(--chip-bg)', borderRadius: 'var(--radius-md)' }}>
                                <Bot size={20} color="var(--accent-orange)" />
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-primary)' }}>Robotics Systems</h4>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ROS, Automation & Hardware</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
