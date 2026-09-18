import React from "react";
import './Works.css';
import { FaArrowRight, FaHeartbeat } from 'react-icons/fa';
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturedProject = ({
  name,
  description,
  tags,
  highlights = [],
  image,
  live_link,
}) => (
  <motion.article variants={fadeIn("up", "", 0.15, 0.9)} className='feature-card'>
    <a
      className='feature-art'
      href={live_link}
      target='_blank'
      rel='noreferrer'
      tabIndex={-1}
      aria-hidden='true'
    >
      <img src={image} alt='' className='feature-art-img' loading='lazy' />
    </a>

    <div className='feature-body'>
      <p className='feature-status'>
        <span className='feature-pulse' aria-hidden='true' />
        Live · Patiya, Chattogram
      </p>

      <h3 className='feature-name'>{name}</h3>
      <p className='feature-description'>{description}</p>

      <ul className='feature-highlights'>
        {highlights.map((item) => (
          <li key={item}>
            <FaHeartbeat className='feature-bullet' aria-hidden='true' />
            {item}
          </li>
        ))}
      </ul>

      <div className='feature-tags'>
        {tags.map((tag) => (
          <span key={tag.name} className={`project-tag ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>

      <a href={live_link} target='_blank' rel='noreferrer' className='feature-cta'>
        Visit the live site
        <FaArrowRight aria-hidden='true' />
      </a>
    </div>
  </motion.article>
);

const Works = () => {
  const [featured] = projects;

  return (
    <>
      <motion.div variants={textVariant()} className='projects-heading'>
        <p className='projects-eyebrow'>Selected work</p>
        <h2 className='projects-title'>Projects</h2>
      </motion.div>

      <div className='projects-intro'>
        <p>
          One project, chosen on purpose. It is the piece of work I would want
          someone to judge me by: a real tool, used by real people, solving a
          problem where minutes matter.
        </p>
      </div>

      <div className='projects-stage'>
        {featured && <FeaturedProject {...featured} />}

        <motion.div variants={fadeIn("up", "", 0.3, 0.8)} className='next-slot'>
          <p className='next-slot-label'>Next up</p>
          <p className='next-slot-copy'>
            More work is in progress and will land here as it ships.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
