import React from 'react';
import { Mail, Linkedin, FileText, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer" id="contact" style={{ padding: '3rem 0', textAlign: 'center', backgroundColor: 'var(--footer-bg)', marginTop: 'auto' }}>
            <div className="container">
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Get In Touch</h2>
                {/*<p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
                    Whether you have a question about my skillsets, want to discuss a data strategy, or just want to say hi, my inbox is always open.
                </p>*/}

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    <a href="mailto:@randychong.je@gmail.com"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.8rem 1.5rem', border: '1px solid var(--accent-cyan)',
                            color: 'var(--accent-cyan)', borderRadius: '4px'
                        }}>
                        <Mail size={18} /> Say Hello
                    </a>
                    <a href="https://linkedin.com/in/randycje" target="_blank" rel="noreferrer"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.8rem 1.5rem', border: '1px solid var(--text-secondary)',
                            color: 'var(--text-secondary)', borderRadius: '4px'
                        }}>
                        <Linkedin size={18} /> LinkedIn
                    </a>
                    <a href="/Randy-Chong-Jun-Er_Resume.pdf" download
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.8rem 1.5rem', border: '1px solid var(--accent-orange)',
                            color: 'var(--accent-orange)', borderRadius: '4px'
                        }}>
                        <FileText size={18} /> Resume
                    </a>
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        Designed & Built with <Heart size={14} color="var(--accent-cyan)" /> by Randy Chong
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
