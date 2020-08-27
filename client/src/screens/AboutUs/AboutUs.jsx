import React from "react";
import "./AboutUs.css";
import Layout from "../../components/shared/Layout/Layout";
import whatwedogroup from "../../img/whatwedogroup.png";
import smilingredgirl from "../../img/smilingredgirl.png";
import laptopgirl from "../../img/laptopgirl.png";
import smilinghijab from "../../img/smilinghijab.png";
import complab from "../../img/complab.png";


function AboutUs() {
  return (
    <Layout>
      <div className="aboutus-container">
        <div>
          <h2 className="pinkify1"> What We Do </h2>
          <div className="whatwedo-container">
            <img className="whatwedo-img" src={whatwedogroup} alt="black girls code group" />
            <ul className="whatwedo-text">
              <li>We are devoted to showing the world that girls know how to code</li>
              <li>We create community outreach programs and after-school programs</li>
              <li>We bring technology and entertainment to girls of color </li>
              <li>We imbue young girls with the confidence to navigate the 21st century</li>
              <li>"Imagine.Build.Create" is our motto.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="pinkify2"> Our Goal </h2>
          <div className="ourgoal-container">
            <h3 className="ourgoal-text"> 
              Our ultimate goal is to provide African-American youth
              with the skills to occupy some of the 1.4 million computing job
              openings expected to be available in the U.S. by 2020, and to
          train 1 million girls by 2040.</h3>
          </div>
        </div>
        <h2 className="impactrose"> Measuring Our Impact </h2>
        <div className="body-text">
          <div className="measure-container">
            <img className='auimage' src={smilingredgirl} alt="smiling girl in red" />
            <p>Black Girls CODE is devoted to showing
            the world that black girls can code, and do so much more.
            By reaching out to the community through workshops and
            after school programs, Black Girls CODE introduces computer
            coding lessons to young girls from underrepresented communities
            in programming languages such as Scratch or Ruby on Rails.
            Black Girls CODE has set out to prove to the world that girls
            of every color have the skills to become the programmers of tomorrow.
            By promoting classes and programs we hope to grow the number of women of color
            working in technology and give underprivileged girls a chance to become the masters
          of their technological worlds. Black Girls CODE's ultimate goal is to <span>provide African-American
          youth with the skills to occupy some of the 1.4 million computing job openings</span> expected to be
          available in the U.S. by 2020, and <span>to train 1 million girls by 2040.</span></p>
          </div>



          <div className="laptop-container">
              <img className='auimage' src={laptopgirl} alt="girl with Apple laptop" />
              <div className='laptop-content'>
            <p>Since our launch in April 2011, Black Girls CODE has had the honor of
          <span> bringing technology and entertainment to many wonderful girls of color. </span>
          By teaching the girls programming and game design, we hope to have started
          the lifelong process of developing in them a true love for technology and the self-confidence that comes from understanding the greatest tools of the 21st century.</p>
           <br />
            <p>Though we at Black Girls CODE cannot overstate our happiness with the results of our classes, this is just the first step in seeking to bridge the digital divide. The digital divide, or the gap between those with regular, effective access to digital technology and those without, is becoming an increasingly critical problem in society. As more and more information becomes electronic, the inability to get online can leave entire communities at an extremely dangerous disadvantage.
        </p>
        </div>
          </div>

          <div className="hijab-container">
          <div className='hijab-content'>
          <p>Through community outreach programs such as workshops and after school programs, <span>we introduce underprivileged girls to basic programming skills</span> in languages like Scratch and Ruby on Rails. Introducing girls of color to these skills gives them an introduction to today’s computer technology, an essential tool for surviving in the 21st century. The skills they acquire through the programs give these young women a chance at well-paying professions with prestigious companies, as well as the ability to enter into the field as an entrepreneurs and leaders of technology.
          </p>
              <br />
              <p><span>“Imagine. Build. Create.” has always been our motto</span> at Black Girls CODE. The digital divide is steadily eroding, but if we want to create truly universal access to technology, San Francisco needs to come together as a community.</p>
              </div>
              <img className='auimage' src={smilinghijab} alt="Woman smiling in hijab" />
              
          </div>

          <div className="complab-container">
            <img className='auimage'src={complab} alt="Students in computer lab" />
           <div className='complab-content'>
            <p>Imagine a world where everyone is given the tools to succeed, and then help us build ways for everyone to access information and create a new age of women of color in technology.</p>
            <br />
              <p><span>As of 2013, Black Girls CODE has 7 established institutions</span>, and has operated in 7 states in the U.S. as well as Johannesburg, South Africa. <span>We've reached over 3,000 students, and we plan to expand to 8 more cities in the United States.</span></p>
              </div>
          </div>




        </div>
      </div>
    </Layout>
  );
}


export default AboutUs
