import React from 'react';
import {
  Container, Grid,
  Header, Image, Segment
} from 'semantic-ui-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import circleGraph from './circleGraph.jpg';
import starGraph from './starGraph.jpg';
import graphCentrality from './graphCentrality.png'
import { centrality1, centrality2, centrality3, centrality4 } from './codeSnippets';

const GraphCentralityComponent = () => (
  <Container>
    <Header size="huge" color="black" block>
      <img src="portal.png" />
      Example: Graph Centrality Over Time
    </Header>
    <Segment>
      <Header size="medium">
        In this example we compute the degree centrality of DBLP over time.
        <br/>
        Degree centrality is a simple measure the uniformity of influence in a graph.
        <br/>
        For more information, see the definition <a href="https://en.wikipedia.org/wiki/Centrality">here</a>.
      </Header>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Header size="tiny">
              The most centralized graph is a "star graph".
              A central node is connected to every other,
              and every outside node is connected only to the center.
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header size="tiny">
              The least centralized graph is a "circle graph", where all nodes have the same exact degree.
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image src={starGraph} size="medium" style={{margin: 'auto'}} />
          </Grid.Column>
          <Grid.Column>
            <Image src={circleGraph} size="medium" style={{margin: 'auto'}} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Header size="medium">
        <ol>
          <li>Calculate the degree of each node at all points in time using aggregate messages.</li>
          <li>
            Initialize two extra variables at each node using vertex map.
            They will ultimately hold the max degree and total vertex count.
          </li>
          <li>
            Use structural aggregation to calculate the total degree count, the maximum degree,
            and the total vertex count, for the whole graph.
          </li>
          <li>
            Use vertex map again to apply a basic graph centrality formula to the resultant evolving graph.
          </li>
        </ol>
      </Header>
    </Segment>
    <Segment>
      <Header>1. Calculate degree</Header>
      <SyntaxHighlighter lang="scala" showLineNumbers children={centrality1} />
    </Segment>
    <Segment>
      <Header>2. Initialize attributes</Header>
      <SyntaxHighlighter lang="scala" showLineNumbers children={centrality2} />
    </Segment>
    <Segment>
      <Header>3. Structural aggregation</Header>
      <SyntaxHighlighter lang="scala" showLineNumbers children={centrality3} />
    </Segment>
    <Segment>
      <Header>4. Formula</Header>
      <SyntaxHighlighter lang="scala" showLineNumbers children={centrality4} />
    </Segment>
    <Segment>
      <Header>Result</Header>
      <Image src={graphCentrality} style={{margin: 'auto'}} />
    </Segment>
  </Container>
);

export default GraphCentralityComponent;
