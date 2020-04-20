import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AboutComponent from './docs/AboutComponent';
import AnalyticsComponent from './docs/tgraph/AnalyticsComponent';
import OperatorsComponent from './docs/tgraph/OperatorsComponent';
import RepresentationsComponent from './docs/tgraph/RepresentationsComponent';
import TGraphComponent from './docs/tgraph/TGraphComponent';
import ExamplesComponent from './examples/ExamplesComponent';
import GraphCentralityComponent from './examples/graphCentrality/GraphCentralityComponent';
import VertexInfluenceComponent from './examples/vertexInfluence/VertexInfluenceComponent';
import TGraphInstantiationComponent from './examples/TGraphInstantiation/TGraphInstantiationComponent';
import HomeComponent from './HomeComponent';
import InstallationComponent from './InstallationComponent';
import MenuComponent from './MenuComponent';
import PublicationsComponent from './PublicationsComponent';
import Footer from './FooterComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <HashRouter>
        <MenuComponent width={this.state.width}>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} />
            <Route exact path="/tgraph" component={TGraphComponent} />
            <Route exact path="/representations" component={RepresentationsComponent} />
            <Route exact path="/operators" component={OperatorsComponent} />
            <Route exact path="/analytics" component={AnalyticsComponent} />
            <Route exact path="/installation" component={InstallationComponent} />
            <Route exact path="/examples" component={ExamplesComponent} />
            <Route exact path="/vertexInfluenceOverTime" component={VertexInfluenceComponent} />
            <Route exact path="/TGraphInstantiation" component={TGraphInstantiationComponent} />
            <Route exact path="/graphCentralityOverTime" component={GraphCentralityComponent} />
            <Route exact path="/publications" component={PublicationsComponent} />
          </Switch>
        </MenuComponent>
      </HashRouter>
      </Footer>

    );
  }
}

export default App;
