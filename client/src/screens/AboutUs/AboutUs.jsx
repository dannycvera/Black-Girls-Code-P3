import React from "react";
import "./AboutUs.css";
import Layout from "../../components/shared/Layout/Layout";
import Footer from "../../components/shared/Footer/Footer";
import Nav from "../../components/shared/Nav/Nav";

function AboutUs() {
  return (
    <Layout>
      <div>
        <h1> What We Do </h1>
        <div className="whatwedo-container">
          <ul>
            <li>
              We are devoted to showing the world that girls know how to code
            </li>
            <li>
              We create community outreach programs and after-school programs
            </li>
            <li>We bring technology and entertainment to girls of color </li>
            <li>
              We imbue young girls with the confidence to navigate the 21st
              century
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h1> Our Goal </h1>
        <div className="ourgoal-container">
          <h3>
            Our ultimate goal is to provide African-American youth with the
            skills to occupy some of the 1.4 million computing job openings
            expected to be available in the U.S. by 2020, and to train 1 million
            girls by 2040.
          </h3>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
