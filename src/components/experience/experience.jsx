import "./experience.css"

const EXP = [
	{title: "Web Developer Intern", company: "Preloved Guru", year: "2025", 
		description: "Developed full-stack features using React, Tailwind CSS, Python, and Supabase to enhance user experience and optimize system performance."},
	{title: "Software Engineer Fellow", company: "Headstarter AI", year: "2024", 
		description: "Built AI-driven projects with React, Next.js, Firebase, and OpenAI while leading a team of 3 and gaining mentorship from industry experts in agile, CI/CD, and microservice architecture."},
	{title: "Customer Service", company: "Lowe's", year: "2023-2024", 
		description: "Delivered excellent customer support across in-person, phone, and online channels, earning Employee of the Month recognition for problem-solving and enhancing customer satisfaction."}
]

export default function Experience(){
	return(
		<div className="experience-content">
			{EXP.map((experience, index) => (
				<div key={index} className="card-container glass content"
				style={{ transitionDelay: `${index * 0.2}s` }}>
					<div className="titles">
						<div className="title-comp">
							<h2 className="exp-title glass">{experience.title}</h2>
							<h2 className="exp-comp">{experience.company}</h2>
						</div>
						<div>
							<h2 className="year">{experience.year}</h2>
						</div>
					</div>
					<p className="description">{experience.description}</p>
				</div>
			))}
		</div>
	)
}