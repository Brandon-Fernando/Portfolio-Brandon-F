import './about.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About(){
	return(
  	<div className="about-content glass content">
			<div className="about-description content">
				<p>I’m Brandon, a recent Rutgers CS grad exploring the 
					worlds of web development and software engineering.</p>
			</div>

			<div className="about-contact content">
				<div className='num'>
					<div className='fa-container glass'>
						<i class="fa-solid fa-phone"></i>
					</div>
					<p>908-283-0948</p>
				</div>
					
				<div className='email'>
					<div className='fa-container glass'>
						<i class="fa-solid fa-envelope"></i>
					</div>
					<p>
						BRANDONJFERNANDO
						<span class="alt-font">@</span>
						YAHOO.COM
					</p>
				</div>
				
				<div className="socials">
					<a className='glass' href="https://www.linkedin.com/in/brandon-fernando-b5741229b/" target="_blank" rel="noopener noreferrer">
						<i class="fa-brands fa-linkedin-in"></i>
					</a>

					<a className='glass' href="https://github.com/Brandon-Fernando" target="_blank" rel="noopener noreferrer">
						<i class="fa-brands fa-github"></i>
					</a>
				</div>
			</div>
    </div>
  )
}