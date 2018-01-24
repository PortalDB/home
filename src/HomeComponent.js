import React from 'react';
import {
  Grid, Header,
  Image
} from 'semantic-ui-react';

const HomeComponent = () => (
  <Header size="huge" color="black" block>
    <Grid verticalAlign="middle">
      <Grid.Column width="4">
        <Image size="medium" src="portal.png" style={{margin: 'auto'}}/>
      </Grid.Column>
      <Grid.Column width="12">
        Portal is a system for the exploration of evolving graph data structures.
        <br/>
        You can learn more about it at our <a href="#/about">About</a> page and our <a href="#/examples">Examples</a> page.
        <br/>
        The beta release is out! See our <a href="#/installation">Installation</a> page to get started,
        or check out the source code on <a href="https://github.com/PortalDB/Portal">Github</a>.
      </Grid.Column>
    </Grid>

  </Header>
);

export default HomeComponent
