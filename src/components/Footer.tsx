

const Footer = () => {
    return (
        <footer className="py-8 border-t border-slate-800 bg-slate-950">
            <div className="container mx-auto px-4 text-center">
                <p className="text-slate-500 flex items-center justify-center gap-2">
                    © {new Date().getFullYear()} Shashidhar Naik
                </p>
            </div>
        </footer>
    );
};

export default Footer;
