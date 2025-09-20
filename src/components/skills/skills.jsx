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

export default function Skills(){
	return(
		<div className="skills-content">
			<div className="languages">
				{LANG.map((language, index) => (
					<div key={index}>
						<p>{language.lang}</p>
					</div>
				))}
			</div>

			<div className="libframe">

			</div>
		</div>
	)
}