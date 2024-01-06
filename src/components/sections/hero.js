import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--purple);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi!, my name is</h1>;
  const two = <h2 className="big-heading">Vani Ruchika Pabba.</h2>;
  const three = <h3 className="big-heading">I love turning innovative ideas into reality.</h3>;
  const four = (
    <>
      <p>
        I'm a recent Computer Science graduate from the{' '}
        <a href="https://www.ufl.edu/" target="_blank" rel="noreferrer">
          University of Florida
        </a>{' '}
        with expertise in developing responsive, and scalable Full-Stack applications. My passion
        lies in designing seamless user experiences, a talent I’ve put to practice at{' '}
        <a href="https://www.infosys.com/" target="_blank" rel="noreferrer">
          Infosys
        </a>
        , where I contributed to building robust software solutions.{' '}
      </p>
    </>
  );
  const five = (
    // <a
    //   className="email-link"
    //   href="https://www.newline.co/courses/build-a-spotify-connected-app"
    //   target="_blank"
    //   rel="noreferrer">
    //   Check out my course!
    // </a>
    <a className="email-link" href={`mailto:${email}`}>
      Contact Me
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
