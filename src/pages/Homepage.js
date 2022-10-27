import React from 'react'
import I4G from '../assets/I4G.png'
import github from '../assets/github-icon.png'
import slack from '../assets/slack.png'
import myavatar from '../assets/myavatar.jpg' 
import zuriInternship from '../assets/Zuri.Internship_Logo.png'
import shareButton_desk from '../assets/avatar-share-button.png'
import shareButton_mobile from '../assets/mobile-avatar-share-button.png'

const Homepage = () => {
  return (
		<div>
			<main id='overall__container'>
				<header id="profile-section">
					<div>
						<div id="img-container">
							<img src={myavatar} alt="Profile avatar" id="profile__img" />
						</div>
						<h1 id="twitter">Chibuike Chijioke</h1>
						<h2 id="slack">chibuike chijioke</h2>
						<img src={shareButton_desk} alt="github icon" />
						<img src={shareButton_mobile} alt="github icon" />
					</div>
				</header>
				<section id="link-section">
					<div>
						<a
							href="https://twitter.com/Lifestyleafresh"
							target=""
							rel=""
							id="twitter__link"
						>
							Twitter Link
						</a>
						<a
							href="https://training.zuri.team/"
							target=""
							rel=""
							id="btn__zuri"
						>
							Zuri Team
						</a>
						<a href="http://books.zuri.team" target="" rel="" id="books">
							Zuri Books
						</a>
						<a
							href="https://books.zuri.team/python-for-beginners?ref_id=ChibuikeChijioke"
							target=""
							rel=""
							id="book__python"
						>
							Python Books
						</a>
						<a href="https://background.zuri.team" target="" rel="" id="pitch">
							Background Check for Coders
						</a>
						<a
							href="https://books.zuri.team/design-rules"
							target=""
							rel=""
							id="book__design"
						>
							Design Books
						</a>
					</div>
					<div>
						<div id="img-container">
							<img src={slack} alt="slack icon" />
						</div>
						<div id="img-container">
							<img src={github} alt="github icon" />
						</div>
					</div>
				</section>
				<footer id="footer-section">
					<hr />
					<div>
						<div id="img-container">
							<img src={zuriInternship} alt="Zuri Internship logo" />
						</div>
						<div>
							<p>HNG Internship 9 Frontend Task</p>
						</div>
						<div id="img-container">
							<img src={I4G} alt="I4G logo" />
						</div>
					</div>
				</footer>
			</main>
		</div>
	);
}

export default Homepage
