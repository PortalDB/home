import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Container, Header, Image, Segment } from 'semantic-ui-react';
import { influenceOverTime, lifetimeDegrees } from './codeSnippets';
import topCollaboratorsScreenshot from './topCollaboratorsScreenshot.png'
import vertexInfluence from './vertexInfluence.png'

const VertexInfluenceComponent = () => (
  <Container>
    <Header size="huge" color="black" block>
      <img src="portal.png" />
      Example: Vertex Influence Over Time
    </Header>
    <Segment>
      <Header size="medium">
        In this example we analyze the top collaborators in the DBLP dataset.
        <ol>
          <li>Calculate the degree of authors over all time using temporal aggregation, then aggregate messages.</li>
          <li>Limit the analysis to the top 5 authors (in terms of total collaborations) of all time.</li>
          <li>Look at the degree of the top 5 authors over the yearly evolution of the graph.</li>
        </ol>
      </Header>
    </Segment>
    <Segment>
      <Header>1. Calculate collaborations</Header>
      <SyntaxHighlighter lang="scala" showLineNumbers children={lifetimeDegrees} />
    </Segment>
    <Segment>
      <Header>2. Top 5</Header>
      <Image src={topCollaboratorsScreenshot} style={{margin: 'auto'}} />
    </Segment>
    <Segment>
      <Header>3. Degree over time</Header>
      <SyntaxHighlighter lang="scala" showLineNumbers children={influenceOverTime}/>
    </Segment>
    <Segment>
      <Header>Result</Header>
      <Image src={vertexInfluence} style={{margin: 'auto'}} />
    </Segment>
  </Container>
);

export default VertexInfluenceComponent;
