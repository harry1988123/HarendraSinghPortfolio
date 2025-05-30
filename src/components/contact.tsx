"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container max-w-2xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="glass p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone/WhatsApp</h3>
              <p className="text-muted-foreground">+91 9790729403</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">pal.harendra95@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Delhi, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Resume</h3>
              <a
                href="https://drive.google.com/file/d/1V4ZrnaVjcqBAdaGmR5qfrf-9CfEuLVRu/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/harendra-singh1995/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}