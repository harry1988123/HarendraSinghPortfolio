"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Image Search",
    description: "React-based image search application",
    image: "/images/p1.png",
    github: "https://github.com/harry1988123/MindPeers_Task",
    demo: "https://condescending-boyd-93b04c.netlify.app/",
    tech: "React",
  },
  {
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency tracking application",
    image: "/images/p2.png",
    github: "https://github.com/harry1988123/CryptoTracker",
    demo: "https://614ef9cfa494f61449915e2b--friendly-dubinsky-56c396.netlify.app",
    tech: "Angular",
  },
  {
    title: "Emoji Search",
    description: "Emoji search and filtering application",
    image: "/images/p3.png",
    github: "https://github.com/harry1988123/rocketlane",
    demo: "https://cranky-pare-68e9cb.netlify.app/",
    tech: "React",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <p className="text-sm text-primary mb-4">{project.tech}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}