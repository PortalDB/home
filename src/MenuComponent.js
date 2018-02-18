import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Dropdown, Menu } from 'semantic-ui-react';

class DocsDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: false,
      tgraph: false,
      examples: false,
    }
  }
  render() {
    return (
      <Dropdown basic simple item text="Docs" open={this.state.docs}>
        <Dropdown.Menu>
          <Dropdown.Item as="a" href="#/about" text="About" onMouseLeave={() => this.setState({ ...this.state, docs: false })} />
          <Dropdown compact basic simple item text="TGraph" open={this.state.tgraph} onMouseLeave={() => this.setState({ ...this.state, docs: false })}>
            <Dropdown.Menu>
              <Dropdown.Item as="a" href="#/tgraph" text="Overview" onMouseLeave={() => this.setState({ ...this.state, tgraph: false })}/>
              <Dropdown.Item as="a" href="#/representations" text="Representations" onMouseLeave={() => this.setState({ ...this.state, tgraph: false })}/>
              <Dropdown.Item as="a" href="#/operators" text="Operators" onMouseLeave={() => this.setState({ ...this.state, tgraph: false })}/>
              <Dropdown.Item as="a" href="#/analytics" text="Analytics" onMouseLeave={() => this.setState({ ...this.state, tgraph: false })}/>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown.Item as="a" href="https://portaldb.github.io/api" text="API" onMouseLeave={() => this.setState({ ...this.state, docs: false })} />
          <Dropdown compact basic simple item text="Examples" open={this.state.examples} onMouseLeave={() => this.setState({ ...this.state, docs: false })} >
            <Dropdown.Menu>
              <Dropdown.Item as="a" href="#/examples" text="Overview" onMouseLeave={() => this.setState({ ...this.state, examples: false })}/>
              <Dropdown.Item as="a" href="#/vertexInfluenceOverTime" text="Vertex Influence" onMouseLeave={() => this.setState({ ...this.state, examples: false })}/>
              <Dropdown.Item as="a" href="#/graphCentralityOverTime" text="Graph Centrality" onMouseLeave={() => this.setState({ ...this.state, examples: false })}/>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

const MenuComponent = ({children, history}) => (
  <Container>
    <Menu borderless fluid color="black" inverted widths="4">
      <Menu.Item as="a" href="#/">Home</Menu.Item>
      <DocsDropdown/>
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