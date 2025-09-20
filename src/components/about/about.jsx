import './about.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About(){
	return(
  	<div className="about-content content">
			<div className="about-description glass content">
				<p>I’m Brandon, a recent Rutgers CS grad exploring the 
					worlds of web development and software engineering.</p>
			</div>
			<div className="about-contact glass content">
				<h4 className='contact-title'>
					<span>Contact</span>
				</h4>
				<div className="num-email">
					<i class="fa-solid fa-phone glass"></i>
					<p>908-283-0948</p>
					{/* ADD @ */}
					<i class="fa-solid fa-envelope glass"></i>
					<p>brandonjfernandoyahoo.com</p>
				</div>
				<div className="socials">
					<i class="fa-brands fa-linkedin-in glass"></i>
					<i class="fa-brands fa-github glass"></i>
				</div>
			</div>
    </div>
  )
}