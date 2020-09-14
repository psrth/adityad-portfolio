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
    <BodyP>
      When I'm not <strong>working out</strong> to electronic music, you can find me going on <strong>adventures with my son,</strong> or in the sun, reading a book. 
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
        where I did cool COO work. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br><br></br>
      </BodyP>
    </div>
    <div>
      <SchoolName className="schoolname">
        Head of Business Operations
      </SchoolName>
      <SchoolDesc className="schooldesc">Talwalkars better value fitness ltd.</SchoolDesc>
      <BodyP>
        I was the Head of Business Operations at{" "}
        <Link href="http://www.talwalkars.net/">
          Talwalkars
        </Link>{" "}
        where I did cool COO work. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br><br></br>
      </BodyP>
    </div>
    <div>
      <SchoolName className="schoolname">
        Director of Operations
      </SchoolName>
      <SchoolDesc className="schooldesc">fitness first india ltd.</SchoolDesc>
      <BodyP>
        I was the Director of Operations at{" "}
        <Link href="http://www.talwalkars.net/">
          Fitness First
        </Link>{" "}
        where I did cool COO work. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br><br></br>
      </BodyP>
    </div>
    <div>
      <SchoolName className="schoolname">
        Director of Operations
      </SchoolName>
      <SchoolDesc className="schooldesc">Equinox Fitness</SchoolDesc>
      <BodyP>
        I was the Director of Operations at{" "}
        <Link href="http://www.talwalkars.net/">
          Equinox Fitness
        </Link>{" "}
        where I did cool COO work. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br><br></br>
      </BodyP>
    </div>
    <div>
      <SchoolName className="schoolname">
        Owner
      </SchoolName>
      <SchoolDesc className="schooldesc">Midnight Cravings Beyond control</SchoolDesc>
      <BodyP>
        I was the Owner of{" "}
        <Link href="http://www.talwalkars.net/">
        Midnight Cravings Beyond control
        </Link>{" "}
        where I did cool COO work. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br><br></br>
      </BodyP>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills">
    <SectionHeader className="section-header">Skills</SectionHeader>
    <BodyP>
      I have a strong industry knowledge of <strong>Fitness, Gyms and Wellbeing</strong>, as well as several years of experience in the <strong>Hospitality Industry.</strong> I consider project management, operations management, and strategic planning as some of my strongest skills.
    </BodyP>

    <BodyP>
      I have effective <strong>interpersonal skills</strong> as well — from team building and customer service to public speaking and training/coaching.
    </BodyP>
  </Section>
);

const Contact = () => (
  <Section id="contact">
    <SectionHeader className="section-header">Contact</SectionHeader>
    <BodyP>
      Feel free to <Link href="mailto:aditya.dhillon13@gmail.com">email me</Link>.
      You could also{" "}
      <Link href="https://twitter.com/dotangad">
        DM me on Instagram
      </Link>{" "}
      or get in touch on<Link href="https://t.me/dotangad"> LinkedIn!</Link>.
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
    <div>&copy; Aditya Dhillon, 2020</div>
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
