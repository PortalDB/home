import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const OperatorsComponent = () => (
  <Container>
    <Header size="huge" color="black" dividing block>
      <img src="portal.png" />
      TGraph Operators
    </Header>
    <Segment>
      <Header size="huge" dividing>Graph Instantiation</Header>
      <Container>
        There are four ways to create these graph representations. You can start with an empty graph, or instantiate the graph from RDDs of vertices and edges.
        Normally, you’ll create the graphs from existing datasets. You can do that by loading them from DataFrames or Parquet files.
      </Container>
      <Header size="huge" dividing>Slice</Header>
      <Container>
        The trim operator takes a time interval and computes a new TGraph, limited only to those nodes and edges that existed during the specified period, using closed-open semantics.
        That is, the start of the interval is inclusive, but the end exclusive. All intervals in Portal are closed-open.
        <br/><br/>
        In the example below, you will see the the graph graph is sliced with an interval of 2012-01-01 to 2015-01-01. The resulting graph will only contain nodes and edges within that time interval.
        If no nodes exist during the input interval, the result is an empty graph.
        <br/><br/>
        <code>val sliceInterval = (Interval(LocalDate.parse("2012-01-01"), LocalDate.parse("2015-01-01")))</code>
        <br/>
        <code>var slicedGraph = graph.slice(sliceInterval)</code>
      </Container>
      <Header size="huge" dividing>Map</Header>
      <Container>
        Vertex-map and Edge-map can be used to manipulate node and edge
        attributes of a TGraph. Vertex-map and edge-map apply user-defined map
        functions to attributes in the same spirit as map in functional
        languages. While the map functions are arbitrary user-specified
        functions, there are some common cases, such as specifying the set of
        properties to project out or retain. In other words, mapping is on an
        entity-by-entity, tuple-by-tuple basis. The time period can be
        referenced in the mapping function but cannot be changed, that is, the
        period of validity remains unchanged.
      </Container>
      <Header size="large">Vertex Map</Header>
      <Container>
        The vertex map operator takes in a map function which transforms each vertex attribute in the graph for each time period using the map function.
        The new attribute can be the same type or a completely different type.  The user-defined map function, applied to each node, takes the vertex id,
        attribute value, and the interval during which that attribute value held, and produces a new value.
        <br/><br/>
        <code>var mappedGraph = graph.vmap((vertex,intv, name) => name.toUpperCase, "Default")`</code>
        <br/><br/>
        'Default' in this example is the default attribute values for a
        function that produces a string attribute.  Default values are used by
        Portal for some internal operations and are required.
      </Container>
      <Header size="large">Edge Map</Header>
      <Container>
        The edge map operator takes in a map function which transforms each edge attribute in the graph for each time period using the map function.
        The emap function can also be specified with the data type of the new edge object. If no data type is specified,
        the function will consider the data type of the new edge is the same old edge.
        <br/><br/>
        <code>var mappedGraph = graph.emap(edge => edge.attr * tedge.attr)</code>
      </Container>
      <Header size="huge" dividing>SubGraph</Header>
      <Container>
        The subgraph operator applies some predicate to the graph, producing a graph that only contains those vertices (or edges) that pass the predicate.
      </Container>
      <Header size="large">Vertex SubGraph</Header>
      <code>
        var selectFunction = (id: VertexId, attr: String, x: Interval) => x.equals(Interval(LocalDate.parse("2012-01-01"), LocalDate.parse("2015-01-01")))
      </code>
      <br/>
      <code>
        var subgraph = graph.vsubgraph(selectFunction)
      </code>
      <Header size="large">Edge SubGraph</Header>
      <code>
        val actualg = g.esubgraph(pred = tedgeTriplet => tedgeTriplet.srcId > 2 && tedgeTriplet.attr==42)
      </code>
      <Header size="huge" dividing>Aggregation</Header>
      <Container>
        It is useful to be able to compute new properties of nodes based on their neighbors, such as a node degree or a list of all cities that one's friends have visited.
        Temporal aggregation operation is a generalization of graph aggregation to time.  It computes the value of a new node property based on information available at the node itself,
        at the edges associated with the node, and at its neighbors.
      </Container>
      <Header size="large">Node Creation</Header>
      <Container>
        It is sometimes useful to be able to output new nodes that are not part of the input. The operation that allows the addition of new nodes is called node creation.
        The node creation operator enables the user to analyze an evolving graph at different levels of granularity.  This operator comes in two variants ---
        based on node attributes or based on temporal window.
      </Container>
      <Header size="large">CreateTemporalNodes</Header>
      <Container>
        This operator is simply a wrapper around the AggregateByChange/AggregateByTime operators described below.
        It takes a 'WindowSpecification', which is either a ChangeSpec or a TimeSpec, and performs the proper temporal aggregation accordingly.
      </Container>
      <code>var aggregatedGraph = graph.createTemporalNodes(windowSpec, vquant, equant, vAggFunc, eAggFunc)</code>
      <ul>
        <li>WindowSpecification: either a ChangeSpec or a TimeSpec (see below).</li>
        <li>
          Vertex Quantifier: determines whether or not a vertex should exist in a combined snapshot.
          A vertex can be included only if it always exists, if it ever exists, if it exists for at least some portion of the ChangeSpec,
          or if it exists for at most some portion of the ChangeSpec.
        </li>
        <li>
          Edge Quantifier: determines whether or not an edge should exist in a combined snapshot.
          An edge can be included only if it always exists, if it ever exists, if it exists for at least some portion of the ChangeSpec,
          or if it exists for at most some portion of the ChangeSpec.
        </li>
        <li>
          Vertex Aggregation function: When two equal vertices are merged into one, this function takes the existing vertex attribute from each,
          and computes the attribute on the combined vertex.
        </li>
        <li>
          EdgeAggregation function: When two equal edges are merged into one, this function takes the existing edge attribute form each, and computes the attribute on the combined edge.
        </li>
      </ul>
      <Header size="small">By Change</Header>
      <Container>
        The createTemporalByChange operator aggregates the vertices and edges of a graph over some number of evolutions.
        A graph with, for example, 100 evolutions, becomes a graph with only 10 evolutions.
      </Container>
      <ul>
        <li>ChangeSpec: how many consecutive snapshots of the graph should be combined into one.</li>
      </ul>
      <Header size="small">By Time</Header>
      <Container>
        The createTemporalByTime operator aggregates the vertices and edges of a graph into some greater temporal resolution.
        A graph that evolves on, for example, a daily basis, becomes one that evolves on a monthly basis.
      </Container>
      <ul>
        <li>TimeSpec: what size temporal window to zoom to.  For instance, 1 month intervals.</li>
      </ul>
      <Header size="large">CreateAttributeNodes</Header>
      <Container>
        This is a structural 'zoom' operation.  It takes an existing graph and zooms based on some grouping of vertices.
      </Container>
      <ul>
        <li>
          Vertex Aggregation function: When two equal vertices are merged into one, this function takes the existing vertex attribute from each,
          and computes the attribute on the combined vertex.
        </li>
        <li>
          Vertex Grouping function: Given a vertex ID and its attributes, this function determines a new vertex ID.
          The grouping function determines what vertices will become 'equal' via the zoom operation.
        </li>
      </ul>
      <Header size="huge" dividing>Union, Intersection, and Difference</Header>
      <Header size="large">Union</Header>
      <Container>
        The union operator takes two temporal graphs and returns a new TGraph with the union of the both graphs inclusive of all time intervals.
        User defined functions over both vertices and edges determine how those with identical ID's should be merged.
      </Container>
      <Header size="large">Intersection</Header>
      <Container>
        The intersection operator takes two temporal graphs and returns a new TGraph with the intersection of the both graphs inclusive of shared time intervals.
        User defined functions over both vertices and edges determine how those with identical ID's should be merged.
      </Container>
      <Header size="large">Difference</Header>
      <Container>
        The difference operator takes two temporal graphs and returns a new TGraph with the difference of the both graphs.
        That is to say, only parts of the source graph that are not in the destination graph.
      </Container>
      <Header size="small">Coming Soon: examples for each analytic...</Header>
    </Segment>
  </Container>
);

export default OperatorsComponent;
