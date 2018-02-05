import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Container, Header, Image, Segment } from 'semantic-ui-react';
import { emptyGraph, fromDataFrames, fromParquet, fromRDDs } from './codeSnippets';
import topCollaboratorsScreenshot from './topCollaboratorsScreenshot.png'
import vertexInfluence from './vertexInfluence.png'

const VertexInfluenceComponent = () => (
  <Container>
    <Header size="huge" color="black" block>
      <img src="portal.png" />
      Example: TGraph Instantiation
    </Header>
    <Segment>
      <Header size="medium">
        In this example, we look at different ways to instantiate TGraphs. 
      </Header>
    </Segment>
    <Segment>
      <Header>1. Empty Graph</Header>
      <SyntaxHighlighter lang="scala" showLineNumbers children={emptyGraph} />
    </Segment>
    <Segment>
      <Header>2. From RDDs</Header>
      <SyntaxHighlighter lang="scala" showLineNumbers children={fromRDDs} />
    </Segment>
    <Segment>
      <Header>3. From fromDataFrames</Header>
      <SyntaxHighlighter lang="scala" showLineNumbers children={fromDataFrames} />
    </Segment>
    <Segment>
      <Header>4. From fromParquet</Header>
      <SyntaxHighlighter lang="scala" showLineNumbers children={fromParquet} />
    </Segment>

  </Container>
);

export default VertexInfluenceComponent;
