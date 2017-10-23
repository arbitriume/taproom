import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './components/NavBar';

import style from 'styles.css';

class WelcomePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
            </div>
        );
    }
}

ReactDOM.render(<WelcomePage />, document.getElementById('app'));

