import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Footer';

import './App.css'
import registerServiceWorker from './registerServiceWorker';

class Hello extends React.Component {  
    render() {  
        return <h1>Hello!</h1>;  
    }  
}


ReactDOM.render(<App />,  document.getElementById('root') );
registerServiceWorker();
