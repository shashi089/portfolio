import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Bot, Sparkles, Minimize2, X } from 'lucide-react';

interface Message {
    id: string;
    type: 'bot' | 'user';
    text: string;
    timestamp: Date;
}

const PortfolioAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowGreeting(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isOpen) setShowGreeting(false);
    }, [isOpen]);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'bot',
            text: "Hi there! I'm your personal portfolio assistant. Ask me anything about my skills, experience, or the projects I've worked on—I'm here to help!",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const experienceData = [
        {
            company: "Cymbeline Innovation",
            aliases: ["cymbeline", "panasonic"],
            role: "Software Engineer II",
            points: [
                "I work as a Software Engineer II and Frontend Lead on an enterprise Warehouse Management System (WMS).",
                "My responsibilities include leading feature planning, ensuring on-time delivery, and assigning tasks to junior developers.",
                "I collaborate with business stakeholders to gather requirements and refine workflows.",
                "I develop reusable, scalable UI components using React, TypeScript, and Material UI.",
                "I also integrate frontend modules with backend REST APIs."
            ]
        },
        {
            company: "Flyers Soft",
            aliases: ["flyers", "flyers soft"],
            role: "Software Developer",
            points: [
                "At Flyers Soft, I delivered frontend-heavy features using React.js, Nuxt.js, Vuetify, and Bootstrap.",
                "I developed REST APIs using Node.js, Express.js, and TypeScript.",
                "I also mentored interns and junior developers on best practices.",
                "I assisted with deployment and production support on DigitalOcean."
            ]
        },
        {
            company: "Triofi Technologies",
            aliases: ["triofi"],
            role: "Software Developer",
            points: [
                "At Triofi, I developed reusable React components and frontend modules.",
                "I built backend CRUD APIs using Node.js, Express, and TypeScript.",
                "I proactively proposed and implemented UI/UX improvements.",
                "I collaborated with QA and business teams for feature releases."
            ]
        }
    ];

    const projectData = [
        {
            title: "Warehouse Management System (WMS)",
            aliases: ["wms", "warehouse"],
            desc: "An enterprise IIoT solution for managing inventory, storage, and quality inspection.",
            tech: "React, Material UI, IIoT"
        },
        {
            title: "Stock Automation Platform",
            aliases: ["stock", "trading", "automation"],
            desc: "An automated trading system with real-time buy/sell execution and Cron-based background jobs.",
            tech: "MERN Stack, Cron Jobs, Real-time"
        },
        {
            title: "IIoT Monitoring Dashboard",
            aliases: ["iiot", "monitoring", "dashboard"],
            desc: "A data visualization dashboard for machine health and production metrics with RBAC.",
            tech: "Vue.js, Node.js, Analytics"
        }
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const generateResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();

        // Identity & About
        if (lowerInput.includes('who are you') || lowerInput.includes('your name') || lowerInput.includes('about yourself')) {
            return "I'm a Portfolio Assistant designed to help you navigate through my professional journey. I can guide you through my projects, experience, and skills.";
        }

        // Specific Company Check
        for (const exp of experienceData) {
            if (exp.aliases.some(alias => lowerInput.includes(alias))) {
                return `At ${exp.company}, I worked as a ${exp.role}. ${exp.points.join(" ")}`;
            }
        }

        // Specific Project Check
        for (const proj of projectData) {
            if (proj.aliases.some(alias => lowerInput.includes(alias))) {
                return `The ${proj.title} is ${proj.desc} It was built using ${proj.tech}.`;
            }
        }

        // Broad Categories
        if (lowerInput.includes('experience') || lowerInput.includes('history') || lowerInput.includes('work') || lowerInput.includes('job') || lowerInput.includes('role') || lowerInput.includes('responsibility')) {
            return "I currently work as a Software Engineer II at Cymbeline Innovation. Before that, I was at Flyers Soft and Triofi Technologies. You can ask me 'What did you do at Cymbeline?' or 'Tell me about your role at Flyers'.";
        }

        if (lowerInput.includes('project') || lowerInput.includes('built') || lowerInput.includes('portfolio') || lowerInput.includes('case study')) {
            return "I've built several enterprise applications, including a WMS, a Stock Automation Platform, and an IIoT Dashboard. Ask me specifically about any of them!";
        }

        if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('stack') || lowerInput.includes('react') || lowerInput.includes('node') || lowerInput.includes('typescript')) {
            return "My core stack includes React.js, TypeScript, Node.js, and MongoDB. I also have deep experience with Material UI, Tailwind CSS, and various backend technologies.";
        }

        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire') || lowerInput.includes('reach')) {
            return "I'd love to connect! You can find my contact details in the Contact section at the bottom of the page.";
        }

        if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
            return "You can likely find a download link or contact information to request my resume in the Navbar or Contact section.";
        }

        if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
            return "Hello there! How can I help you today? Ask me about my experience, projects, or specific roles.";
        }

        return "I'm not sure I quite understand. Try asking about specific companies (e.g., 'Cymbeline'), projects ('WMS'), or general topics like 'Experience' or 'Skills'.";
    };

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            type: 'user',
            text: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate thinking delay
        setTimeout(() => {
            const responseText = generateResponse(userMsg.text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                type: 'bot',
                text: responseText,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    const quickAsks = ["Experience", "Projects", "Skills", "Contact"];

    const handleQuickAsk = (text: string) => {
        setInputValue(text);
        const userMsg: Message = {
            id: Date.now().toString(),
            type: 'user',
            text: text,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            const responseText = generateResponse(text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                type: 'bot',
                text: responseText,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <>
            {/* Greeting Bubble */}
            <AnimatePresence>
                {!isOpen && showGreeting && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 max-w-[280px]"
                    >
                        <div className="bg-slate-800 text-slate-200 px-4 py-3 rounded-2xl rounded-br-sm shadow-xl border border-slate-700/50 flex items-start gap-3 relative before:content-[''] before:absolute before:bottom-[-6px] before:right-6 before:w-3 before:h-3 before:bg-slate-800 before:border-r before:border-b before:border-slate-700/50 before:rotate-45">
                            <div className="flex-1">
                                <p className="text-sm font-medium">👋 Hi there! I can help you explore my projects and experience.</p>
                            </div>
                            <button
                                onClick={() => setShowGreeting(false)}
                                className="p-1 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'bg-violet-600 text-white'
                    }`}
            >
                <MessageSquare className="w-6 h-6" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-6 right-6 w-[90vw] md:w-[380px] h-[600px] max-h-[85vh] bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 backdrop-blur-xl"
                        style={{ boxShadow: '0 0 50px -12px rgba(0,0,0,0.5)' }}
                    >
                        <div className="p-4 border-b border-slate-700/50 bg-slate-800/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center relative">
                                    <Bot className="w-6 h-6 text-white" />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-100">Assistant</h3>
                                    <p className="text-xs text-violet-400 flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" /> Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 hover:text-white"
                            >
                                <Minimize2 className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${msg.type === 'user'
                                            ? 'bg-violet-600 text-white rounded-tr-sm'
                                            : 'bg-slate-800 text-slate-200 border border-slate-700/50 rounded-tl-sm'
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                        <span className="text-[10px] opacity-50 mt-1 block px-1">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-800 border border-slate-700/50 p-3 rounded-2xl rounded-tl-sm flex gap-2 items-center">
                                        <span className="w-2 h-2 bg-violet-500/50 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-violet-500/50 rounded-full animate-bounce delay-75"></span>
                                        <span className="w-2 h-2 bg-violet-500/50 rounded-full animate-bounce delay-150"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {messages.length < 4 && !isTyping && (
                            <div className="px-4 pb-2">
                                <p className="text-xs text-slate-500 mb-2 pl-1">Suggested topics:</p>
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                                    {quickAsks.map(qa => (
                                        <button
                                            key={qa}
                                            onClick={() => handleQuickAsk(qa)}
                                            className="whitespace-nowrap px-3 py-1.5 bg-slate-800/50 border border-slate-700 hover:border-violet-500/50 hover:bg-violet-500/10 rounded-full text-xs text-slate-300 transition-colors"
                                        >
                                            {qa}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700/50 bg-slate-800/30">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-violet-500/50 transition-colors placeholder:text-slate-600"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-colors shadow-lg shadow-violet-600/20"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PortfolioAssistant;
