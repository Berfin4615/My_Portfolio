import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filterProjects, setFilterProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        const query = '*[_type == "projects"]';

        client.fetch(query).then((data) => {
            setProjects(data);
            setFilterProjects(data);
        });
    }, []);

    const handleProjectsFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'All') {
                setFilterProjects(projects);
            } else {
                setFilterProjects(projects.filter((projects) => projects.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <>
        <h2 className="head-text">My <span>Projects</span> Section</h2>

        <div className="app__projects-filter">
            {['Design', 'Web App', 'Robotic', 'Education', 'All'].map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleProjectsFilter(item)}
                    className={`app__projects-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                >
                    {item}
                </div>
            ))}
        </div>

        <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__projects-portfolio"
        >
            {filterProjects.map((projects, index) => (
                <div className="app__projects-item app__flex" key={index}>
                    <div
                        className="app__projects-img app__flex"
                    >
                        <img src={urlFor(projects.imgUrl)} alt={projects.name} />

                        <motion.div
                            whileHover={{ opacity: [0, 1] }}
                            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                            className="app__projects-hover app__flex"
                        >
                            <a href={projects.projectLink} target="_blank" rel="noreferrer">

                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.90] }}
                                    transition={{ duration: 0.25 }}
                                    className="app__flex"
                                >
                                    <AiFillEye />
                                </motion.div>
                            </a>
                            <a href={projects.codeLink} target="_blank" rel="noreferrer">
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.90] }}
                                    transition={{ duration: 0.25 }}
                                    className="app__flex"
                                >
                                    <AiFillGithub />
                                </motion.div>
                            </a>
                        </motion.div>
                    </div>

                    <div className="app__projects-content app__flex">
                        <h4 className="bold-text">{projects.title}</h4>
                        <p className="p-text" style={{ marginTop: 10 }}>{projects.description}</p>

                        <div className="app__projects-tag app__flex">
                            <p className="p-text">{projects.tags[0]}</p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Projects, 'app__projects'),
    'projects',
    'app__primarybg',
);