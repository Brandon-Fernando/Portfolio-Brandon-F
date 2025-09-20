import './projects.css'

const PROJECTS = [
	{title: 'AI Flashcards'},
  {title: '15 or Less Game'},
  {title: 'AI Customer Support'},
  {title: 'Inventory Tracker'}
]

export default function Projects(){
	return(
		<div className='project-content'>
			<div className='p-container'>
				{PROJECTS.map((project, index) => (
					<div className='content'
					key={index}
					style={{ transitionDelay: `${index * 0.2}s` }}>
						<div className='card glass'>
							<div className='name-container'>
								<h2 className='name'>{project.title}</h2>
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
	)
}