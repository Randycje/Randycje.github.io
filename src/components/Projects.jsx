import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
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
    const images = project.image.includes(',')
        ? project.image.split(',').map(img => img.trim())
        : [project.image];

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
                            objectFit: 'cover',
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

const Projects = () => {
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

                {/* Grid Layout for Side-by-Side Row */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'start'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
