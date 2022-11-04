import React from 'react'
import I4G from "../assets/I4G.png";
import zuriInternship from "../assets/Zuri.Internship_Logo.png";

const Contactpage = () => {
  return (
		<div>
			<div id="contact__overall">
				<main id="contact__container">
					<div>
						<header className="contact__heading">
							<h1 className="head__title">Contact Me</h1>
							<p className="head__subtitle">
								Hi there, contact me to ask me about anything you have in mind.
							</p>
						</header>
						<form id="contact__form">
							<div className="formname__flex">
								<div className="input__name">
									<label htmlFor="first_name" className="input__labels">
										First name
									</label>
									<input
										type="text"
										id="first_name"
										placeholder="Enter your first name"
									/>
								</div>
								<div className="input__name">
									<label htmlFor="last_name" className="input__labels">
										Last name
									</label>
									<input
										type="text"
										id="last_name"
										placeholder="Enter your last name"
									/>
								</div>
							</div>
							<label htmlFor="email" className="input__labels">
								Email
							</label>
							<input type="email" id="email" placeholder="yourname@email.com" />
							<label htmlFor="message" className="input__labels">
								Message
							</label>
                          <textarea 
								id="message" cols="30" rows="10"
								placeholder="Send me a message and I'll reply you as soon as possible..."
							></textarea>
							<label htmlFor='check' className="input__tick">
								<input type="checkbox" id="tick__box" />
								<span className="tick__text">
									You agree to providing your data to HNG who may contact you.
								</span>
							</label>
							<input type="submit" id="btn__submit" value="Send message" />
						</form>
					</div>
					<footer>
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
				{/* <footer>
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
				</footer> */}
			</div>
		</div>
	);
}

export default Contactpage
