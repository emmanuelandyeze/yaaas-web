"use client";

import { useModal } from "@/components/Modal";
import { motion } from "framer-motion";

interface ProjectDetailProps {
    project: {
        title: string;
        category: string;
        image: string;
        description: string;
        client: string;
        year: string;
    };
}

function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <div className="flex flex-col gap-10">
            <div className="w-full overflow-hidden rounded-sm" style={{ aspectRatio: "16/9" }}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="grid md:grid-cols-3 gap-10 text-white">
                <div className="md:col-span-2 flex flex-col gap-4">
                    <h2
                        className="text-3xl md:text-4xl font-bold italic font-serif uppercase"
                        style={{ letterSpacing: "-0.01em", lineHeight: 1.1 }}
                    >
                        {project.title}
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: "#999" }}>
                        {project.description}
                    </p>
                </div>

                {/* Meta sidebar */}
                <div
                    className="flex flex-col gap-6 pt-6 md:pt-0"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                    {[
                        { label: "Client", value: project.client },
                        { label: "Category", value: project.category },
                        { label: "Year", value: project.year },
                    ].map(({ label, value }) => (
                        <div key={label} className="flex flex-col gap-1">
                            <span
                                className="font-bold"
                                style={{
                                    fontSize: "9px",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    color: "var(--color-primary, #aaa)",
                                }}
                            >
                                {label}
                            </span>
                            <span
                                className="font-bold uppercase"
                                style={{ fontSize: "11px", letterSpacing: "0.15em" }}
                            >
                                {value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const projects = [
    {
        id: 1,
        title: "Aura Collective",
        category: "Creative Direction",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200",
        description:
            "A comprehensive visual overhaul for a global fashion house, focusing on the intersection of minimalism and organic structure.",
        client: "Aura Global",
        year: "2025",
    },
    {
        id: 2,
        title: "Sonic Void",
        category: "Sound Design",
        image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=1200",
        description:
            "An immersive audio-visual installation exploring the concept of digital silence and the decay of analog signals.",
        client: "Institute of Modern Sound",
        year: "2024",
    },
    {
        id: 3,
        title: "Vanguard Identity",
        category: "Brand Systems",
        image: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?auto=format&fit=crop&q=80&w=1200",
        description:
            "Redefining the visual language for a new generation of creative professionals.",
        client: "Vanguard Co.",
        year: "2024",
    },
    {
        id: 4,
        title: "Ether Experience",
        category: "Digital Art",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200",
        description:
            "A series of NFTs and digital sculptures commissioned for the first virtual art biennial.",
        client: "Meta-Gallery",
        year: "2025",
    },
];

// Shared animation variants for consistency
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const headerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
};

export default function ProjectsPage() {
    const { openModal } = useModal();

    return (
        <div
            style={{
                paddingTop: "8rem",
                paddingBottom: "7rem",
                minHeight: "100vh",
                backgroundColor: "var(--color-background)",
            }}
        >
            {/* Page container */}
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>

                {/* Header */}
                <motion.div
                    style={{ marginBottom: "5rem" }}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={headerVariants} style={{ marginBottom: "1.25rem" }}>
                        <h1
                            style={{
                                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                                fontWeight: 700,
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                lineHeight: 1,
                                margin: 0,
                            }}
                        >
                            Case Studies
                        </h1>
                    </motion.div>
                    <motion.p
                        variants={headerVariants}
                        style={{
                            color: "#999",
                            fontSize: "10px",
                            letterSpacing: "0.28em",
                            textTransform: "uppercase",
                            fontWeight: 500,
                            maxWidth: "36rem",
                            lineHeight: 1.8,
                            margin: 0,
                        }}
                    >
                        Our portfolio is a reflection of our commitment to excellence.
                        Each project is a deep dive into the essence of a brand.
                    </motion.p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="projects-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={containerVariants}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "1.5rem",
                    }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="project-card"
                            onClick={() => openModal(<ProjectDetail project={project} />)}
                            style={{
                                cursor: "pointer",
                                backgroundColor: "rgba(0,0,0,0.4)",
                                border: "1px solid rgba(255,255,255,0.05)",
                                overflow: "hidden",
                                borderRadius: "10px",
                            }}
                        >
                            {/* Image */}
                            <div
                                className="project-image-wrap"
                                style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                    className="project-img"
                                />
                                {/* Hover overlay */}
                                <div
                                    className="project-overlay"
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        backgroundColor: "rgba(0,0,0,0.45)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        opacity: 0,
                                        transition: "opacity 0.4s ease",
                                    }}
                                >
                                    <span className="btn-pill">View Project</span>
                                </div>
                            </div>

                            {/* Card footer */}
                            <div
                                style={{
                                    padding: "1.5rem 1.75rem",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                    gap: "1rem",
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                                    <h3
                                        className="project-title"
                                        style={{
                                            fontSize: "1.2rem",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em",
                                            fontStyle: "italic",
                                            fontFamily: "serif",
                                            margin: 0,
                                            transition: "color 0.3s ease",
                                        }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "9px",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            fontWeight: 700,
                                            color: "var(--color-primary, #aaa)",
                                            margin: 0,
                                        }}
                                    >
                                        {project.category}
                                    </p>
                                </div>

                                <span
                                    style={{
                                        fontSize: "9px",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        fontWeight: 700,
                                        color: "#555",
                                        flexShrink: 0,
                                    }}
                                >
                                    {project.year}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Hover styles via a <style> tag (no Tailwind needed) */}
            <style>{`
                .project-img {
                    filter: grayscale(1);
                    transition: transform 0.9s cubic-bezier(0.25,0.1,0.25,1), filter 0.6s ease;
                }
                .project-card:hover .project-img {
                    filter: grayscale(0);
                    transform: scale(1.04);
                }
                .project-card:hover .project-overlay {
                    opacity: 1;
                }
                .project-card:hover .project-title {
                    color: var(--color-primary, #ccc);
                }
                .project-card {
                    transition: border-color 0.4s ease, box-shadow 0.4s ease;
                }
                .project-card:hover {
                    border-color: #c9a84c !important;
                    box-shadow: 0 0 0 1px #c9a84c, 0 8px 32px rgba(201, 168, 76, 0.12);
                }

                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}
