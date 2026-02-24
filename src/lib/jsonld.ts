// ─────────────────────────────────────────────────────────────────────────────
// Centralized JSON-LD Structured Data
// Follows schema.org specifications for Person, WebSite, and CreativeWork
// ─────────────────────────────────────────────────────────────────────────────

const BASE_URL = "https://shashidhar-portfolio.netlify.app";

// ── 1. Person Schema ───────────────────────────────────────────────────────────
export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Shashidhar Naik",
    givenName: "Shashidhar",
    familyName: "Naik",
    jobTitle: "Software Engineer II",
    description:
        "Full Stack Developer with 4+ years of experience specializing in MERN & MEVN stack. Frontend Lead for enterprise Warehouse Management Systems. Open source contributor publishing tools on NPM.",
    url: BASE_URL,
    email: "shashidharnaik8@gmail.com",
    telephone: "+91-9119437320",
    image: `${BASE_URL}/portfolio_hero_section.png`,
    address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560076",
        addressCountry: "IN",
    },
    sameAs: [
        "https://github.com/shashi089",
        "https://www.linkedin.com/in/shashidhar-naik-aab5b512a/",
        "https://www.npmjs.com/~shashidharlbs",
    ],
    knowsAbout: [
        "React.js",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Vue.js",
        "Nuxt.js",
        "MongoDB",
        "PostgreSQL",
        "Python",
        "FastAPI",
        "Material UI",
        "Warehouse Management Systems",
        "Enterprise Web Applications",
        "Open Source Development",
        "REST APIs",
        "Full Stack Development",
    ],
    worksFor: {
        "@type": "Organization",
        name: "Cymbeline Innovation Pvt. Ltd",
    },
    alumniOf: {
        "@type": "EducationalOrganization",
        name: "BLDEA's College of Engineering and Technology, Bijapur",
    },
};

// ── 2. WebSite Schema ──────────────────────────────────────────────────────────
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Shashidhar Naik — Full Stack Developer Portfolio",
    url: BASE_URL,
    description:
        "Professional portfolio of Shashidhar Naik, a Software Engineer II specializing in React, Next.js, Node.js, and enterprise web application development.",
    inLanguage: "en-US",
    author: {
        "@id": `${BASE_URL}/#person`,
    },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
    },
};

// ── 3. Projects — ItemList of CreativeWork ────────────────────────────────────
export const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/#projects`,
    name: "Shashidhar Naik's Software Projects",
    description:
        "A collection of enterprise-grade web applications and open-source tools built by Shashidhar Naik.",
    numberOfItems: 6,
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            item: {
                "@type": "CreativeWork",
                name: "Warehouse Management System (WMS)",
                description:
                    "Enterprise IIoT solution for Panasonic managing inventory, storage IN/OUT, quality inspection, and BOM modules. Built with React, TypeScript, and Material UI.",
                url: `${BASE_URL}/#projects`,
                creator: { "@id": `${BASE_URL}/#person` },
                keywords: [
                    "Warehouse Management System",
                    "WMS",
                    "React",
                    "TypeScript",
                    "Material UI",
                    "IIoT",
                    "Enterprise",
                    "Panasonic",
                ],
                programmingLanguage: ["TypeScript", "JavaScript"],
            },
        },
        {
            "@type": "ListItem",
            position: 2,
            item: {
                "@type": "CreativeWork",
                name: "Stock Automation Platform",
                description:
                    "High-frequency automated trading system with real-time buy/sell execution, Cron-based background jobs, and live dashboards. Built with MERN Stack and Python.",
                url: `${BASE_URL}/#projects`,
                creator: { "@id": `${BASE_URL}/#person` },
                keywords: [
                    "Stock Automation",
                    "MERN Stack",
                    "Node.js",
                    "Python",
                    "Real-time",
                    "Trading",
                ],
                programmingLanguage: ["JavaScript", "TypeScript", "Python"],
            },
        },
        {
            "@type": "ListItem",
            position: 3,
            item: {
                "@type": "CreativeWork",
                name: "IIoT Monitoring Dashboard",
                description:
                    "Data visualization platform for tracking machine health, production metrics, and shift management in real-time. Built with Vue.js, Node.js, and charting libraries.",
                url: `${BASE_URL}/#projects`,
                creator: { "@id": `${BASE_URL}/#person` },
                keywords: [
                    "IIoT",
                    "Dashboard",
                    "Vue.js",
                    "Node.js",
                    "Analytics",
                    "RBAC",
                ],
                programmingLanguage: ["JavaScript", "TypeScript"],
            },
        },
        {
            "@type": "ListItem",
            position: 4,
            item: {
                "@type": "SoftwareSourceCode",
                name: "QR Layout Designer & Libraries",
                description:
                    "Open-source NPM suite: qrlayout-core (logic engine) and qrlayout-ui (framework-agnostic UI components) for designing and printing QR labels.",
                url: "https://qr-layout-designer.netlify.app/",
                codeRepository: "https://github.com/shashi089",
                creator: { "@id": `${BASE_URL}/#person` },
                keywords: [
                    "Open Source",
                    "NPM",
                    "QR Code",
                    "React",
                    "TypeScript",
                    "Library",
                ],
                programmingLanguage: ["TypeScript", "JavaScript"],
                license: "https://opensource.org/licenses/MIT",
            },
        },
        {
            "@type": "ListItem",
            position: 5,
            item: {
                "@type": "CreativeWork",
                name: "E-Commerce Application",
                description:
                    "Responsive e-commerce platform with product catalog, filtering, search, and shopping cart functionality built with React.js and Bootstrap.",
                url: `${BASE_URL}/#projects`,
                creator: { "@id": `${BASE_URL}/#person` },
                keywords: ["E-Commerce", "React.js", "Bootstrap", "JavaScript"],
                programmingLanguage: ["JavaScript"],
            },
        },
        {
            "@type": "ListItem",
            position: 6,
            item: {
                "@type": "CreativeWork",
                name: "HR Management System (HRMS)",
                description:
                    "Full-stack HR solution for employee management, payroll processing, attendance tracking, and secure RBAC authentication.",
                url: `${BASE_URL}/#projects`,
                creator: { "@id": `${BASE_URL}/#person` },
                keywords: [
                    "HRMS",
                    "HR Management",
                    "React.js",
                    "Node.js",
                    "MongoDB",
                    "Express",
                ],
                programmingLanguage: ["JavaScript", "TypeScript"],
            },
        },
    ],
};
