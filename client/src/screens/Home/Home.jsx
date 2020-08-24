import React from "react"
import "./Home.css"
import Layout from "../../components/shared/Layout/Layout"

function Home() {
	return (
		<Layout>
			<div className="home">
				<h1>Welcome to Black Girls Code!</h1>
				<h2>Inspiring young girls of color</h2>
				<img
					src={require(`../../img/break-the-cycle.jpg`)}
					className="break_the_cycle"
					alt="break_the_cycle"
				/>
				<p>
					<span>Our Vision:</span> To increase the number of women of color in
					the digital space by empowering girls of color ages 7 to 17 to become
					innovators in STEM fields, leaders in their communities, and builders
					of their own futures through exposure to computer science and
					technology. To provide African-American youth with the skills to
					occupy some of the 1.4 million computing job openings expected to be
					available in the U.S. by 2020, and to train 1 million girls by 2040.
				</p>
				<img
					src={require(`../../img/bgc_home_students.jpg`)}
					className="students"
					alt="students"
				/>
				<p>
					School is out, but for our #futuretechbosses, the fun and learning is
					just beginning! STEM from home with Black Girls CODE this summer. Our
					#CodeTheSummer virtual camps are here to give your tech geniuses the
					opportunity to learn all about video game design, iOS app development,
					and robotics. Camp officially begins on July 6 with a session for boys
					AND girls ages 7-9. Sessions for older students to be announced soon.{" "}
				</p>
				<button>Sign Up</button>
				<h1>Join Our Team!</h1>
				<img
					src={require(`../../img/bgc_home_img.jpg`)}
					className="blackboard_img"
					alt="blackboard_img"
				/>
				<p className="office_text">
					We're growing again in both our New York and Oakland offices. If
					you're a kind and friendly human being looking to join a fun and
					mission-aligned team of folks striving to change the world take a look
					at our careers page. Come join the BGC family! Learn more here.{" "}
				</p>
				<div className="right_text">
					<p className="title">Round Up Donate</p>
					<p>
						We're still rounding up and donating our fare with #TeamLyft. Find
						out how you can help us build the future by rounding up your Lyft
						fares. http://bit.ly/LyftBGC #RoundUpDonate #FutureForward
					</p>
					<p className="title">Imagine The Impact</p>
					<p>
						When we give girls of color the tools to develop their own future,
						great things are bound to happen. BGC founder Kimberly Bryant can
						definitely relate. Read what she has to say about girls in STEM
						fields.
					</p>
					<p className="title">BGC Girls on the Go</p>
					<p>
						Since BGC's launch in 2011, the girls of BlackGirlsCode have eagerly
						jumped into programming. Have a look at what we've done to support
						girls in STEM and register for upcoming classes!{" "}
					</p>
					<p className="title">Help Us Grow</p>
					<p>
						Together, we can change the face of technology to create
						opportunities for all. Donate your time and expertise, or make a
						contribution, or both!
					</p>
					<p className="title">Keep In Touch</p>
					<p>
						We're on the move, but it's easy to keep in touch with BGC via
						Twitter, Facebook, and the BGC blog.
					</p>
					<p>Are you a girl who codes? Or know one? Shop the BGC Store. . .</p>
					<p>+ MEDIA: Find press releases, images, and media tools. </p>
					<p className="title">Get Involved</p>
					<p>
						Do you code? Are you an organizer? Photographer? Just want to help
						out as we grow and expand to new cities? Sign up to volunteer here.
					</p>
					<p>
						Want to help us change the world? Join a local core team! See the
						core team roles,descriptions, and application here.
					</p>
					<p>Join our staff! Apply for job openings here.</p>
					<p>Sign up your budding coders below for our next class! </p>
				</div>
				<img
					src={require(`../../img/bgc_home_boys.jpg`)}
					className="boys"
					alt="boys"
				/>
				<p className="office_text">
					#CodeTheSummer with BGC virtual camps learn more HERE
				</p>

				{/* mailing list  */}
				{/* social icons */}
			</div>
		</Layout>
	)
}

export default Home
