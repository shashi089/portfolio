
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "B.E. (Electronics and Communication Engineering)",
            school: "BLDEA’s College of Engineering and Technology, Bijapur",
            year: "2017",
            score: "",
            details: "Specialized in Electronics and Communication."
        },
        {
            degree: "PUC (Higher Secondary Education)",
            school: "SNJPNM’S PU Science College, Nidasoshi",
            year: "2013",
            score: "",
            details: "Focus on Science curriculum."
        },
        {
            degree: "SSLC (Secondary Education)",
            school: "Rani Channamma High School, Hukkeri",
            year: "2011",
            score: "",
            details: "High academic performance."
        }
    ];

    return (
        <section id="education" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <GraduationCap className="text-violet-500 w-10 h-10" />
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-violet-500 rounded-full mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-violet-500/30 transition-colors"
                        >
                            <div className="flex-shrink-0 bg-violet-500/10 p-4 rounded-lg">
                                <Award className="w-8 h-8 text-violet-400" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-slate-100 mb-1">{edu.degree}</h3>
                                <p className="text-violet-400 font-medium mb-2">{edu.school}</p>
                                <p className="text-slate-400 text-sm">{edu.details}</p>
                            </div>
                            <div className="flex-shrink-0 flex items-center gap-2 text-slate-500 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
                                <Calendar className="w-4 h-4" />
                                <span>{edu.year}</span>
                                <span className="w-px h-4 bg-slate-700 mx-2"></span>
                                <span className="text-violet-400 font-bold">{edu.score}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
