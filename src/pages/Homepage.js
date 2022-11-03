import React from 'react'
import I4G from '../assets/I4G.png'
import github from '../assets/github-icon.png'
import slack from '../assets/slack.png'
import myavatar from '../assets/myzuriavatar.jpg' 
import zuriInternship from '../assets/Zuri.Internship_Logo.png'
import shareButton_desk from '../assets/avatar-share-button.png'
import shareButton_mobile from '../assets/mobile-avatar-share-button.png'

const Homepage = () => {
  return (
		<div>
			<main id="overall__container">
				<header id="profile-section">
					<div id="profile">
						<img
							src={shareButton_desk}
							alt="share button icon"
							id="shareButton__desk"
						/>
						<img
							src={shareButton_mobile}
							alt="share button icon"
							id="shareButton__mobile"
						/>
						<div id="img-container">
							<img src={myavatar} alt="Profile avatar" id="profile__img" />
						</div>
						<h1>Chibuike Chijioke</h1>
						{/* <h2 id="slack">ChibuikeChijioke</h2> */}
					</div>
				</header>
				<section id="link-section">
					<div id="links">
						<a
							href="https://twitter.com/Lifestyleafresh"
							target="_blank"
							rel="noopener noreferrer"
							id="twitter"
						>
							Twitter Link
						</a>
						<a
							href="https://training.zuri.team/"
							target="_blank"
							rel="noopener noreferrer"
							id="btn__zuri"
						>
							Zuri Team
						</a>
						<a
							href="http://books.zuri.team"
							target="_blank"
							rel="noopener noreferrer"
							id="books"
						>
							Zuri Books
						</a>
						<a
							href="https://books.zuri.team/python-for-beginners?ref_id=ChibuikeChijioke"
							target="_blank"
							rel="noopener noreferrer"
							id="book__python"
						>
							Python Books
						</a>
						<a
							href="https://background.zuri.team"
							target="_blank"
							rel="noopener noreferrer"
							id="pitch"
						>
							Background Check for Coders
						</a>
						<a
							href="https://books.zuri.team/design-rules"
							target="_blank"
							rel="noopener noreferrer"
							id="book__design"
						>
							Design Books
					  </a>
					  <a
							href="/contact"
							// target="_blank"
							// rel="noopener noreferrer"
							id="contact"
						>
							Contact Me
						</a>
					</div>
					<div id="socials">
						<a
							href="https://hng9.slack.com/messages/C041JU70S5U/team/U048Q5X0KHP"
							target="_blank"
							rel="noopener noreferrer"
							className="social__icons"
						>
							<img src={slack} alt="slack icon" />
						</a>
						<a
							href="https://github.com/Chisquare7"
							target="_blank"
							rel="noopener noreferrer"
							className="social__icons"
						>
							<img src={github} alt="github icon" />
						</a>
					</div>
				</section>
				<footer id="footer-section">
					<hr />
					<div id="footers">
						<img
							src={zuriInternship}
							alt="Zuri Internship logo"
							id="zuri__logo"
						/>
						<p id="footer__text">HNG Internship 9 Frontend Task</p>
						<img src={I4G} alt="I4G logo" id="I4G__logo" />
					</div>
				</footer>
			</main>
		</div>
	);
}

export default Homepage
