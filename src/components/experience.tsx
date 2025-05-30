"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "KreditBee, Bangalore",
    date: "January 2023 – Present",
    description: [
      "Worked on the performance optimization for the initial load of the application from login to home page.",
      "Created more than 130+ generic UI components with the team that bring uniformity throughout the application.",
      "Implemented reusable and custom screen that significantly reduced 50% development time.",
    ],
  },
  {
    title: "Software Developer 2",
    company: "Nouveau Labs, Bangalore",
    date: "November 2021 – January 2023",
    description: [
      "Building React-Redux dashboards for cloud communication using Micro Frontend technique.",
      "Developed multiple dashboards for Cyber Security using Angular 11 framework and RxJs library.",
      "Created demo web app using React-Redux with Amazon-Amplify and Firebase Cloud messaging.",
    ],
  },
  {
    title: "Software Developer",
    company: "Kantar, Bangalore",
    date: "September 2020 – November 2021",
    description: [
      "Created user friendly interactive dashboards using Angular, JavaScript, Lodash SCSS and jQuery.",
      "Worked on a 4-page application which contains 10+ views.",
      "Plotted user friendly 20 plus charts using HighCharts library.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-muted-foreground mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.date}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}