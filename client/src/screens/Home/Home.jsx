import React from "react";
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout";
import Carousel from "../../components/shared/Carousel/Carousel";
import "./HomeMedia.css";

function Home() {
	return (
		<Layout>
			<div className="home">
				<Carousel />
				<h1 className="home-title">Welcome to Black Girls Code!</h1>
				<h2 className="home-subtitle">Inspiring young girls of color</h2>
				<img
					src={require(`../../img/break-the-cycle-home.png`)}
					className="break-the-cycle"
					alt="break-the-cycle"
				/>
				<p className="vision">
					<span>Our Vision:</span> To increase the number of women of color in
					the digital space by empowering girls of color ages 7 to 17 to become
					innovators in STEM fields, leaders in their communities, and builders
					of their own futures through exposure to computer science and
					technology. To provide African-American youth with the skills to
					occupy some of the 1.4 million computing job openings expected to be
					available in the U.S. by 2020, and to train 1 million girls by 2040.
				</p>
				<div className="students-div">
					<img
						src={require(`../../img/bgc_home_students.jpg`)}
						className="students"
						alt="students"
					/>
					<p className="student-text">
						School is out, but for our #futuretechbosses, the fun and learning
						is just beginning! STEM from home with Black Girls CODE this summer.
						Our #CodeTheSummer virtual camps are here to give your tech geniuses
						the opportunity to learn all about video game design, iOS app
						development, and robotics. Camp officially begins on July 6 with a
						session for boys AND girls ages 7-9. Sessions for older students to
						be announced soon.{" "}
					</p>
					<a
						href={"https://www.blackgirlscode.com/programsevents.html"}
						target="_blank"
					>
						<button className="sign-up-button" target="_blank">
							Sign Up
						</button>
					</a>
				</div>
				<h1 className="float-title">Join Our Team!</h1>
				<div className="floating-div">
					<div className="left-content">
						<img
							src={require(`../../img/bgc_home_img.jpg`)}
							className="blackboard-img"
							alt="blackboard-img"
						/>
						<p className="office-text">
							We're growing again in both our New York and Oakland offices. If
							you're a kind and friendly human being looking to join a fun and
							mission-aligned team of folks striving to change the world take a
							look at our careers page. <br />
							Come join the BGC family! <br></br>Learn more{" "}
							<a
								href="https://www.blackgirlscode.com/career-openings.html"
								target="_blank"
							>
								<span className="pink-text">here.</span>
							</a>{" "}
						</p>
					</div>
					<div className="right-text">
						<p className="title">Round Up Donate</p>
						<p className="description">
							We're still rounding up and donating our fare with #TeamLyft.{" "}
							<br /> Find out how you can help us build the future by rounding
							up your Lyft fares.{" "}
							<a href="http://bit.ly/LyftBGC" target="_blank">
								<span className="pink-text">http://bit.ly/LyftBGC</span>
							</a>{" "}
							#RoundUpDonate #FutureForward
						</p>
						<p className="title">Imagine The Impact</p>
						<p className="description">
							When we give girls of color the tools to develop their own future,
							great things are bound to happen. BGC founder Kimberly Bryant can
							definitely relate.{" "}
							<a
								href="https://www.blackgirlscode.com/about-bgc.html"
								target="_blank"
							>
								<span className="pink-text">Read</span>
							</a>{" "}
							what she has to say about girls in STEM fields.
						</p>
						<p className="title">BGC Girls on the Go</p>
						<p className="description">
							Since BGC's launch in 2011, the girls of BlackGirlsCode have
							eagerly jumped into programming. Have a look at what we've done to
							support girls in STEM and{" "}
							<a
								href="https://www.blackgirlscode.com/programsevents.html"
								target="_blank"
							>
								<span className="pink-text">register</span>
							</a>{" "}
							for upcoming classes!{" "}
						</p>
						<p className="title">Help Us Grow</p>
						<p className="description">
							Together, we can change the face of technology to create
							opportunities for all. Donate your time and expertise, or make a
							contribution, or both!
						</p>
						<p className="title">Keep In Touch</p>
						<p className="description">
							We're on the move, but it's easy to keep in touch with BGC via{" "}
							<a href="https://twitter.com/blackgirlscode">
								<span className="pink-text">Twitter</span>
							</a>
							,{" "}
							<a href="https://www.facebook.com/BlackGirlsCodeOrg">
								{" "}
								<span className="pink-text"> Facebook</span>
							</a>
							, and the{" "}
							<a href="https://www.blackgirlscode.com/blog" target="_blank">
								<span className="pink-text">BGC blog</span>
							</a>
							.
						</p>
						<p className="description">
							Are you a girl who codes? Or know one? Shop the{" "}
							<a href="https://blackgirlscode.bigcartel.com/" target="_blank">
								<span className="pink-text">BGC Store</span>
							</a>
							.
						</p>
						<p className="description">
							+ MEDIA: Find press releases, images, and{" "}
							<a
								href="https://www.blackgirlscode.com/press.html"
								target="_blank"
							>
								<span className="pink-text">media</span>{" "}
							</a>
							tools.{" "}
						</p>
						<p className="title">Get Involved</p>
						<p className="description">
							Do you code? Are you an organizer? Photographer? Just want to help
							out as we grow and expand to new cities? Sign up to volunteer{" "}
							<a
								href="https://www.blackgirlscode.com/volunteer-signup.html"
								target="_blank"
							>
								<span className="pink-text">here</span>
							</a>
							.
						</p>
						<p className="description">
							Want to help us change the world? Join a local core team! See the
							core team roles,descriptions, and application{" "}
							<a
								href="https://docs.google.com/document/d/1fZI7wufw_Fc1G82Dh2vrCRw0TIeVO2RGTgB4vQqKCz0/edit?pli=1"
								target="_blank"
							>
								<span className="pink-text">here</span>
							</a>
							.
						</p>
						<p className="description">
							Join our staff! Apply for job openings{" "}
							<a
								href="https://www.blackgirlscode.com/career-openings.html"
								target="_blank"
							>
								<span className="pink-text">here</span>
							</a>
							.
						</p>
						<p className="description">
							<a
								href="https://www.blackgirlscode.com/programsevents.html"
								target="_blank"
							>
								<span className="pink-text"> Sign up</span>
							</a>{" "}
							your budding coders below for our next class!{" "}
						</p>
					</div>
				</div>
				<div className="border-div"></div>
				<div className="bottom-div">
					<div className="bottom-left">
						<img
							src={require(`../../img/bgc_home_boys.jpg`)}
							className="boys"
							alt="boys"
						/>
						<p className="bottom-left-text">
							#CodeTheSummer with BGC virtual camps. <br></br>Learn more{" "}
							<a
								href="https://www.blackgirlscode.com/programsevents.html"
								target="_blank"
							>
								<span className="pink-text">HERE</span>
							</a>
							!
						</p>
					</div>
					<div className="bottom-right">
						<div className="mailing-list-container">
							<h2 className="mailing-list-text">Join our mailing list!</h2>
							<input
								type="text"
								className="email"
								placeholder="email address"
							></input>
							<button className="subscribe-button">SUBSCRIBE</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)

}

export default Home;
