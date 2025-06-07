"use client";

import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import { useState, useEffect, forwardRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 0,
    title: "Website Portfolio",
    description: "Website personal portfolio dengan desain modern dan responsif.",
    imageUrl: "https://source.unsplash.com/random/400x300?portfolio",
  },
  {
    id: 1,
    title: "E-commerce App",
    description: "Aplikasi belanja online dengan fitur lengkap dan pembayaran mudah.",
    imageUrl: "https://source.unsplash.com/random/400x300?ecommerce",
  },
  {
    id: 2,
    title: "Blog Platform",
    description: "Platform blogging dengan sistem manajemen konten sederhana.",
    imageUrl: "https://source.unsplash.com/random/400x300?blog",
  },
  {
    id: 3,
    title: "Chat App",
    description: "Aplikasi chatting realtime dengan fitur grup dan notifikasi.",
    imageUrl: "https://source.unsplash.com/random/400x300?chat",
  },
];

export default function ProjectCarousel() {
  const [[page, direction], setPage] = useState<[number, 1 | -1]>([0, 1]);

  // Auto-play: pindah slide tiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [page]);

  const paginate = (newDirection: 1 | -1) => {
    const nextPage = wrap(0, projects.length, page + newDirection);
    setPage([nextPage, newDirection]);
  };

  const project = projects[page];

  return (
      <div style={container}>
        <motion.button
          aria-label="Previous"
          onClick={() => paginate(-1)}
          style={button}
          whileTap={{ scale: 0.9 }}
        >
          ◀
        </motion.button>

        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <ProjectSlide
            key={project.id}
            project={project}
            direction={direction}
          />
        </AnimatePresence>

        <motion.button
          aria-label="Next"
          onClick={() => paginate(1)}
          style={button}
          whileTap={{ scale: 0.9 }}
        >
          ▶
        </motion.button>
      </div>
  );
}

interface ProjectSlideProps {
  project: Project;
  direction: 1 | -1;
}

const variants = {
  enter: (direction: number) => ({
    x: direction * 100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: (direction: number) => ({
    x: direction * -100,
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

const ProjectSlide = forwardRef<HTMLDivElement, ProjectSlideProps>(
  ({ project, direction }, ref) => (
    <motion.div
      ref={ref}
      className="project-slide"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      style={{
        width: 400,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        style={{ width: "100%", height: 250, objectFit: "cover" }}
        loading="lazy"
      />
      <div style={{ padding: 16 }}>
        <h3
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: "bold",
            color: "#000",
            fontFamily: "sans-serif"
          }}
        >
          {project.title}
        </h3>
        <p style={{ marginTop: 8, color: "#555", fontFamily: "sans-serif"}}>{project.description}</p>
      </div>
    </motion.div>
  )
);

ProjectSlide.displayName = "ProjectSlide";

// Styles
const container: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
};

const button: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: "50%",
  border: "none",
  backgroundColor: "#F28DD0",
  color: "#fff",
  fontSize: 20,
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
};
