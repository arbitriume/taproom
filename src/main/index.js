import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './components/NavBar';
import MenuIcon from 'material-ui-icons/Menu';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles.css';

const createPage = name => () => (<div><h2>{name}</h2></div>);

const Home = createPage("Home");
const Features = createPage("Features");
const OurTeam = createPage("Our Team");
const News = createPage("News");
const Contact = createPage("Contact");
const LogIn = createPage("Log In");

/**
 * The UI Component representing the navigation menu bar that spans the top of the page.
 *
 * @class
 */
class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="bp--nav-container">
                    <button className="bp--hamburger-button">
                        <MenuIcon key="foo" className="material-icons md-24 md-light"/>
                    </button>
                    <div className="bp--navpage-container">
                        <a href={"#"} className="bp--company-logo" key={1}>
                            {"Company Logo"}
                        </a>
                        <NavBar />
                    </div>
                </div>
                <Router>
                    <div>
                        <div className="bp--nav-container">
                            <button className="bp--hamburger-button">
                                <MenuIcon key="foo" className="material-icons md-24 md-light"/>
                            </button>
                            <div className="bp--navpage-container">
                                <a href={"#"} className="bp--company-logo" key={1}>
                                    {"Company Logo"}
                                </a>
                                <NavBar />
                            </div>
                        </div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/features" component={Features}/>
                        <Route path="/our-team" component={OurTeam}/>
                        <Route path="/news" component={News}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/log-in" component={LogIn}/>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

