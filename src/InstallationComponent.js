import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Container, Header, Segment } from 'semantic-ui-react'

const InstallationComponent = () => (
  <Container>
    <Header size="huge" color="black" block>
      <img src="portal.png" />
      Installation Instructions
    </Header>
    <Segment>
      <Header size="huge" dividing>Artifacts</Header>
      <Container>
        Portal is written in Scala, here are the jars:
        <ul>
          <li>
            <a href="https://portaldb.github.io/api/portal_2.11-1.0.jar">Standard Jar</a>
          </li>
          <li>
            <a href="https://portaldb.github.io/api/portal-assembly-1.0.jar">Assembled Jar</a>
          </li>
        </ul>
        Ultimately, we will host our artifacts in a well-known, hosted repository, so they can be included in projects without the need to download jars manually.
      </Container>
      <Header size="small" dividing>A note on dependencies...</Header>
      <Container>
        Since portal is built on top of <a href="https://spark.apache.org/">Apache Spark</a>, most of it's <a href="https://github.com/PortalDB/Portal/blob/master/build.sbt">dependencies</a> are marked as provided,
        as we expect users to configure their spark runtime as they see fit.  The only dependency that lies outside of the spark ecosystem is <a href="https://mvnrepository.com/artifact/it.unimi.dsi/fastutil/7.0.11">fastutil</a>.
        Thus, we provide both a standard jar and an <a href="https://github.com/sbt/sbt-assembly">assembled</a> one that includes this fastutil dependency.
        <br/><br/>
        To use your downloaded jar in an sbt project, put it in the lib directory of your project, as explained in the sbt documentation <a href="http://www.scala-sbt.org/0.13/docs/Library-Dependencies.html">here</a>.
      </Container>
      <Header size="huge" dividing>Try it with Docker</Header>
      <Container>
        For those who'd like to try Portal out without too much installation hassle, we provide a docker image that has Portal installed alongside Spark and <a href="https://zeppelin.apache.org/">Apache Zeppelin</a>.
        The image comes pre-loaded with notebooks that parallel our <a href="/githubPagesReact/#/examples">examples</a>.  You can fire up this container to run and edit those, or even create your own Portal programs to see how things work.
        <ol>
          <li>Download the Docker Client: <a href="https://www.docker.com/community-edition#/download">Docker Downloads</a></li>
          <li>Pull our docker image: <SyntaxHighlighter lang="bash">docker pull portaldb/zeppelin:latest</SyntaxHighlighter></li>
          <li>Run the container: <SyntaxHighlighter lang="bash">docker run -p 8080:8080 portaldb/zeppelin:latest</SyntaxHighlighter></li>
          <li>Go to <a href="http://localhost:8080">http://localhost:8080</a> on your machine.</li>
        </ol>
      </Container>
      <Header size="small" dividing>A note on Docker...</Header>
      <Container>
        If you don't know anything about Docker containers, especially how <a href="https://docs.docker.com/engine/admin/volumes/volumes/">volumes</a> work, you should do some reading if you plan on saving any of the code you write in this environment.
        Here's a sample docker-compose file that might help you out: <a href="https://portaldb.github.io/api/docker-compose.yml">docker-compose.yml</a>
        <br/>
        Drop that in a directory, and start up with this to make sure your changes get saved when you stop the container:
        <SyntaxHighlighter lang="bash">
          docker-compose up portal
        </SyntaxHighlighter>
      </Container>
    </Segment>
  </Container>
);

export default InstallationComponent;
