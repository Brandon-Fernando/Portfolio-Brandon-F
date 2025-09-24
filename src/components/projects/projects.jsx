import { useState, useEffect } from 'react';
import './projects.css';

const PROJECTS = [
  {title: 'AI Flashcards', 
		url: "https://github.com/Brandon-Fernando/Flashcard-SaaS",
		description: "A smart study tool that uses AI to transform text or uploaded documents into personalized flashcards, helping learners review efficiently and remember core concepts."},
  {title: '15 or Less Game', 
		url: "https://github.com/Jaehoonoo/guess-game",
		description: "A daily challenge where players must guess 8 words using just 15 clues."},
  {title: 'AI Customer Support', 
		url: "https://github.com/Brandon-Fernando/chatsupport",
		description: "A customer service chatbot that answers user questions using information from Gainful’s website, a company specializing in personalized nutrition products."},
  {title: 'Inventory Tracker', 
		url: "https://github.com/Brandon-Fernando/Inventory-Tracker",
		description: "An inventory tracker built with React, Next.js, and Firebase, featuring real-time management, secure authentication, and a responsive UI with Material UI components."}
];

export default function Projects(){
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = (index, url) => {
    if (isMobile) {
      if (expandedIndex === index) {
        // second tap → go to site
        window.open(url, "_blank");
      } else {
        // first tap → expand
        setExpandedIndex(index);
      }
    } else {
      // desktop → always go directly
      window.open(url, "_blank");
    }
  };

  return (
    <div className='project-content'>
      <div className='p-container'>
        {PROJECTS.map((project, index) => (
          <div
            className={`content`}
            key={index}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div
              className={`card glass ${expandedIndex === index ? "expanded" : ""}`}
              onClick={() => handleCardClick(index, project.url)}
            >
              <div className='name-container'>
                <h2 className='project-name'>{project.title}</h2>
              </div>
							<div className='project-description'>
								<span>{project.description}</span>
							</div>
              <div className='arrow-container glass'>
                <span className='arrow'><i className="fas fa-arrow-down"></i></span>
                <span className="see-code">See Code</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
