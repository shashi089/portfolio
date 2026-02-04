"use client";

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
            text: "Hi there! I'm Shashidhar's AI Assistant. Ask me anything about my WMS expertise, React/Next.js skills, or my professional background at Cymbeline Innovation!",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const experienceData = [
        {
            company: "Cymbeline Innovation",
            aliases: ["cymbeline", "panasonic", "current", "latest"],
            role: "Software Engineer II",
            points: [
                "I currently serve as the Frontend Lead for the Panasonic WMS project.",
                "I architect scalable React solutions, mentor junior developers, and drive feature planning directly with stakeholders.",
                "My work ensures 99.9% system reliability for critical warehouse operations.",
                "I heavily utilize TypeScript and Material UI to build robust, type-safe interfaces."
            ]
        },
        {
            company: "Flyers Soft",
            aliases: ["flyers", "flyers soft"],
            role: "Software Developer",
            points: [
                "I specialized in delivering pixel-perfect frontend implementations using React.js and Nuxt.js.",
                "I bridged the gap between design and implementation, ensuring 100% fidelity to Figma, Zeplin, and Adobe XD designs.",
                "I also handled backend integrations and mentored interns on modern web practices."
            ]
        },
        {
            company: "Triofi Technologies",
            aliases: ["triofi"],
            role: "Software Developer",
            points: [
                "This is where I honed my full-stack foundations.",
                "I built end-to-end features, from designing database schemas in MongoDB to creating responsive UIs in React.",
                "I focused on writing clean, reusable code and optimizing application performance."
            ]
        }
    ];

    const projectData = [
        {
            title: "Warehouse Management System (WMS)",
            aliases: ["wms", "warehouse", "logistics", "panasonic"],
            desc: "an enterprise-grade solution for Panasonic that streamlined inventory, storage, and quality inspection workflows.",
            tech: "React, Material UI, and integrated deeply with IIoT hardware"
        },
        {
            title: "Stock Automation Platform",
            aliases: ["stock", "trading", "automation", "finance"],
            desc: "a high-frequency automated trading system featuring real-time buy/sell execution and complex Cron-based background jobs.",
            tech: "MERN Stack (MongoDB, Express, React, Node) with Socket.io for real-time updates"
        },
        {
            title: "IIoT Monitoring Dashboard",
            aliases: ["iiot", "monitoring", "dashboard", "analytics"],
            desc: "a comprehensive data visualization tool for tracking machine health and production metrics in real-time, complete with Role-Based Access Control (RBAC).",
            tech: "Vue.js, Node.js, and various Charting libraries"
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
        if (lowerInput.includes('who are you') || lowerInput.includes('your name') || lowerInput.includes('about yourself') || lowerInput.includes('intro')) {
            return "I'm Shashidhar's AI Portfolio Assistant! I can help you explore his professional background, technical expertise, and key projects. Try asking, 'What is your tech stack?' or 'Tell me about your experience at Cymbeline'.";
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
        if (lowerInput.includes('experience') || lowerInput.includes('history') || lowerInput.includes('work') || lowerInput.includes('job') || lowerInput.includes('career')) {
            return "I have over 4 years of experience delivering high-performance web applications. My current role is Software Engineer II at Cymbeline Innovation, and previously I worked at Flyers Soft and Triofi Technologies.";
        }

        if (lowerInput.includes('project') || lowerInput.includes('built') || lowerInput.includes('portfolio') || lowerInput.includes('case study')) {
            return "I've architected several enterprise-grade solutions, including a complex Warehouse Management System (WMS), a real-time Stock Automation Platform, and an IIoT Monitoring Dashboard. Which one would you like to know more about?";
        }

        if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('stack') || lowerInput.includes('react') || lowerInput.includes('node') || lowerInput.includes('next')) {
            return "My technical arsenal matches a Senior Full Stack profile: Core (React 19, Next.js 16, TypeScript, Node.js), Styling (Tailwind CSS 4, Framer Motion), and Backend (MongoDB, Express). I also specialize in performance optimization and system architecture.";
        }

        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire') || lowerInput.includes('reach') || lowerInput.includes('call')) {
            return "I'm always open to discussing new opportunities or collaborations! You can reach me via the Contact section below, or connect with me directly on LinkedIn.";
        }

        if (lowerInput.includes('resume') || lowerInput.includes('cv') || lowerInput.includes('download')) {
            return "You can download my latest resume from the navigation bar or the 'Contact' section.";
        }

        if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey') || lowerInput.includes('greetings')) {
            return "Hello! Great to have you here. I can tell you about my WMS project, my expertise in Next.js, or my work history. What's on your mind?";
        }

        if (lowerInput.includes('why hire') || lowerInput.includes('strength') || lowerInput.includes('value')) {
            return "You should hire me because I bring a blend of architectural vision and hands-on execution. I don't just write code; I build scalable, maintainable systems that drive business value, from optimizing WMS flows to ensuring SEO dominance.";
        }

        return "I'm still learning! Try asking about 'Experience', 'Projects', 'Tech Stack', or specific roles like 'WMS Lead' or 'Frontend Architect'.";
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
