"use client";

import { motion } from 'framer-motion';
import { Database, Globe, Server, Cpu } from 'lucide-react';

const About = () => {
    const skills = [
        {
            category: "Frontend Development",
            icon: <Globe className="w-6 h-6 text-violet-400" />,
            items: ["React.js", "Nuxt.js", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3", "Material UI", "Vuetify", "Bootstrap"]
        },
        {
            category: "Backend & APIs",
            icon: <Server className="w-6 h-6 text-pink-400" />,
            items: ["Node.js", "Express.js", "RESTful APIs", "Python", "FastAPI"]
        },
        {
            category: "Database & Cloud",
            icon: <Database className="w-6 h-6 text-blue-400" />,
            items: ["MongoDB", "Cron Jobs", "Deployment", "DevOps Basics"]
        },
        {
            category: "Tools & Concepts",
            icon: <Cpu className="w-6 h-6 text-emerald-400" />,
            items: ["Git/GitHub", "Postman", "VS Code", "Performance Optimization", "Scalable Architecture"]
        }
    ];

    return (
        <section id="about" aria-label="About Shashidhar Naik" className="py-20 bg-slate-900/30 relative">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        I am a <span className="text-violet-400 font-semibold">Software Engineer II</span> with 4+ years of experience in building scalable, enterprise-grade web applications.
                        Currently, I lead frontend delivery for a major <span className="text-pink-400">Warehouse Management System (WMS)</span>.
                        My journey includes transitioning from technical support to full-stack development, driven by a passion for solving complex problems through code.
                        Beyond my core work, I am an active open-source contributor, creating tools like <span className="text-violet-400">qrlayout</span> to empower other developers.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-colors group"
                        >
                            <div className="mb-4 bg-slate-900/50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-slate-200">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="text-sm px-2 py-1 bg-slate-700/50 text-slate-300 rounded hover:text-white transition-colors">
                                        {item}
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

export default About;
