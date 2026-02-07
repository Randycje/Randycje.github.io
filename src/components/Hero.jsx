import React from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from './common/BackgroundAnimation';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section hero hero-section" id="hero">
            <BackgroundAnimation />
            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                        Hello, I am
                    </h2>
                    <h1 className="h1-mobile" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, var(--gradient-text-start), var(--gradient-text-end))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Randy Chong
                    </h1>
                    <h3 style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Robotics & Automation <span style={{ color: 'var(--accent-orange)' }}>|</span> AI & ML <span style={{ color: 'var(--accent-orange)' }}>|</span> System Engineer <span style={{ color: 'var(--accent-orange)' }}>|</span> Data Science
                    </h3>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
                        Bridging the gap between digital data and physical systems.
                        Designing minimalistic, high-performance solution with a focus from data analytics using robotics and automation.
                    </p>

                    <motion.a
                        href="#projects"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2rem',
                            border: '1px solid var(--accent-cyan)',
                            color: 'var(--accent-cyan)',
                            borderRadius: '4px',
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease'
                        }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Check Out My Work
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
                >
                    <ArrowDown color="var(--accent-cyan)" size={32} strokeWidth={1} className="animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
