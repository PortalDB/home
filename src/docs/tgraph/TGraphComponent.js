import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const TGraphComponent = () => (
  <Container>
    <Header size="huge" color="black" block>
      <img src="portal.png" />
      Temporal Graph (TGraph)
    </Header>
    <Segment>
      <Header size="huge" dividing>Temporal Graph</Header>
      <Container>
        A TGraph represents a single evolving graph, consisting of nodes (vertices – we use the two terms interchangeably), node properties, edges, edge properties,
        and addition, modification, and deletion of these over time. It uses a closed world semantics – we assume that evolution history is complete,
        the state of the graph is fully known and recorded at each time instant, and future information is not represented,
        i.e., there is no uncertain or incomplete information.
        <br/><br/>
        One way to visualize a TGraph is as a sequence of snapshots, one for each time instant.
        <br/><br/>
        Both TGraph nodes and edges have a time-persistent id, represented, as in GraphX, as Longs. A node (resp. edge) can change, be removed, and re-appear,
        and be considered the same entity as long as it maintains the same id. Any number of edges can exist between any two nodes at any time point, provided they have different ids.
        That is, we support multigraphs. In every snapshot a node/edge exists at most once. An edge always connects the same two nodes, whenever it exists.
        Time is an inherent property of the model rather than an additional property of a node or edge – it cannot be modified by the user directly, although it can be accessed in user functions.
        Referential integrity holds on edges with respect to nodes, guaranteeing that edges only exist if their end points exist at the same time.
      </Container>
      <ul>
        <li><a href="#/representations">TGraph Representations</a></li>
        <li><a href="#/operators">TGraph Operators</a></li>
        <li><a href="#/analytics">TGraph Analytics</a></li>
      </ul>
      <Header size="small">Coming Soon: TGraph diagram and a link to the paper detailing its formal semantics...</Header>
    </Segment>
  </Container>
);

export default TGraphComponent;
