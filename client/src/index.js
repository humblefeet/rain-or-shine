import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import registerServiceWorker from './registerServiceWorker';
import unregisterServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
unregisterServiceWorker();
