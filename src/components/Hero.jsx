import { motion, AnimatePresence } from "framer-motion";
import heroBg from "../assets/hero.png";
import { useState } from "react";

function Hero() {
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <>
      <section className="hero">
        <img
          src={heroBg}
          alt="Aneela Agha"
          className="hero-bg-img"
        />

        <div className="hero-content">
          <motion.h1 className="hero-title">
            Aneela Agha
          </motion.h1>

          <p className="hero-description">
            Software & AI Engineer
          </p>

          <div className="hero-buttons">
            <button className="play-btn">
              <span className="icon">▶</span>
              <a href="#projects">Projects</a>
            </button>

            <button
              className="info-btn"
              onClick={() => setShowAboutModal(true)}
            >
              <span className="icon">ⓘ</span> More Info
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showAboutModal && (
          <motion.div
            className="about-modal-overlay"
            onClick={() => setShowAboutModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="about-modal"
              id="about-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <button
                className="close-modal"
                onClick={() => setShowAboutModal(false)}
              >
                ×
              </button>

              <div
                className="about-modal-hero"
                style={{ backgroundImage: `url(${heroBg})` }}
              >
                <div className="about-modal-gradient"></div>

                <div className="about-modal-title">
                  <h2>Aneela Agha</h2>
                </div>
              </div>

              <div className="about-modal-content">
                <div className="about-modal-left">
                  <p>
                    A curious computer science student on a journey through code,
                    ideas, and endless problem solving. Aneela Agha studies
                    Computer Science at the University of Maryland Global Campus,
                    where she spends her time building full stack applications
                    and experimenting with AI agents because it is the world of
                    AI and she is just living in it.
                  </p>

                  <p>
                    Along the way, she also plays an active role in the tech
                    community as Chair of the IEEE UMGC Student Branch and Vice
                    Chair of the Student Advisory Council, helping bring students
                    together around technology and innovation.
                  </p>

                  <p>
                    Between coding sessions and late night debugging, she joins
                    online hackathons where new ideas are built under pressure.
                    In quieter moments she writes poetry. And lately, as she
                    works toward landing a software engineering internship, she
                    spends her evenings practicing data structures and algorithms,
                    preparing for the next chapter of her story in technology.
                  </p>

                  <div className="about-modal-buttons">
                    <a
                      href="https://github.com/Aneelaagha"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aneelaagha/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="about-modal-right">
                  <p>
                    <strong>Focus:</strong> Full-Stack Development, AI Tools,
                    Backend Systems
                  </p>
                  <p>
                    <strong>Tech:</strong> React, Java, Python, Node.js, Docker,
                    AWS
                  </p>
                  <p>
                    <strong>Leadership:</strong> IEEE UMGC Chair, STAC Vice Chair
                  </p>
                  <p>
                    <strong>Currently Building:</strong> Portfolio projects and
                    developer tools
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hero;