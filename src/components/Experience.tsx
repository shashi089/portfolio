import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const jobs = [
        {
            role: "Software Engineer II",
            company: "Cymbeline Innovation Pvt. Ltd (Client: Panasonic)",
            period: "Feb 2025 - Present",
            tech: ["React.js", "TypeScript", "Material UI"],
            points: [
                "Working as Software Engineer II and Frontend Lead on an enterprise Warehouse Management System (WMS).",
                "Own frontend delivery using React.js, TypeScript, and Material UI.",
                "Lead feature planning and execution, ensuring on-time delivery within sprint timelines.",
                "Assign tasks to junior developers based on team lead guidance and feature complexity.",
                "Actively track progress, follow up with team members, and resolve blockers.",
                "Collaborate with business stakeholders to gather requirements, take feedback, and refine workflows.",
                "Conduct technical discussions with team lead and developers to decide optimal UI and architectural approaches.",
                "Develop reusable, scalable UI components improving consistency and maintainability.",
                "Implement role-based access control (RBAC) at the UI level.",
                "Integrate frontend modules with backend REST APIs for inventory, storage IN/OUT, reporting, and dashboards."
            ]
        },
        {
            role: "Software Engineer I",
            company: "Cymbeline Innovation Pvt. Ltd",
            period: "Feb 2024 - Jan 2025",
            tech: ["React.js", "Node.js", "MongoDB", "Express"],
            points: [
                "Contributed as a Software Engineer I on Stock Automation and early-phase WMS feature development.",
                "Developed frontend modules using React.js, TypeScript, and Material UI.",
                "Implemented UI flows for automated stock trading and monitoring dashboards.",
                "Built and integrated frontend components with backend REST APIs (Node.js, Express, MongoDB).",
                "Worked on initial WMS features including inventory listing, storage workflows, and basic reporting.",
                "Participated in requirement discussions and supported feature planning during early product phases.",
                "Demonstrated strong ownership and consistency, leading to promotion to Software Engineer II."
            ]
        },
        {
            role: "Software Developer",
            company: "Flyers Soft Pvt. Ltd",
            period: "Jan 2023 - Jan 2024",
            tech: ["React.js", "Nuxt.js", "Vuetify", "Bootstrap"],
            points: [
                "Delivered frontend-heavy features using React.js, Nuxt.js, Vuetify, and Bootstrap.",
                "Developed REST APIs using Node.js, Express.js, and TypeScript.",
                "Participated in sprint planning, estimation, and feature discussions.",
                "Mentored interns and junior developers on JavaScript, Git, and development best practices.",
                "Assisted with deployment and production support on DigitalOcean."
            ]
        },
        {
            role: "Software Developer",
            company: "Triofi Technologies Pvt. Ltd",
            period: "Dec 2021 - Dec 2022",
            tech: ["React.js", "Node.js", "TypeScript"],
            points: [
                "Developed reusable React components and frontend modules.",
                "Built backend CRUD APIs using Node.js, Express, and TypeScript.",
                "Proposed and implemented UI/UX improvements.",
                "Collaborated with QA and business teams for feature releases.",
                "Joined as Intern (Dec 2021 – Feb 2022); converted to Full-Time Developer based on performance."
            ]
        },
        {
            role: "Assistant Team lead",
            company: "Vindhya e-infomedia pvt ltd",
            period: "Jan 2019 - Dec 2020",
            tech: ["Networking", "Router configuration",],
            points: [
                "",
            ]
        },
        {
            role: "Technical Support Engineer",
            company: "Microsys",
            period: "Oct 2017 - Dec 2018",
            tech: ["Networking", "Router configuration","Application Support"],
            points: [
                "",
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-8">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-violet-500 z-10" />

                            <div
                                className="bg-slate-800/20 rounded-xl border border-slate-700/50 p-6 cursor-pointer hover:bg-slate-800/40 transition-colors"
                                onClick={() => toggleExpand(index)}
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                                        <p className="text-violet-400 font-medium text-lg">{job.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-full whitespace-nowrap">
                                        <Calendar className="w-4 h-4" />
                                        {job.period}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {job.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded-full border border-slate-700 bg-slate-900/30 text-slate-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Always visible brief or first item? No, let's just toggle the list */}
                                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mt-2">
                                    {expandedIndex === index ? (
                                        <>Hide Responsibilities <ChevronUp className="w-4 h-4" /></>
                                    ) : (
                                        <>View Responsibilities <ChevronDown className="w-4 h-4" /></>
                                    )}
                                </div>

                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="mt-4 space-y-3 pt-4 border-t border-slate-700/50">
                                                {job.points.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
