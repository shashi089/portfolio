import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag, X } from 'lucide-react';

interface Project {
    title: string;
    role: string;
    desc: string;
    fullDesc?: string[];
    tags: string[];
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            title: "Warehouse Management System (WMS)",
            role: "Frontend Lead",
            desc: "Enterprise IIoT solution for managing inventory, storage, and quality inspection.",
            fullDesc: [
                "Led frontend delivery for Inventory, Storage IN/OUT, Quality Inspection, and BOM modules.",
                "Implemented QR-based tracking and CSV bulk upload workflows.",
                "Built real-time dashboards for multi-warehouse inventory visibility.",
                "Coordinated with business teams and developers for optimal feature delivery.",
                "Integrate frontend modules with backend REST APIs."
            ],
            tags: ["React", "Material UI", "IIoT", "Enterprise"]
        },
        {
            title: "Stock Automation Platform",
            role: "Full Stack Developer",
            desc: "Automated trading value-added system with real-time buy/sell execution.",
            fullDesc: [
                "Developed automated stock trading workflows integrated with broker APIs.",
                "Implemented real-time buy/sell automation and Cron-based background jobs.",
                "Built and integrated frontend components with backend REST APIs."
            ],
            tags: ["MERN Stack", "Cron Jobs", "Real-time","Python"]
        },
        {
            title: "IIoT Monitoring Dashboard",
            role: "MEVN Stack Developer",
            desc: "Data visualization platform for machine health and production metrics.",
            fullDesc: [
                "Developed data visualization dashboard to monitor machine health, performance trends, and production metrics.",
                "Enabled real-time insights for management and engineers to support informed decision-making.",
                "Implemented User Management with role-based access control (RBAC).",
                "Developed Shift Management and Production Planning modules."
            ],
            tags: ["Vue.js", "Node.js", "Charts", "Analytics"]
        },
        {
            title: "E-Commerce Application",
            role: "Frontend Developer",
            desc: "Responsive e-commerce platform with product catalog and shopping cart.",
            fullDesc: [
                "Built responsive UI using Bootstrap and custom CSS.",
                "Implemented product filtering, search, and cart functionality.",
                "Optimized for performance and mobile devices."
            ],
            tags: ["React.js", "Bootstrap", "JavaScript"]
        },
        {
            title: "HR Management System (HRMS)",
            role: "Full Stack Developer",
            desc: "Comprehensive HR solution for employee management and payroll.",
            fullDesc: [
                "Developed comprehensive employee management modules.",
                "Built backend for payroll processing and attendance tracking.",
                "Implemented secure authentication and role-based access."
            ],
            tags: ["React.js", "Bootstrap", "Node.js", "Express", "MongoDB"]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-slate-400 max-w-2xl">
                        A selection of complex enterprise applications and systems I've engineered.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-800/40 rounded-xl overflow-hidden border border-slate-700/50 hover:border-violet-500/50 group transition-all flex flex-col"
                        >
                            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-8 group-hover:from-slate-800 group-hover:to-violet-900/20 transition-colors">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-slate-200 mb-1">{project.title}</h3>
                                    <span className="text-sm text-violet-400 font-medium">{project.role}</span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="flex items-center gap-1 text-xs px-2 py-1 bg-slate-900 text-slate-300 rounded border border-slate-700">
                                            <Tag className="w-3 h-3" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full mt-2 py-2 rounded-lg bg-slate-700/50 hover:bg-violet-600 hover:text-white text-slate-300 text-sm font-medium transition-all flex items-center justify-center gap-2"
                                >
                                    View Details <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl max-h-[80vh] overflow-y-auto"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>

                                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                <p className="text-violet-400 font-medium mb-6">{selectedProject.role}</p>

                                <div className="space-y-4 mb-8">
                                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Key Responsibilities & Features</h4>
                                    <ul className="space-y-2">
                                        {selectedProject.fullDesc?.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-300">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-md border border-slate-700 text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
