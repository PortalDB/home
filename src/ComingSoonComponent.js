import React from 'react';
import { Card, Container, Header, Image } from 'semantic-ui-react';

const ComingSoonComponent = ({ headerText }) => (
  <Container>
    <Header size="huge" color="black" dividing block>
      <img src="portal.png" />
      {headerText}
    </Header>
    <Card style={{margin: 'auto'}}>
      <Image src="underConstruction.png" />
      <Card.Content
        header="Coming Soon!"
        description="Please check back later for details..."
      />
    </Card>
  </Container>
);

export default ComingSoonComponent;
