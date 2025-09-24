import { useState, useEffect, useRef } from 'react'
import './App.css'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Experience from './components/experience/experience'
import Skills from './components/skills/skills'

function App() {
  const sectionsRef = useRef([]);
  const isScrollingRef = useRef(false);

  // Scroll to section when navbar item clicked
  const handleNavClick = (index) => {
    isScrollingRef.current = true;

    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });

    // Re-enable observer after scroll finishes (adjust 700ms if needed)
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 700);
  };

  useEffect(() => {
    const container = document.querySelector('.container'); // scrollable root
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Always toggle content visibility
          entry.target.querySelectorAll('.content').forEach((el) => {
            if (entry.isIntersecting) {
              el.classList.add('show');
            } else {
              el.classList.remove('show');
            }
          });

          // Only update navbar bubble if not scrolling manually
          if (!isScrollingRef.current && entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            if (index !== -1) {
              window.dispatchEvent(
                new CustomEvent('sectionChange', { detail: index })
              );
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5, // 50% of section visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const balls = document.querySelectorAll('.ball, .ball-2, .ball-3, .ball-4, .ball-5, .ball-6, .ball-7, .ball-8');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // scale up
        } else {
          entry.target.classList.remove('show'); // scale down when leaving viewport
        }
      });
    }, { threshold: 0.1 }); 
  
    balls.forEach(ball => observer.observe(ball));
  
    return () => observer.disconnect();
  }, []);
  


  return (
    <>
      <div className='container'>
        {/* Navbar */}
        <Navbar onNavClick={handleNavClick}/>

        {/* Hero */}
        <section ref={(el) => (sectionsRef.current[0] = el)} id='home'>
          <div className='hero-container'>
            <Hero/>
          </div>
        </section>

        {/* Background Gradient */}
        <img className="ball balls" src="/ball.png" alt="ball" />
        <img className="ball-2 balls" src="/ball.png" alt="ball" />
        <img className="ball-3 balls" src="/ball.png" alt="ball" />
        <img className="ball-4 balls" src="/ball.png" alt="ball" />
        <img className="ball-5 balls" src="/ball.png" alt="ball" />
        <img className="ball-6 balls" src="/ball.png" alt="ball" />
        <img className="ball-7 balls" src="/ball.png" alt="ball" />
        <img className="ball-8 balls" src="/ball.png" alt="ball" />

        {/* About */}
        <section ref={(el) => (sectionsRef.current[1] = el)} id='about'>
          <div className='about-container'>
            <h1 className='title content'>About</h1>
            <About/>
          </div>
        </section>

        

        {/* Projects */}
        <section ref={(el) => (sectionsRef.current[2] = el)} id='projects'>
          <div className='projects-container'>
            <h1 className='title'>Projects</h1>
            <Projects/>
          </div>
        </section>

        {/* Experience */}
        <section ref={(el) => (sectionsRef.current[3] = el)} id='experience'>
          <div className='experience-container'>
            <h1 className='title'>Experience</h1>
            <Experience/>
          </div>
        </section>

        {/* Skills */}
        <section ref={(el) => (sectionsRef.current[4] = el)} id='skills'>
          <div className='skills-container'>
            <h1 className='title'>Skills</h1>
            <Skills/>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
