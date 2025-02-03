import React, { useRef } from "react";
import { PROJECTS } from "../constants";
import { motion, useTransform, useScroll } from "framer-motion";

const Project = () => {
    return (

        <div >
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="my-20 text-center text-4xl "
            >
                Scroll down to explore projects
            </motion.h1>

            <HorizontalScrollProjects />
        </div>
    );
};

const HorizontalScrollProjects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Control the horizontal movement based on vertical scroll progress
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[160vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4 px-10">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-700 rounded-xl shadow-lg">
            <div
                style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center bg-black/40 backdrop-blur-sm rounded-xl">
                <h2 className="text-2xl text-center font-bold text-white">{project.title}</h2>
                <p className="mt-2 text-sm text-neutral-300 text-center px-4">
                    {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {project.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
