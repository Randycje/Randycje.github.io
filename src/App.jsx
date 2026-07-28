import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
    const [theme, setTheme] = useState(() => {
        const hour = new Date().getHours();
        return (hour >= 7 && hour < 19) ? 'light' : 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className="app-container">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <div className="section-divider-glow" />
                <About />
                <div className="section-divider-glow" />
                <Experience />
                <div className="section-divider-glow" />
                <Education />
                <div className="section-divider-glow" />
                <Skills />
                <div className="section-divider-glow" />
                <Projects />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
