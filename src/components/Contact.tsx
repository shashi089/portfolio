
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-slate-900/50">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-slate-400 text-lg">
                        I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                >
                    <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-violet-500/50 transition-all group flex flex-col items-center">
                        <div className="p-4 bg-violet-500/10 rounded-full text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-200 mb-2">Email</h3>
                        <a href="mailto:shashidharnaikTest@gmail.com" className="text-slate-400 hover:text-violet-400 transition-colors break-all">
                            shashidharnaik8@gmail.com
                        </a>
                    </div>

                    <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-violet-500/50 transition-all group flex flex-col items-center">
                        <div className="p-4 bg-pink-500/10 rounded-full text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                            <Phone className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-200 mb-2">Phone</h3>
                        <p className="text-slate-400">
                            +91 9119437320
                        </p>
                    </div>

                    <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-violet-500/50 transition-all group flex flex-col items-center">
                        <div className="p-4 bg-blue-500/10 rounded-full text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-200 mb-2">Location</h3>
                        <p className="text-slate-400">
                            Bangalore, Karnataka- 560076
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
