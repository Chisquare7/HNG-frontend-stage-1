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
						<h1 id="twitter">Chibuike Chijioke</h1>
						<h2 id="slack">ChibuikeChijioke</h2>
					</div>
				</header>
				<section id="link-section">
					<div id="links">
						<a
							href="https://twitter.com/Lifestyleafresh"
							target="_blank"
							rel="noopener noreferrer"
							id="twitter__link"
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
						<div id="zuri__logo">
							<img
								src={zuriInternship}
								alt="Zuri Internship logo"
								className="footer__logo"
							/>
						</div>
						<div id="foot__middle">
							<p id="footer__text">HNG Internship 9 Frontend Task</p>
						</div>
						<div id="I4G__logo">
							<img src={I4G} alt="I4G logo" className="footer__logo" />
						</div>
					</div>
				</footer>
			</main>
		</div>
	);
}

export default Homepage
