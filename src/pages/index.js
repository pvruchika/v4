import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, /*Projects,*/ Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Contact />
    </StyledMainContainer>
  </Layout>
);
// <Projects /> was removed from the above, in case you want to add in the future.
IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
