import React from 'react'
import I4G from '../assets/I4G.png'
import github from '../assets/github-icon.png'
import slack from '../assets/slack.png'

const Homepage = () => {
  return (
		<div>
			<header className="profile-section">
				<div>
					<div>
                      {/* <img src={ } alt='Profile avatar'/> */}
					</div>
					<h1>Chibuike Chijioke</h1>
				</div>
			</header>
			<section className="link-section">
				<div></div>
				<div>
					<div>
						<img src={ slack } alt='slack icon'/>
					</div>
					<div>
						<img src={ github } alt='github icon'/>
					</div>
				</div>
			</section>
			<footer className="footer-section">
				<hr />
				<div>
					<div></div>
					<div>
						<p>HNG Internship 9 Frontend Task</p>
					</div>
					<div>
						<img src={ I4G } alt='I4G logo'/>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Homepage
