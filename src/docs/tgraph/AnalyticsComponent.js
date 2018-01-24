import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const AnalyticsComponent = () => (
  <Container>
    <Header size="huge" color="black" dividing block>
      <img src="portal.png" />
      TGraph Analytics
    </Header>
    <Segment>
      <Header size="huge" dividing>Pagerank</Header>
      <Container>
        The pagerank operation runs pagerank on all intervals. It is up to the implementation to run sequantially, in parallel, incrementally, etc.
        The number of iterations will depend on both the numIter argument and the rate of convergence, whichever occurs first.
        <br/>
        The pagerank function takes parameters:
        <ul>
          <li>uni: to treat the graph as undirected or directed where true is directed</li>
          <li>tol: measure of convergence</li>
          <li>resetProb: probability of reset/jump</li>
          <li>numIter: number of iterations of the algorithm to run. If omitted, will run</li>
          <li>until: convergence of the tol argument.</li>
        </ul>
        The function returns a new graph with pageranks for each interval (coalesced).
      </Container>
      <Header size="huge" dividing>Shortest Path</Header>
      <Container>
        The shortestPath operation computes shortest paths to the given set of landmark vertices.
        <br/>
        The shortestPath function takes parameters:
        <ul>
          <li>landmarks: the list of landmark vertex ids to which shortest paths will be computed</li>
        </ul>
        The function returns a graph with vertices where each vertex attribute is the shortest-path distance to each reachable landmark vertex.
      </Container>
      <Header size="huge" dividing>Connected Components</Header>
      <Container>
        The connectedComponents operation runs connected components algorithm on a temporal graph and returns a graph
        with the vertex attribute of the lowest vertex id in the connected component containing that vertex.
      </Container>
      <Header size="huge">Triangle Count</Header>
      <Container>
        The trinagle count operation computes the clustering coefficient of each vertex,
        which is equal to the number of triangles that pass through it divided by k*(k-1), where k is the vertex degree.
      </Container>
      <Header size="huge">Clustering Coefficient</Header>
      <Container>
        The clustering coefficient operation aggregates values from the neighboring edges and vertices of each vertex,
        for each representative graph. Unlike in GraphX, this returns a new graph, not an RDD.
        The user-supplied `sendMsg` function is invoked on each edge of the graph,
        generating 0 or more messages to be sent to either vertex in the edge.
        The `mergeMsg` function is then used to combine all messages
      </Container>
      <Header size="small">Coming Soon: examples for each analytic...</Header>
    </Segment>
  </Container>
);

export default AnalyticsComponent;
