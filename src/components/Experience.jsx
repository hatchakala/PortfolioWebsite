import { EXPERIENCES } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import React from "react";
import { FaTimes } from "react-icons/fa";
import ColgateLogo from "../assets/experiences/ColgatePalmoliveLogo.png";
import ColgateDetails from "../assets/experiences/ColgateDetailsPicture.png";
import NasaLogo from "../assets/experiences/NasaLogo.png";
import RutgersLogo from "../assets/experiences/RutgersLogo.png";
import PrincetonLogo from "../assets/experiences/PrincetonLearningExperienceLogo.png";
import SteelCityLogo from "../assets/experiences/SteelCityCodesLogo.png";
import KumonLogo from "../assets/experiences/KumonLogo.png";

const experienceLogos = [
  NasaLogo,        // NASA
  RutgersLogo,     // Agentic AI Research Assistant
  ColgateLogo,     // Colgate-Palmolive
  RutgersLogo,     // Learning Assistant
  PrincetonLogo,   // Princeton Learning Experience
  SteelCityLogo,   // Steel City Codes
  KumonLogo,       // Kumon
];

const experienceDetailImages = [
  null,            // NASA
  null,            // Agentic AI Research Assistant
  ColgateDetails,  // Colgate-Palmolive
  null,            // Learning Assistant
  null,            // Princeton Learning Experience
  null,            // Steel City Codes
  null,            // Kumon
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [detailsPanelTop, setDetailsPanelTop] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );
  const layoutRef = React.useRef(null);
  const experienceRefs = React.useRef([]);
  const detailsPanelRef = React.useRef(null);

  const handleExperienceClick = (index) => {
    setSelectedExperience((current) => (current === index ? null : index));
  };

  const handleClose = () => {
    setSelectedExperience(null);
    setDetailsPanelTop(0);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateDetailsPanelPosition = React.useCallback(() => {
    if (!isDesktop || selectedExperience === null) {
      setDetailsPanelTop(0);
      return;
    }

    const layoutElement = layoutRef.current;
    const selectedCard = experienceRefs.current[selectedExperience];
    const detailsPanel = detailsPanelRef.current;

    if (!layoutElement || !selectedCard || !detailsPanel) {
      return;
    }

    const layoutRect = layoutElement.getBoundingClientRect();
    const cardRect = selectedCard.getBoundingClientRect();
    const nextTop = cardRect.top - layoutRect.top;
    const maxTop = Math.max(0, layoutElement.offsetHeight - detailsPanel.offsetHeight);

    setDetailsPanelTop(Math.min(Math.max(0, nextTop), maxTop));
  }, [isDesktop, selectedExperience]);

  React.useLayoutEffect(() => {
    if (selectedExperience === null) {
      setDetailsPanelTop(0);
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      updateDetailsPanelPosition();
    });

    const timeoutId = window.setTimeout(() => {
      updateDetailsPanelPosition();
    }, 250);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(timeoutId);
    };
  }, [selectedExperience, updateDetailsPanelPosition]);

  React.useEffect(() => {
    if (selectedExperience === null || !isDesktop) {
      return;
    }

    const handleWindowResize = () => {
      updateDetailsPanelPosition();
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isDesktop, selectedExperience, updateDetailsPanelPosition]);

  React.useEffect(() => {
    if (selectedExperience === null) {
      return;
    }

    const handlePointerDown = (event) => {
      const detailsPanel = detailsPanelRef.current;
      const clickedOnExperience = experienceRefs.current.some(
        (card) => card && card.contains(event.target)
      );

      if (detailsPanel?.contains(event.target) || clickedOnExperience) {
        return;
      }

      handleClose();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [selectedExperience]);

  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        Experience
      </motion.h2>

      <div ref={layoutRef} className="relative flex flex-col gap-8 lg:min-h-[40rem]">
        <AnimatePresence>
          {selectedExperience !== null && (
            <motion.div
              ref={detailsPanelRef}
              initial={isDesktop ? { opacity: 0, x: -60, scale: 0.97 } : { opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={isDesktop ? { opacity: 0, x: -60, scale: 0.97 } : { opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              style={isDesktop ? { top: detailsPanelTop } : undefined}
              className="fixed inset-4 z-50 h-fit max-h-[90vh] overflow-y-auto rounded-2xl border border-[#2965F1]/30 bg-[#0a0a1f]/95 p-6 backdrop-blur-lg lg:absolute lg:left-0 lg:inset-auto lg:z-20 lg:w-[56%] lg:max-w-3xl lg:max-h-none lg:bg-white/10 lg:p-8"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-[#2965F1] transition-colors duration-200 z-10"
              >
                <FaTimes size={24} />
              </button>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#2965F1] mb-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                  {EXPERIENCES[selectedExperience].role}
                </h3>
                <p className="text-sm text-neutral-400 mb-2">{EXPERIENCES[selectedExperience].year}</p>
                <p className="text-lg text-purple-100 mb-4">{EXPERIENCES[selectedExperience].company}</p>
                
                {/* Description */}
                <div className="text-neutral-300 mb-6 space-y-2">
                  {EXPERIENCES[selectedExperience].description.split("\n").map((line, i) => (
                    <p key={i} className="leading-relaxed">{line.trim()}</p>
                  ))}
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {EXPERIENCES[selectedExperience].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded bg-[#2965F1] px-3 py-1 text-sm font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Picture - Only show if image exists */}
                {experienceDetailImages[selectedExperience] && (
                  <div className="w-full flex justify-center">
                    <img 
                      src={experienceDetailImages[selectedExperience]} 
                      alt="Experience details"
                      onLoad={updateDetailsPanelPosition}
                      className="w-3/4 lg:w-2/3 h-auto rounded-xl border-2 border-[#2965F1]/20 object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          animate={{
            width: isDesktop
              ? selectedExperience !== null
                ? '40%'
                : '66.666%'
              : '100%',
          }}
          transition={{ duration: 0.35 }}
          className={`${selectedExperience !== null && isDesktop ? 'lg:ml-auto' : 'mx-auto'} relative w-full`}
        >
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#2965F1]/30 hidden lg:block"></div>

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-8 flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:gap-8`}
            >
              {/* Content Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <motion.div
                  ref={(element) => {
                    experienceRefs.current[index] = element;
                  }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleExperienceClick(index)}
                  className={`cursor-pointer p-3 rounded-xl border-2 transition-all duration-300 ${
                    selectedExperience === index 
                      ? 'border-[#2965F1] bg-[#2965F1]/20 shadow-lg shadow-[#2965F1]/50' 
                      : 'border-[#2965F1]/30 bg-white/5 hover:border-[#2965F1]/60'
                  }`}
                >
                  {/* Logo */}
                  {experienceLogos[index] ? (
                    <div className={`w-12 h-12 rounded-lg overflow-hidden mb-2 ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} mx-auto lg:mx-0`}>
                      <img 
                        src={experienceLogos[index]} 
                        alt={`${experience.company} logo`}
                        className="w-full h-full object-contain bg-white/90 p-1 rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 bg-neutral-800/50 rounded-lg border-2 border-[#2965F1]/20 flex items-center justify-center text-xs text-neutral-500 mb-2 ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} mx-auto lg:mx-0`}>
                      Logo
                    </div>
                  )}
                  
                  <h4 className="font-bold text-white mb-1 text-xs lg:text-sm break-words">{experience.role}</h4>
                  <p className="text-xs text-neutral-400 line-clamp-2 break-words">{experience.company}</p>
                  <p className="text-xs text-neutral-500 mt-1 break-words">{experience.year}</p>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="hidden lg:flex items-center justify-center w-2/12">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                    selectedExperience === index 
                      ? 'border-[#2965F1] bg-[#2965F1] shadow-lg shadow-[#2965F1]/50' 
                      : 'border-[#2965F1]/50 bg-neutral-900'
                  }`}
                ></motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block w-5/12"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;


