"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-dark">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          📩 Get in Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-2"
        >
          <p>📧 <a className="text-accent hover:underline" href="mailto:oke.iyanuoluwa12@gmail.com">oke.iyanuoluwa12@gmail.com</a></p>
          <p>💼 <a className="text-accent hover:underline" href="https://www.linkedin.com/in/iyanuoluwa-enoch-oke/">linkedin.com/in/iyanuoluwa-enoch-oke</a></p>
          <p>📝 <a className="text-accent hover:underline" href="https://drive.google.com/file/d/1QwpycQIutZnM9STD5lv9PMcv4v3nZxjS/view?usp=sharing" target="_blank">Download my CV</a></p>
          <p className="text-sm text-white/50 mt-6">Built with ❤️ using Next.js + TailwindCSS • © {new Date().getFullYear()} Iyanuoluwa Oke</p>
        </motion.div>
      </div>
    </section>
  );
}
