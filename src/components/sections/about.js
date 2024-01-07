import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--purple);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--purple);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--purple);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Angular',
    'Express',
    'Node.js',
    'MongoDB',
    'Python',
    'C++',
    'Jenkins (CI/CD)',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            {/* <p>
              Hello! My name is Ruchika and I enjoy creating things that live on the internet. My
              interest in web development started back in 2012 when I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot
              about HTML &amp; CSS!
            </p> */}
            <p>
              Hello! My name is Ruchika and I enjoy building solutions that make a real difference.
              With a strong foundation in React and Angular, I specialize in constructing end-to-end
              feature components, optimizing code for efficiency, and troubleshooting for
              performance enhancements.
            </p>
            <p>
              My tech journey began with an internship at{' '}
              <a href="https://www.infosys.com/">Infosys</a>, where I became an Infosys Certified
              React Professional and received a Top Performer recognition and incentives at the
              <a href="https://www.infosys.com/about/management-profiles/narayana-murthy.html">
                Narayana Murthy Center of Excellence
              </a>
              .
            </p>
            <p>
              With 2+ years experience at{' '}
              <a href="https://www.infosysequinox.com/">Infosys Equinox</a>, I helped build a{' '}
              <a href="https://www.infosysequinox.com/offerings/infosys-equinox-studio.html">
                digital commerce platform
              </a>{' '}
              now used by 250+ brands. My contributions, including 40+ high-performing features,
              were recognized with a{' '}
              <a href="https://drive.google.com/file/d/1UKbJbITC_uEsZkNEFtnsahXganfzbY77/view?usp=sharing">
                Spotlight Appreciation
              </a>{' '}
              Award.
            </p>
            {/* <p>
              When not immersed in my computer, you'll find me exploring new realms of knowledge,
              experimenting with culinary creations, or just simply embracing the beauty of the
              great outdoors.
            </p> */}
            <p>
              I’m currently seeking full-time positions as a Full Stack Developer/Software
              Developer/Software Engineer, and I’m excited to bring my skills and contributions to a
              new team.
            </p>

            {/* <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://us.mullenlowe.com/">an advertising agency</a>,{' '}
              <a href="https://starry.com/">a start-up</a>,{' '}
              <a href="https://www.apple.com/">a huge corporation</a>, and{' '}
              <a href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. My
              main focus these days is building accessible, inclusive products and digital
              experiences at <a href="https://upstatement.com/">Upstatement</a> for a variety of
              clients.
            </p>

            <p>
              I also recently{' '}
              <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
                launched a course
              </a>{' '}
              that covers everything you need to build a web app with the Spotify API using Node
              &amp; React.
            </p> */}

            <p>Here are a few technologies I’m familiar with:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
