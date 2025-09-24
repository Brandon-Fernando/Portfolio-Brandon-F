import './hero.css'

export default function Hero(){
	return(
		<div className='hero-content'>
			<div className='name'>
				<h1 className='first-name'>BRANDON</h1>
				<h1 className='last-name'>FERNANDO</h1>
			</div>
			<div className='glassbox'></div>
			<div className='circle-container'>
				<svg viewBox='0 0 100 100' width="150" height="150">
					<defs>
						<path id='circle' d='
							M 50, 50
							m -30, 0
							a 30,30 0 1,1 60,0
							a 30,30 0 1,1 -60,0'
						/>
					</defs>
					<text fontSize="10" fill="black" textLength="283" lengthAdjust="spacing">
						<textPath href="#circle">
							•PORTFOLIO•PORTFOLIO•PORTFOLIO 
						</textPath>
					</text>
				</svg>
			</div>
		</div>
	)
}