import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Typography, Grid, Button } from "@material-ui/core";
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useTrail, animated, useSpring } from "react-spring";
import styles from './index.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import logo from '@site/static/img/panda1.png';
const socialLinks = {
    instagram: "https://www.instagram.com/sidharthsharmaa22/",
    twitter: "https://twitter.com/sidsharma96",
    github: "https://github.com/sidsharma22/",
    linkedin: "https://www.linkedin.com/in/sidsharma22/",
  };
  


  function SocialLinks({ animatedProps, ...props }) {
    return (
      <animated.div className="social__links" style={animatedProps}>
        <Grid container spacing={2}  direction="row" justifyContent="center" alignItems="center">
          <Grid item md="auto">
            <a href="https://www.linkedin.com/in/sidsharma22/">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </Grid>
          <Grid item>
            <a href="https://github.com/sidsharma22/">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </Grid>
          <Grid item>
            <a href="https://twitter.com/Sidsharmaa22">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
          </Grid>
        </Grid>
      </animated.div>
    );
}


  function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      
    );
  }

function HomeNew(){
  const {siteConfig} = useDocusaurusContext();
  return (
  <Layout>
<Grid container spacing={2} style={{ padding: "5%" }} className="hero">
        {/*Personal Intro */}
        <Grid item xs={12} lg={6} className="homeIntro">
          <animated.div>
            <Typography variant="h2" gutterBottom>
              <span className="intro__name"> {siteConfig.title}</span>
              {/* <Typography variant="body2">
                <span>{siteConfig.tagline}</span>
              </Typography> */}
            </Typography>
          </animated.div>
          <animated.div>
            <Typography variant="body1">
              <p>
                A Carnegie Mellon University student who has a great passion for 
                software and hardware engineering. While keeping updated with the most 
                recent technologies, I always seek to improve and grow as a
                professional computer engineer as well as a person.
              </p>{" "}
            </Typography>
          </animated.div>
          &nbsp;
          <animated.div>
            <Typography variant="h6" gutterBottom>
              <p>My Skills:</p>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <ul>
                <li>Building Machine Learning Systems</li>
                <li >Full-Stack Software Development</li> 
                <li>Hardware CPU/Accelerator Design</li>
                <li>Cloud techonologies</li>
              </ul>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {/*<p><b>Prompt Used:</b> <i>"A panda coding in a cafe with hoddie over head"</i></p>*/}
            </Typography>
          </animated.div>
        </Grid>

        <Grid item xs={12} lg={6} className="homeImg">
          <img src={logo} /> 
          <Typography variant="body1" gutterBottom>
          <p>I asked an <a href="https://beta.dreamstudio.ai/dream"> AI </a> to draw a potrait of me, this is what I got back.</p>
          </Typography>
        </Grid>
      </Grid>
  </Layout>

  );
}

  export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <HomeNew />
        <SocialLinks />
      </Layout>
    );
  }

  /*
          <main>
          < HomepageFeatures />
        </main>
  */


