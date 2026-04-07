import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        title: 'LSTM Weather Prediction',
        description: 'Developed a PyTorch LSTM neural network to forecast daily temperature and humidity using historical metrics from Data.gov.sg. The model achieved high visual accuracy against validation data, with results plotted and analyzed using Matplotlib.',
        tech: ['Personal Project', 'Machine Learning', 'PyTorch', 'Matplot'],
        image: '/weather-prediction.png'
    },
    {
        title: 'HDB Interior Design AI Competition',
        description: 'Built a multi-agent AI system on Telegram that guides users through HDB flat renovation planning. A manager agent runs a live competition between two AI designer agents, critiques their floor plans over three rounds, and generates a visualisation prompt for the winning design.',
        tech: ['Personal Project', 'Agentic AI', 'LlamaIndex', 'FastAPI'],
        image: '/hdb-agent-hierarchy.png'
    },
    {
        title: 'Aircraft Insurance Survivor Prediction',
        description: 'Engineered a supervised machine learning classification model to predict flight crash survival probabilities for insurance agents. Featuring a user-friendly Flask web interface, the model analyzes age, gender, and fare data, achieving over 90% accuracy through rigorous hyperparameter tuning.',
        tech: ['Machine Learning', 'Scikit-learn', 'Flask'],
        image: '/aircraft-insurance-ml.jpg'
    },
    /*
    {
        title: 'Clinical Trial Eligibility Predictor',
        description: 'Developed an unsupervised clustering algorithm to determine patient suitability for a pharmaceutical obesity drug trial. Deployed via a custom Flask web application, the system processes anonymized health, height, and lifestyle metrics, fine-tuned to exceed a 90% accuracy threshold.',
        tech: ['School Project', 'Clustering', 'Scikit-learn', 'Flask'],
        image: '/clinical-trial-ml.png'
    },
    */
    {
        title: 'Inflat-Able Mattress',
        description: 'Identified a critical need in nursing care and engineered a 4-part inflatable mattress system to assist with patient turning. The solution integrates seamlessly with standard hospital operating procedures and was selected as one of the top 3 projects to represent the cohort for the James Dyson Award.',
        tech: ['Project Management', 'Critical Thinking', 'System Engineering'],
        image: '/inflatable-mattress(2).jpg, inflatable-mattress(1).jpg'
    },
    {
        title: 'Item Packing Automation',
        description: 'Tackled a real-world industrial packing challenge by engineering a comprehensive automated solution. Designed and built a working prototype from scratch, successfully integrating mechanical and electrical systems to meet all stringent operational requirements.',
        tech: ['Project Management', 'Mechanical Engineering', 'Camera Vision', 'Arduino'],
        image: '/item-packing.gif'
    },
    {
        title: 'Autonomous Navigation',
        description: 'Developed an autonomous navigation system for a mobile robot to traverse complex, unknown arenas. Synthesized systems, mechanical, and electrical engineering principles to ensure precise pathfinding and successful mission completion.',
        tech: ['Mechanical Engineering', 'ROS', 'Python'],
        image: '/autonomous-navi.png'
    }
];

