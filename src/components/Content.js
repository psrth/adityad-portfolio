import React from "react";
import styled from "styled-components";
import Emoji from "react-emoji-render";

import { Section, SectionHeader, Link } from "./Helpers";
import ThemeToggle from "./ThemeToggle";

const Content = styled.div`
  padding: 50px 30px;
  font-size: 1.3rem;
  line-height: 2rem;
`;

const BodyP = styled.p`
  margin: 15px 0;
`;

const About = () => (
  <Section id="about">
    <SectionHeader className="section-header">About</SectionHeader>
    <BodyP>
      <Emoji text=":wave:" />
      Hi! I'm Aditya Dhillon, an <strong>agile</strong> and multi-faceted <strong>customer-centric professional.</strong> I've handled large volume flagship portfolios across industries in <strong>India and abroad,</strong> leading teams of over <strong>2500 people</strong> and budgets of over <strong>$50million.</strong>
    </BodyP>
  </Section>
);

const SchoolName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const SchoolDesc = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Education = () => (
  <Section id="experience">
    <SectionHeader className="section-header">Experience</SectionHeader>
    <div>
      <SchoolName className="schoolname">
        Chief Operating Officer
      </SchoolName>
      <SchoolDesc className="schooldesc">SARVA — Yoga, Mindfulness, & Beyond</SchoolDesc>
      <BodyP>
        I was the Chief Operating Officer at{" "}
        <Link href="https://www.sarva.com/">
          Sarva
        </Link>{" "}
        where I did cool COO work. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </BodyP>
    </div>
    <div>
      <SchoolName className="schoolname">
        Delhi Public School, R.K. Puram
      </SchoolName>
      <SchoolDesc className="schooldesc">Class of '22</SchoolDesc>
      <BodyP>
        I am a high school junior at Delhi Public School, R.K. Puram studying Physics, Economics, Maths and Computer Science. I am an
        active member of my school's computer club,{" "}
        <Link href="https://exunclan.com">
          Exun Clan
        </Link>{" "}
        where I build tools for internal use as well as applications which aid
        the logistics and administration of our annual tech symposium.
      </BodyP>
      <BodyP>
        I've won 30+ high-school and college technology quizzes, design
        competitions and hackathons.
      </BodyP>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills">
    <SectionHeader className="section-header">Skills</SectionHeader>
    <BodyP>
      I'm proficient in <strong>Node.js</strong>, <strong>Express.js</strong>,{" "}
      <strong>React.js</strong>, and <strong>PHP</strong>. I can also use
      vanilla JavaScript to create highly interactive user interfaces and
      memorable experiences.
    </BodyP>

    <BodyP>
      Along with Node and React, I have also used <strong>Ruby on Rails</strong>
      , <strong>Golang</strong>, and <strong>Angular</strong> in previous
      projects.
    </BodyP>

    <BodyP>
      I like writing small <strong>Python</strong> or{" "}
      <strong>shell scripts</strong> which automate tasks like splitting PDFs,
      checking websites for updates and compiling stylesheets.
    </BodyP>
  </Section>
);

const Contact = () => (
  <Section id="contact">
    <SectionHeader className="section-header">Contact</SectionHeader>
    <BodyP>
      Feel free to email me at <Link href="mailto:mail@angad.dev">mail[at]angad[dot]dev</Link>.
      You could also{" "}
      <Link href="https://twitter.com/dotangad">
        tweet
      </Link>{" "}
      to me or <Link href="https://t.me/dotangad">text me on Telegram</Link>.
    </BodyP>
  </Section>
);

const Footer = () => (
  <Section
    className="footer"
    style={{
      textAlign: "center",
      fontSize: "1rem",
      lineHeight: "1.3rem",
      marginBottom: "30px"
    }}
  >
    <ThemeToggle />
    <div>&copy; Angad Singh 2018</div>
    <div>
      Source available{" "}
      <Link
        style={{ borderWidth: "2px", paddingBottom: "0" }}
        target="_blank"
        href="https://github.com/dotangad/angad.dev"
      >
        here
      </Link>
      .
    </div>
  </Section>
);

export default () => (
  <Content className="content">
    <About />
    <Education />
    <Skills />
    <Contact />
    <Footer />
  </Content>
);
