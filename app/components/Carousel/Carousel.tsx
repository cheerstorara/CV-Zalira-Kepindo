"use client";

import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import { useState, useEffect, forwardRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  figmaUrl?: string;
}

const projects: Project[] = [
  {
      id: 0,
      title: "UI/UX Apotek dan Klinik Dokter Universitas Teknologi Digital Indonesia Sehat",
      description: "Desain Aplikasi Mobile Apotek dan Klinik Dokter",
      imageUrl: "/assets/sertifikat/RumahSakit.png",
      figmaUrl: "https://www.figma.com/design/b8pE4wzZWprxBOEOUJHx0I/Rumah-Sakit?node-id=0-1&t=jrhoMLRgoabeOIle-1",
  },
  {
    id: 1,
    title: "UI/UX Roomzy",
    description: "Desain Aplikasi Mobile Pemesanan Kamar Hotel",
    imageUrl: "/assets/sertifikat/Roomzy.png",
    figmaUrl: "https://www.figma.com/design/RHzYA0pXjSQuZxmQ8H8HEC/UI-UX-PERHOTELAN?node-id=106-595&t=Q1egBqv9SRpoQvG4-0",
  },
  {
    id: 2,
    title: "UI/UX Rhode Liptint",
    description: "Contoh tampilan shopping website kecantikan",
    imageUrl: "/assets/sertifikat/Rhode.png",
    figmaUrl: "https://www.figma.com/design/mLOQx3fM1EfYfwAUrN3HyD/Liptint?node-id=0-1&p=f&t=8lIN2YAqbJOzqPvl-0",
  },
  {
    id: 3,
    title: "UI/UX Lolipop",
    description: "Website smart animate dengan menggunakan tools Figma",
    imageUrl: "/assets/sertifikat/Lolipop.png",
    figmaUrl: "https://www.figma.com/design/etYkTDx5Vd36r4mQL680EH/Lolipop?node-id=0-1&p=f&t=8lIN2YAqbJOzqPvl-0"
  },
  {
    id: 4,
    title: "Tic Tac Toe Game",
    description: "Game Website sederhana menggunakan bahasa pemrograman JavaScript",
    imageUrl: "/assets/sertifikat/TicTacToe.png",
    figmaUrl: "https://tic-tac-toe-khaki-phi.vercel.app/"
  },
  {
    id: 5,
    title: "Personal Website",
    description: "Situs pribadi dan portofolio milik Zalira Kepindo",
    imageUrl: "/assets/sertifikat/Portofolio.png",
    figmaUrl: "https://cv-zalira-kepindo.vercel.app/"
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
  ({ project, direction }, ref) => {
    const Content = (
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
          cursor: project.figmaUrl ? "pointer" : "default",
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
          <p style={{ marginTop: 8, color: "#555", fontFamily: "sans-serif" }}>
            {project.description}
          </p>
        </div>
      </motion.div>
    );

    // Jika ada figmaUrl, bungkus dengan <a>
    return project.figmaUrl ? (
      <a
        href={project.figmaUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        {Content}
      </a>
    ) : (
      Content
    );
  }
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
