import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setIsOpen(false);
        };

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                backgroundColor: scrolled || isOpen ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: (scrolled || isOpen) ? 'blur(10px)' : 'none',
                boxShadow: (scrolled || isOpen) ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none',
                transition: 'all 0.3s ease',
                padding: '1rem 0'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-cyan)', zIndex: 101 }}>
                    {'<RCJE />'}
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        {navLinks.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}
                                    className="nav-link"
                                >
                                    <span style={{ color: 'var(--accent-cyan)', marginRight: '5px' }}>0{navLinks.indexOf(item) + 1}.</span>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={toggleTheme}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            background: 'var(--bg-color)',
                            border: '1px solid var(--accent-cyan)',
                            color: 'var(--accent-cyan)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 101, marginRight: '0.5rem' }}>
                    <button
                        onClick={toggleTheme}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            background: 'var(--bg-color)',
                            border: '1px solid var(--accent-cyan)',
                            color: 'var(--accent-cyan)',
                            cursor: 'pointer'
                        }}
                    >
                        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button onClick={toggleMenu} style={{ color: 'var(--accent-cyan)' }}>
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '75vw',
                            height: '100vh',
                            backgroundColor: 'var(--card-bg)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '-10px 0px 30px -15px rgba(2,12,27,0.7)',
                            zIndex: 100
                        }}
                    >
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
                            {navLinks.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}
                                    >
                                        <span style={{ color: 'var(--accent-cyan)', display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>0{navLinks.indexOf(item) + 1}.</span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
