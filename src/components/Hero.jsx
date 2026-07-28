import React from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from './common/BackgroundAnimation';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section hero hero-section" id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <BackgroundAnimation />
            
            {/* Ambient Aura Background Blur */}
            <div className="mesh-glow-bg" style={{ top: '20%', left: '30%', transform: 'translate(-50%, -50%)' }} />
            <div className="mesh-glow-bg" style={{ top: '60%', right: '20%', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)' }} />

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Status Pill Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.4rem 1.2rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(56, 189, 248, 0.08)',
                        border: '1px solid rgba(56, 189, 248, 0.2)',
                        marginBottom: '1.5rem',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <Sparkles size={16} color="var(--accent-cyan)" />
                        <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: '600', letterSpacing: '0.5px' }}>
                            Data • AI & ML • Robotics Systems
                        </span>
                    </div>

                    <h2 style={{ color: 'var(--text-secondary)', fontSize: '1.4rem', marginBottom: '0.5rem', fontWeight: '400' }}>
                        Hello, I am
                    </h2>
                    
                    <h1 className="h1-mobile gradient-text" style={{ fontSize: '4.2rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-0.03em' }}>
                        Randy Chong
                    </h1>

                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.8rem', fontWeight: '500' }}>
                        Bridging <span style={{ color: 'var(--accent-cyan)' }}>Software Intelligence</span> with <span style={{ color: 'var(--accent-orange)' }}>Physical Automation</span>
                    </h3>

                    <p style={{ maxWidth: '640px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                        Designing end-to-end solutions that connect data science, machine learning, and robotics to solve complex real-world challenges.
                    </p>

                    <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#projects"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                padding: '0.9rem 2.2rem',
                                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                                color: '#070a12',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '1rem',
                                fontWeight: '700',
                                boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                            whileHover={{ scale: 1.05, boxShadow: '0 15px 35px -5px rgba(56, 189, 248, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore My Work
                        </motion.a>

                        <motion.a
                            href="#experience"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.9rem 2.2rem',
                                background: 'var(--card-bg)',
                                border: '1px solid var(--card-border)',
                                color: 'var(--text-primary)',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '1rem',
                                fontWeight: '600',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s ease'
                            }}
                            whileHover={{ scale: 1.05, borderColor: 'var(--accent-cyan)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Experience
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}
                >
                    <ArrowDown color="var(--accent-cyan)" size={28} strokeWidth={1.5} className="animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
