import "./skills.css"

const LANG = [
	{lang: "Java", icon: "/java.svg"}, 
	{lang: "Python", icon: "/python.svg"},
	{lang: "SQL", icon: "/sql.svg"}, 
	{lang: "JavaScript", icon: "/js.svg"},
	{lang: "HTML", icon: "/html.svg"},
	{lang: "CSS", icon: "/css.svg"}, 
	{lang: "Tailwind CSS", icon: "/tailwind.svg"}
]

const LIBFRAME = ["React", "Node.js", "Material-UI", "JavaFX", "pandas", "NumPy", "Matplotlib"]


export default function Skills(){
	return(
		<div className="skills-content">
			<div className="skills-card glass">
				<div className="languages-container">
					<h4 className='langlib-title'>
						<span>Languages</span>
					</h4>
					<div className="icon-lang-container">
						{LANG.map((language, index) => (
							<div className="icon-lang glass content" key={index}>
								<img className="image" src={language.icon} alt={language.lang} />
								<p className="language">{language.lang}</p>
							</div>
						))}
					</div>
				</div>

				<div className="libframe-container">
					<h4 className='langlib-title'>
						<span>Libraries &amp; Frameworks</span>
					</h4>
					<div className="libitem-container">
						{LIBFRAME.map((libframe, index) => (
							<div className="libframe glass content" key={index}>
								<p>{libframe}</p>
							</div>
						))}
					</div>
					
				</div>
			</div>
			
		</div>
	)
}