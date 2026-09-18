import React from "react";
import './About.css';
import { motion } from "framer-motion";

import { potrait } from "../assets";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Highlight = ({ children }) => (
  <strong className='about-highlight'>{children}</strong>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='about-heading'>
        <p className='about-eyebrow'>Introduction</p>
        <h2 className='about-title'>Overview</h2>
      </motion.div>

      <div className='about-layout'>
        <motion.div
          variants={fadeIn("right", "", 0.15, 0.9)}
          className='about-portrait-col'
        >
          <div className='about-portrait'>
            <div className='about-portrait-frame'>
              <img src={potrait} alt='Junayet Islam' className='about-portrait-img' />
            </div>
            <span className='about-portrait-ring' aria-hidden='true' />
          </div>

          <div className='about-identity'>
            <p className='about-identity-name'>Junayet Islam</p>
            <p className='about-identity-role'>Developer &amp; writer · Chattogram, Bangladesh</p>
          </div>

          <dl className='about-facts'>
            <div className='about-fact'>
              <dt>Builds with</dt>
              <dd>React · Django</dd>
            </div>
            <div className='about-fact'>
              <dt>Writes in</dt>
              <dd>Bangla · English</dd>
            </div>
            <div className='about-fact'>
              <dt>Open to</dt>
              <dd>Freelance work</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div variants={fadeIn("left", "", 0.2, 0.9)} className='about-copy-col'>
          <p className='about-lead'>
            I build web applications end to end — the interface people touch and the
            backend that keeps it honest.
          </p>

          <p className='about-copy'>
            On the frontend I work with <Highlight>React</Highlight>,{" "}
            <Highlight>JavaScript</Highlight> and <Highlight>TypeScript</Highlight>, styled
            with <Highlight>Tailwind</Highlight> and brought to life with{" "}
            <Highlight>GSAP</Highlight> when motion earns its place. On the backend I reach
            for <Highlight>Python</Highlight> and <Highlight>Django</Highlight>, which is
            what powers the blood donation platform further down this page.
          </p>

          <p className='about-copy'>
            I also write — documentation, product copy and long-form pieces — because a
            product that cannot explain itself is only half finished. I learn quickly, I
            ask the questions that save a rebuild later, and I would rather ship something
            small that works than something large that almost does.
          </p>

          <div className='about-signature-wrap'>
            <span className='about-signature'>Junayet</span>
            <span className='about-signature-rule' aria-hidden='true' />
          </div>
        </motion.div>
      </div>

      <div className='about-services'>
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            variants={fadeIn("up", "spring", 0.1 + index * 0.12, 0.7)}
            className='service-card'
          >
            <img src={service.icon} alt='' className='service-icon' />
            <h3 className='service-title'>{service.title}</h3>
            <p className='service-blurb'>{service.blurb}</p>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
