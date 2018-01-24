// crappy solution to solve the whole create-react-app with project level github pages and routing problem
const urlRoot = "/githubPagesReact/#";

const getUrl = (location) => `${urlRoot}/${location}`;

export default getUrl
