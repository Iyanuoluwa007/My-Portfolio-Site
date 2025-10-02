"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="flex flex-col items-center justify-center px-6 pt-32 pb-32 text-white text-center"
      style={{
        backgroundImage: "url('/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-4xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-cyan-400 text-center"
        >
          🙋‍♂️ About Me
        </motion.h2>

        {/* Full Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg leading-relaxed text-gray-200"
        >
          I’m <span className="text-cyan-400 font-semibold">Iyanuoluwa Oke</span>, 
          a passionate <span className="text-cyan-300">Robotics & AI Engineer </span> 
          with a background in <span className="text-cyan-300">MSc Robotics & Automation 
          (University of Salford)</span> and 
          <span className="text-cyan-300"> BEng Electrical & Electronics Engineering</span>.
          <br /><br />
          My work focuses on <span className="text-cyan-300">ROS2, Computer Vision, Deep Learning, 
          and Autonomous Robotics</span>.  
          I have built projects on <span className="text-cyan-300">YOLO object detection</span>, 
          <span className="text-cyan-300"> SLAM navigation</span>, 
          <span className="text-cyan-300"> gesture recognition</span>, and 
          <span className="text-cyan-300"> autonomous perception systems</span>.
        </motion.p>
      </div>
    </section>
  );
}
