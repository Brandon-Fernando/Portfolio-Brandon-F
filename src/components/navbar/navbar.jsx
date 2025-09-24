import { useState, useEffect, useRef } from "react";
import "./navbar.css";

const Navbar = ({ onNavClick }) => { 
	const [activeIndex, setActiveIndex] = useState(0);
	const [bubbleStyle, setBubbleStyle] = useState({});
	const navRefs = useRef([]);

	const navItems = ["Home", "About", "Projects", "Experience", "Skills"];

	useEffect(() => {
		const handleSectionChange = (e) => setActiveIndex(e.detail)
		window.addEventListener('sectionChange', handleSectionChange)
		return () => window.removeEventListener('sectionChange', handleSectionChange)
	  }, [])

	useEffect(() => {
		const currentItem = navRefs.current[activeIndex];
		if(currentItem){
			setBubbleStyle({
				left: currentItem.offsetLeft + "px",
				width: currentItem.offsetWidth + "px",
			});
		}
	}, [activeIndex]);

	const isHero = activeIndex === 0;

	return(
		<nav className={`navbar ${isHero ? "light-text" : "dark-text"}`}>
			<div className="nav-items glass">
				{navItems.map((item, index) => (
					<div 
						key={index}
						ref={(el) => (navRefs.current[index] = el)}
						className={`nav-item ${activeIndex === index ? "active" : ""}`}
						onClick={() => {
							setActiveIndex(index);
							onNavClick(index); 
						  }}
						>
							{item}
					</div>
				))}
				<div className="nav-bubble glass" style={bubbleStyle}></div>
			</div>
		</nav>
	)
}

export default Navbar;
