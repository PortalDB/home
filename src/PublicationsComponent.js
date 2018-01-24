import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const PublicationsComponent = () => (
  <Container>
    <Header size="huge" color="black" block>
      <img src="portal.png" />
      Publications
    </Header>
    <Segment>
      <Container>
        Portal is a result of research conducted at the <a href="https://www.cs.drexel.edu/dbgroup/">Drexel Database Group</a>.
      </Container>
      <ul>
        <li><a href="https://dl.acm.org/citation.cfm?doid=3122831.3122838">Temporal graph algebra</a></li>
        <li><a href="http://openproceedings.org/2017/conf/edbt/paper-274.pdf">Towards sequenced semantics for evolving graph</a></li>
        <li><a href="https://arxiv.org/abs/1709.06176">Zooming in on NYC taxi data with Portal</a></li>
        <li><a href="https://dl.acm.org/citation.cfm?doid=2872518.2889290">Towards a Distributed Infrastructure for Evolving Graph Analytics</a></li>
        <li><a href="https://arxiv.org/abs/1602.00773">Portal: A Query Language for Evolving Graphs</a></li>
        <li><a href="https://dl.acm.org/citation.cfm?doid=2723372.2749433">Collaborative Access Control in WebdamLog</a></li>
        <li><a href="https://arxiv.org/abs/1307.8269">Introducing Access Control in Webdamlog</a></li>
        <li><a href="https://dl.acm.org/citation.cfm?doid=1957656.1957727">Team-based interactions with heterogeneous robots through a novel HRI software architecture</a></li>
      </ul>
    </Segment>
  </Container>
);

export default PublicationsComponent;
