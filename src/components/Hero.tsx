"use client";

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Package } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" aria-label="Hero — Introduction" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-600/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-violet-500/30 rounded-full bg-violet-500/10 text-violet-300 text-sm font-medium">
                        Available for opportunities
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Shashidhar Naik</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Software Engineer II specializing in building scalable enterprise web applications with the <span className="text-violet-400 font-semibold">MERN</span> & <span className="text-pink-400 font-semibold">MEVN</span> stacks.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <Link to="projects" smooth={true} offset={-100} className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-violet-600/20 cursor-pointer">
                            View Work
                        </Link>
                        <a href="/Shashidhar_Naik_2025.pdf" download className="px-8 py-3 border border-slate-700 hover:border-violet-500 hover:text-violet-400 text-slate-300 rounded-lg font-medium transition-all flex items-center gap-2 group">
                            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            Download CV
                        </a>
                    </div>

                    <div className="flex gap-6" role="list" aria-label="Social profiles">
                        {[
                            { icon: <Github aria-hidden="true" />, href: 'https://github.com/shashi089', label: 'GitHub profile — shashi089' },
                            { icon: <Linkedin aria-hidden="true" />, href: 'https://www.linkedin.com/in/shashidhar-naik-aab5b512a/', label: 'LinkedIn profile — Shashidhar Naik' },
                            { icon: <Package aria-hidden="true" />, href: 'https://www.npmjs.com/~shashidharlbs', label: 'NPM packages by Shashidhar Naik' },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                role="listitem"
                                className="p-3 bg-slate-800/50 hover:bg-violet-600/20 hover:text-violet-400 text-slate-400 rounded-full transition-all border border-slate-700/50 hover:border-violet-500/50"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Abstract Code Visual or 3D Element Placeholder */}
                    <div className="w-full h-[500px] border border-slate-800 bg-slate-900/50 rounded-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-50" />

                        {/* Mock Code Editor Look */}
                        <div className="flex items-center gap-2 p-4 border-b border-slate-800">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <div className="ml-4 text-xs text-slate-500 font-mono">Developer.tsx</div>
                        </div>

                        <div className="p-6 font-mono text-sm space-y-4 text-slate-400">
                            <div>
                                <span className="text-violet-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{"{"}</span>
                            </div>
                            <div className="pl-6">
                                <span className="text-slate-500">name:</span> <span className="text-green-400">'Shashidhar Naik'</span>,
                            </div>
                            <div className="pl-6">
                                <span className="text-slate-500">role:</span> <span className="text-green-400">'MERN/MEVN Stack Developer'</span>,
                            </div>
                            <div className="pl-6">
                                <span className="text-slate-500">experience:</span> <span className="text-orange-400">4+</span>,
                            </div>
                            <div className="pl-6">
                                <span className="text-slate-500">skills:</span> <span className="text-yellow-400">['React','Javascript', 'Node Js', 'Express Js','TypeScript', 'MongoDB',"Python","PostgreSQL"]</span>,
                            </div>
                            <div className="pl-6">
                                <span className="text-slate-500">currentFocus:</span> <span className="text-green-400">'Enterprise WMS Solutions'</span>
                            </div>
                            <div>
                                <span className="text-yellow-400">{"}"}</span>;
                            </div>

                            <div className="pt-4 animate-pulse">
                                <span className="text-violet-400">developer</span>.<span className="text-blue-400">buildAwesomeThings</span>();
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
