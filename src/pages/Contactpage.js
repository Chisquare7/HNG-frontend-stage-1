import React from 'react'
import I4G from "../assets/I4G.png";
import zuriInternship from "../assets/Zuri.Internship_Logo.png";

const Contactpage = () => {
  return (
    <div>
        <div id='contact__overall'>
            <main id='contact__container'>
                <header>
                    <h1>Contact Me</h1>
                    <p></p>
                </header>
                <form>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <label>Email</label>
                    <input type="email" id='' />
                    <label>Message</label>
                    <textarea />
                    <div>
                        <input type="checkbox" id='' />
                        <span></span>
                    </div>
                    <input type="submit" id='' />
                </form>
            </main>
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
        </div>
      
    </div>
  )
}

export default Contactpage
