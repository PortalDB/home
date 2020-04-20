import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const PublicationsComponent = () => (
  <Container>
    <Header size="huge" color="black" block>
      <img src="portal.png" />
      Publications
    </Header>
    <Segment>
      <ul>
        <li><a href="https://openproceedings.org/2020/conf/edbt/paper_14.pdf">Zooming out on an evolving graph</a> 
            , Amir Aghasadeghi, Vera Zaychik Moffitt, Sebastian Schelter, Julia Stoyanovich, EDBT 2020</li>
        <li><a href="https://dl.acm.org/citation.cfm?doid=3209950.3209954">Generating Evolving Property Graphs with Attribute-Aware Preferential Attachment</a>
           , Amir Aghasadeghi and Julia Stoyanovich, DBTest 2020, an ACM SIGMOD workshop</li> 
        <li><a href="https://dl.acm.org/citation.cfm?doid=3122831.3122838">Temporal graph algebra</a>
           , Vera Zaychik Moffitt and Julia Stoyanovich, DBPL 2017</li>
        <li><a href="http://openproceedings.org/2017/conf/edbt/paper-274.pdf">Towards sequenced semantics for evolving graph</a> 
           , Vera Moffitt and Julia Stoyanovich, EDBT 2017 </li>
        <li><a href="https://arxiv.org/abs/1709.06176">Zooming in on NYC taxi data with Portal</a>
           , 	Julia Stoyanovich, Matthew Gilbride, Vera Zaychik Moffitt, DSSG 2017</li>
        <li><a href="https://dl.acm.org/citation.cfm?doid=2872518.2889290">Towards a Distributed Infrastructure for Evolving Graph Analytics</a>
          , Vera Moffitt and Julia Stoyanovich, TempWeb 2016, a WWW workshop</li>
  </ul>
    </Segment>
  </Container>
);

export default PublicationsComponent;
