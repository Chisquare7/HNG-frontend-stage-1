import React from 'react'
import I4G from '../assets/I4G.png'
import github from '../assets/github-icon.png'
import slack from '../assets/slack.png'
import myavatar from '../assets/myavatar.jpg' 

const Homepage = () => {
  return (
		<div>
			<main>
				<header className="profile-section">
					<div>
						<div className="img-container">
							<img src={myavatar} alt="Profile avatar" id="profile_img" />
						</div>
						<h1 id="twitter">Chibuike Chijioke</h1>
						<h2 id="slack">chibuike chijioke</h2>
					</div>
				</header>
				<section className="link-section">
					<div></div>
					<div>
						<div className="img-container">
							<img src={slack} alt="slack icon" />
						</div>
						<div className="img-container">
							<img src={github} alt="github icon" />
						</div>
					</div>
				</section>
				<footer className="footer-section">
					<hr />
					<div>
						<div className="img-container"></div>
						<div>
							<p>HNG Internship 9 Frontend Task</p>
						</div>
						<div className="img-container">
							<img src={I4G} alt="I4G logo" />
						</div>
					</div>
				</footer>
			</main>
		</div>
	);
}

export default Homepage
