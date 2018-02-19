import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';
import dblpEdges from './dblpEdges.png';
import dblpVertices from './dblpVertices.png';

const ExamplesComponent = () => (
  <Container>
    <Header size="huge" color="black" block>
      <img src="portal.png" />
      Examples: The DBLP Data Set
    </Header>
    <Header size="medium">
      In our sample use cases, we use a data set called DBLP, which represents collaborations
      between authors on academic works.
      <br/>
      The structure is simple.  Vertex attributes are author names, and there are no edge attributes.
      <br/>
      For more information about DBLP, see <a href="https://en.wikipedia.org/wiki/DBLP">Wikipedia</a>.
    </Header>
    <Grid columns="equal" stackable>
      <Grid.Row>
        <Grid.Column>
          <Header size="tiny" textAlign="center">
            Vertices
          </Header>
          <Image src={dblpVertices} size="huge" style={{margin: 'auto'}} />
        </Grid.Column>
        <Grid.Column>
          <Header size="tiny" textAlign="center">
            Edges
          </Header>
          <Image src={dblpEdges} size="huge" style={{margin: 'auto'}} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Header size="medium">
      Examples:
      <ul>
        <li><a href="#/TGraphInstantiation">TGraph Instantiation</a></li>
        <li><a href="#/vertexInfluenceOverTime">Vertex Influence Over Time</a></li>
        <li><a href="#/graphCentralityOverTime">Graph Centrality Over Time</a></li>
      </ul>
    </Header>
  </Container>
);

export default ExamplesComponent;
