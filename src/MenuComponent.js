import PropTypes from 'prop-types';
import React from 'react';
import { Container, Dropdown, Menu } from 'semantic-ui-react';

const MenuComponent = ({children, history}) => (
  <Container>
    <Menu borderless fluid color="black" inverted widths="4">
      <Menu.Item as="a" href="#/">Home</Menu.Item>
      <Dropdown basic simple item text="Docs">
        <Dropdown.Menu>
          <Dropdown.Item as="a" href="#/about" text="About" />
          <Dropdown compact basic simple item text="TGraph">
            <Dropdown.Menu>
              <Dropdown.Item as="a" href="#/tgraph" text="Overview" />
              <Dropdown.Item as="a" href="#/representations" text="Representations" />
              <Dropdown.Item as="a" href="#/operators" text="Operators" />
              <Dropdown.Item as="a" href="#/analytics" text="Analytics" />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown.Item as="a" href="https://portaldb.github.io/api" text="API" />
          <Dropdown compact basic simple item text="Examples" >
            <Dropdown.Menu>
              <Dropdown.Item as="a" href="#/examples" text="Overview" />
              <Dropdown.Item as="a" href="#/TGraphInstantiation" text="TGraph Instantiation" />
              <Dropdown.Item as="a" href="#/vertexInfluenceOverTime" text="Vertex Influence" />
              <Dropdown.Item as="a" href="#/graphCentralityOverTime" text="Graph Centrality" />
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as="a" href="#/installation">Install</Menu.Item>
      <Menu.Item as="a" href="#/publications">Publications</Menu.Item>
    </Menu>
    {children}
  </Container>
);

MenuComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuComponent;