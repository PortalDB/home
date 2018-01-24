import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const AboutComponent = () => (
  <Container>
    <Header size="huge" color="black" block>
      <img src="portal.png" />
      About
    </Header>
    <Segment>
      <Header size="huge" dividing>What is Portal?</Header>
      <Container>
        Portal is a system for efficient querying and exploratory analysis of evolving graphs, built on <a href="https://spark.apache.org/">Apache Spark</a>.
        At a high level, Portal extends Apache Spark’s graph library, <a href="http://spark.apache.org/graphx/">GraphX</a>,
        by introducing a new Temporal Graph abstraction (<a href="#/tgraph">TGraph</a>) with four concrete <a href="#/representations">implementations</a>:
        RepresentativeGraph, OneGraph, HybridGraph and Vertex Edge.
        To support evolving graph computation, Portal exposes a set of fundamental <a href="#/operators">operators</a> and <a href="#/analytics">analytics</a> for TGraph.
      </Container>
      <Container>
        Portal is written in scala.  See the API documentation <a href="https://mtg5014.github.io/githubPagesStatic">here</a>.
      </Container>
      <Header size="huge" dividing>Why?</Header>
      <Container>
        Many systems provide query abstractions over graph data structures. These include both graph databases, such as <a href="https://neo4j.com/">neo4j</a>, and cluster computing frameworks,
        such as Apache Spark. However, no open source framework for the query of evolving graphs has become widely used.
        <br/><br/>
        Graph data structures are ubiquitous in the world (The Web, Social Networks, and Transportation Networks are just a few broad categories of application).
        Thus, it stands to reason that we can ask many interesting questions of graphs as they change over time.
        <ul>
          <li>
            Given a particular person’s popularity on a social network,
            we may want to see how that popularity is trending upwards or downwards over the past year or month.
          </li>
          <li>
            Given a particular transportation network, we may want to see how remote destinations are becoming more or less accessible,
            compared year over year.
          </li>
        </ul>
        <Header size="small">
          When we frame many time based analytics in terms of graph data structures, we see that a framework for evolving graphs analysis begs exploration.
        </Header>
      </Container>
    </Segment>
  </Container>
);

export default AboutComponent;
