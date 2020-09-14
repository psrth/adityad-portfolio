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
       Hi! I'm Aditya Dhillon, an <strong>agile</strong> and <strong>multifaceted</strong> <strong>customer-centric professional.</strong> I've handled large volume flagship portfolios across industries in <strong>India and abroad,</strong> leading teams of over <strong>2500 people</strong> and budgets of over <strong>$50million.</strong>
    </BodyP>
    <BodyP>
      When I'm not <strong>working out</strong> to electronic music, you can find me going on <strong>adventures with my son,</strong> on a <strong>high altitude trek,</strong> playing <strong>golf,</strong> or in the sun, <strong>reading a book.</strong> 
    </BodyP>
    <BodyP>Click {" "}
        <strong><Link href="https://drive.google.com/file/d/1SDD7AziXC97XrpLmQkrBrKtN-XG4iL-5/view?usp=sharing">
          here
        </Link></strong>{" "}to get my resume.</BodyP> 
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
      <SchoolDesc className="schooldesc"><strong>SARVA — Yoga, Mindfulness, & Beyond</strong></SchoolDesc>
      <SchoolDesc className="schooldesc">October 2018 - July 2019</SchoolDesc>
      <BodyP>
        I was the COO at{" "}
        <Link href="https://www.sarva.com/">
          Sarva,
        </Link>{" "}
        Asia’s largest yoga chain, which started with 3 centres and grew to over 90 in the 3+ years I worked with them. My principal role was to evaluate, correct, strengthen and grow to help acquire Series A Funding for domestic and international expansion. I improved metrics for institutional funding round with Fireside Ventures, focused on clean up of business, dissolution of unviable asset classes and pivoting Sarva to align with future strategic vision - including a complete brand overhaul.<br></br><br></br>
      </BodyP>
      

    </div>
    <div>
      <SchoolName className="schoolname">
        Head of Business Operations
      </SchoolName>
      <SchoolDesc className="schooldesc"><strong>Talwalkars better value fitness ltd.</strong></SchoolDesc>
      <SchoolDesc className="schooldesc">April 2015 - October 2018</SchoolDesc>
      <BodyP>
        At{" "}
        <Link href="http://www.talwalkars.net/">
          Talwalkars,
        </Link>{" "}
        India’s largest, and only, publicly listed company with Operations in over 40 cities Pan India with a market valuation of over $150 Million — I provided long term strategy, brought diversity of offering and improved profitability in existing business vertical. Helped with the acquisition of Sarva Yoga, InShape Fitness, Power World Gyms and a minority stake in Growfitter. YOY Results increased Revenue 13%, Operating Profit 20%, PAT increased 19%, People costs dropped from 16.36% to 15.66%, receivables reduced from 49 days to 40 days, and liquidated 10-12 clubs in challenge markets - annual loss turned into a one time sale income.<br></br><br></br>
      </BodyP>
    </div>
    <div>
      <SchoolName className="schoolname">
        Owner
      </SchoolName>
      <SchoolDesc className="schooldesc"><strong>Midnight Cravings Beyond control</strong></SchoolDesc>
      <SchoolDesc className="schooldesc">Jan 2014 - July 2015</SchoolDesc>
      <BodyP>
        I was the Owner of{" "}
        <Link href="http://mcbcfoods.com/">
        Midnight Cravings Beyond Control,
        </Link>{" "}
        Gurgaon’s highest rated food delivery service catering to the large overnight working population due to the international nature of the city. A comprehensive offering of Indian, Chinese, Thai and Punjabi food catering to the North Indian Palette. I sold the business after operating it for 1.5 years at a significant profit due to relocation.  <br></br><br></br>
      </BodyP>
    </div>
    <div>
      <SchoolName className="schoolname">
        Director of Operations Pan—India
      </SchoolName>
      <SchoolDesc className="schooldesc"><strong>fitness first india ltd.</strong></SchoolDesc>
      <SchoolDesc className="schooldesc">Jan 2013 - Jan 2014</SchoolDesc>
      <BodyP>
        At{" "}
        <Link href="https://www.fitnessfirst.net.in/">
          Fitness First,
        </Link>{" "}
        my responsibilities included all aspects of operations and future growth, mitigation of risk, legal compliance, industry outreach, as well as strategic planning, sourcing and alignment of resources for two of the biggest new club launches in India. Some of my key acheivements were opening two of the most profitable Fitness First clubs in India, handling all aspects of pre-opening and launch of presales, and complete digitization of records and closure of two clubs with asset mobilization, deposit reconciliations and all regulatory compliances.<br></br><br></br>
      </BodyP>

    </div>
    <div>
      <SchoolName className="schoolname">
        General Manager Operations
      </SchoolName>
      <SchoolDesc className="schooldesc"><strong>Equinox Fitness</strong></SchoolDesc>
      <SchoolDesc className="schooldesc">Dec 2009 - Aug 2012</SchoolDesc>
      <BodyP>
        At{" "}
        <Link href="https://www.equinox.com/">
          Equinox Fitness,
        </Link>{" "}
        the most established and upscale provider of Fitness Clubs in the US with over 40 locations pan USA and Canada, I was responsible for managing its resources, developing and implementing our operational plan and ensuring that procedures were carried out smoothly. Additionally, I regularly evaluated organizational efficiency and made necessary changes to maximize staff productivity.<br></br><br></br>
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
      <Link href="https://www.instagram.com/aditya_dhillon13/">
        DM me on Instagram
      </Link>{" "}
      or get in touch on <Link href="https://www.linkedin.com/in/aditya-dhillon-52b85887/">LinkedIn!</Link>.
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
