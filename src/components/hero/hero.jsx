import './hero.css'
import { useEffect } from 'react';

export default function Hero(){

	return(
		<div className='hero-content'>
			<div className='name'>
				<h1 className='first-name'>BRANDON</h1>
				<h1 className='last-name'>FERNANDO</h1>
			</div>
			<div className='glassbox'></div>
			<div className='circle-container'>
				<svg viewBox='0 0 100 100' width="11rem" height="11rem">
					<defs>
						<path id='circle' d='
							M 50, 50
							m -37, 0
							a 37,37 0 1,1 74,0
							a 37,37 0 1,1 -74,0'
						/>
					</defs>
					<text fontSize="10" fill="black" textLength="232" lengthAdjust="spacing">
						<textPath href="#circle" startOffset="0%">
						 •PORTFOLIO•PORTFOLIO•PORTFOLIO•PORTFOLIO•PORTFOLIO
						</textPath>
					</text>
				</svg>
			</div>
		</div>
	)
}