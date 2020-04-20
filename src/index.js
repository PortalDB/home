import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Footer';

import './App.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'), 
  <div>
      <h1>This research is supported by <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1750179"> NSF CAREER 1750179 </a>  "Querying Evolving Graphs".
</h1>
    </div>
  
  );
registerServiceWorker();