const ProjectCard = ({ project, index }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = project.image
        ? project.image.includes(',')
            ? project.image.split(',').map(img => img.trim())
            : [project.image]
        : [];

    const hasMultiple = images.length > 1;

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
                background: 'var(--card-bg)',
                borderRadius: '6px',
                border: '1px solid var(--card-border)',
                boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
            whileHover={{ y: -8 }}
        >
            {/* Project Image / Carousel */}
            {images.length > 0 && (
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative', group: 'carousel' }}>
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`${project.title} highlight`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                objectPosition: 'center',
                                transition: 'transform 0.5s ease',
                                opacity: 0.95
                            }}
                        />
                    </AnimatePresence>

                    {/* Carousel Controls */}
                    {hasMultiple && (
                        <>
                            <button
                                onClick={prevSlide}
                                style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(0,0,0,0.5)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 10
                                }}
                                aria-label="Previous Image"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={nextSlide}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(0,0,0,0.5)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 10
                                }}
                                aria-label="Next Image"
                            >
                                <ChevronRight size={18} />
                            </button>

                            {/* Dots Indicator */}
                            <div style={{
                                position: 'absolute',
                                bottom: '10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: '5px',
                                zIndex: 10
                            }}>
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            backgroundColor: idx === currentIndex ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.5)',
                                            transition: 'background-color 0.3s'
                                        }}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* Project Details */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.4rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem', flexGrow: 1, lineHeight: '1.6' }}>{project.description}</p>

                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', color: 'var(--accent-cyan)', fontSize: '0.85rem', fontFamily: 'var(--font-heading)' }}>
                    {project.tech.map((t, i) => (
                        <li key={i} style={{ background: 'var(--chip-bg)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{t}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const VISIBLE = 3;
const GAP = 40; // px, matches 2.5rem

const Projects = () => {
    const [startIndex, setStartIndex] = useState(0);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    const maxStart = projects.length - VISIBLE;

    React.useEffect(() => {
        const measure = () => {
            if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
        };
        measure();
        const observer = new ResizeObserver(measure);
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const cardWidth = containerWidth > 0 ? (containerWidth - (VISIBLE - 1) * GAP) / VISIBLE : 0;
    const step = cardWidth + GAP;

    const navigate = (dir) => {
        setStartIndex((prev) => Math.max(0, Math.min(prev + dir, maxStart)));
    };

    return (
        <section className="section projects" id="projects" style={{ backgroundColor: 'var(--section-bg-alt)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}
                >
                    Featured Projects
                </motion.h2>

                {/* Carousel Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>

                    {/* Prev Button */}
                    <button
                        onClick={() => navigate(-1)}
                        disabled={startIndex === 0}
                        aria-label="Previous Project"
                        style={{
                            flexShrink: 0,
                            background: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: startIndex === 0 ? 'default' : 'pointer',
                            color: startIndex === 0 ? 'rgba(255,255,255,0.2)' : 'var(--accent-cyan)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                            transition: 'transform 0.2s, color 0.2s',
                            opacity: startIndex === 0 ? 0.4 : 1,
                        }}
                        onMouseEnter={e => { if (startIndex !== 0) e.currentTarget.style.transform = 'scale(1.12)'; }}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <ChevronLeft size={22} />
                    </button>

                    {/* Sliding Track */}
                    <div ref={containerRef} style={{ flex: 1, overflow: 'hidden' }}>
                        <motion.div
                            style={{ display: 'flex', gap: `${GAP}px` }}
                            animate={{ x: -startIndex * step }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            {projects.map((project, i) => (
                                <div key={project.title} style={{ width: cardWidth, flexShrink: 0 }}>
                                    <ProjectCard project={project} index={i} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => navigate(1)}
                        disabled={startIndex === maxStart}
                        aria-label="Next Project"
                        style={{
                            flexShrink: 0,
                            background: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: startIndex === maxStart ? 'default' : 'pointer',
                            color: startIndex === maxStart ? 'rgba(255,255,255,0.2)' : 'var(--accent-cyan)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                            transition: 'transform 0.2s, color 0.2s',
                            opacity: startIndex === maxStart ? 0.4 : 1,
                        }}
                        onMouseEnter={e => { if (startIndex !== maxStart) e.currentTarget.style.transform = 'scale(1.12)'; }}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>

                {/* Dot Indicators — one per possible window position */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '2rem' }}>
                    {Array.from({ length: maxStart + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setStartIndex(i)}
                            aria-label={`Go to position ${i + 1}`}
                            style={{
                                width: i === startIndex ? '24px' : '8px',
                                height: '8px',
                                borderRadius: '4px',
                                background: i === startIndex ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.25)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                padding: 0,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

