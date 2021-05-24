
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/reset.less';
import App from './App.js';
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);