import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Dropdown, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';

class DocsDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }
  render() {
    return (
      <Dropdown basic simple item text="Docs" open={this.state.open}>
        <Dropdown.Menu>
          <Dropdown.Item as="a" href="#/about" text="About" onMouseLeave={() => this.setState({ open: false })} />
          <TGraphDropdown onMouseLeave={() => this.setState({ open: false })} />
          <Dropdown.Item as="a" href="https://portaldb.github.io/api" text="API" onMouseLeave={() => this.setState({ open: false })} />
          <ExamplesDropdown onMouseLeave={() => this.setState({ open: false })} />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

class TGraphDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }
  render() {
    return (
      <Dropdown basic simple item text="TGraph" open={this.state.open} onMouseLeave={() => this.setState({ open: false })}>
        <Dropdown.Menu>
          <Dropdown.Item as="a" href="#/tgraph" text="Overview" onMouseLeave={() => this.setState({ open: false })}/>
          <Dropdown.Item as="a" href="#/representations" text="Representations" onMouseLeave={() => this.setState({ open: false })}/>
          <Dropdown.Item as="a" href="#/operators" text="Operators" onMouseLeave={() => this.setState({ open: false })}/>
          <Dropdown.Item as="a" href="#/analytics" text="Analytics" onMouseLeave={() => this.setState({ open: false })}/>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

class ExamplesDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }
  render() {
    return (
      <Dropdown basic simple item text="Examples" open={this.state.open} onMouseLeave={() => this.setState({ ...this.state, docs: false })} >
        <Dropdown.Menu>
          <Dropdown.Item as="a" href="#/examples" text="Overview" onMouseLeave={() => this.setState({ open: false })}/>
          <Dropdown.Item as="a" href="#/TGraphInstantiation" text="TGraph Instantiation" onMouseLeave={() => this.setState({ open: false })}/>
          <Dropdown.Item as="a" href="#/vertexInfluenceOverTime" text="Vertex Influence" onMouseLeave={() => this.setState({ open: false })}/>
          <Dropdown.Item as="a" href="#/graphCentralityOverTime" text="Graph Centrality" onMouseLeave={() => this.setState({ open: false })}/>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

const MobileMenuComponent = () => (
  <Menu borderless fluid color="black" inverted>
    <Dropdown basic simple item icon="bars">
      <Dropdown.Menu>
        <Dropdown.Item as="a" href="#/">Home</Dropdown.Item>
        <Dropdown.Item as="a" href="#/about" onClick={this.closeDropdown}>About</Dropdown.Item>
        <TGraphDropdown/>
        <Dropdown.Item as="a" href="https://portaldb.github.io/api">API</Dropdown.Item>
        <ExamplesDropdown/>
        <Dropdown.Item as="a" href="#/installation" >Install</Dropdown.Item>
        <Dropdown.Item as="a" href="#/publications">Publications</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>Portal</Menu.Item>
  </Menu>
);

const DesktopMenuComponent = () => (
  <Menu borderless fluid color="black" inverted widths="4">
    <Menu.Item as="a" href="#/">Home</Menu.Item>
    <DocsDropdown/>
    <Menu.Item as="a" href="#/installation">Install</Menu.Item>
    <Menu.Item as="a" href="#/publications">Publications</Menu.Item>
  </Menu>
);

const MenuComponent = ({children, width}) =>  (
  <Container>
    { width >= 500 ? <DesktopMenuComponent/> : <MobileMenuComponent/>}
    {children}
  </Container>
);

MenuComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuComponent;