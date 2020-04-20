import React from 'react';
import {
  Container,
  Grid, Header,
  Image
} from 'semantic-ui-react';

const HomeComponent = () => (
  <Container>
    <Header size="huge" color="black" block>
      <img src="portal.png" alt=""/>
      Home
      <Header.Subheader>
        <br/><br/>
        Portal is a system for the exploration of evolving graph data structures.
        <br/><br/>
        You can learn more about it at our <a href="#/about">About</a> page and our <a href="#/examples">Examples</a> page.
        <br/><br/>
        The beta release is out! See our <a href="#/installation">Installation</a> page to get started,
        or check out the source code on <a href="https://github.com/PortalDB/Portal">Github</a>.
        <br/><br/>
        This research is supported by <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1750179"> NSF CAREER 1750179 </a>  "Querying Evolving Graphs".

      </Header.Subheader>
    </Header>
  </Container>
);

export default HomeComponent
