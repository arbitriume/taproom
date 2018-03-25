import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./components/NavBar";
import { LoginForm } from "./components/LoginForm";
import MenuIcon from "material-ui-icons/Menu";
import Paper from "material-ui/Paper";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./styles.css";

const style = {
    margin: 20,
    textAlign: "center",
    display: "inline-block",
};

/**
 * Temporary function that will be phased out by more specific page renderings
 *
 * @function
 */
const createPage = () => (
    <div className = "bp--login-wrapper">
        <p>{"Hello!"}</p>
    </div>);

/**
 * Creates the Login/Sign-up page.
 *
 * @function
 */
const createLoginPage = () => (
    <div className = "bp--login-wrapper">
        <Paper style={style} zdepth={3} rounded={"false"}>
            <LoginForm/>
        </Paper>
    </div>);

const Home = createPage;
const Features = createPage;
const OurTeam = createPage;
const News = createPage;
const Contact = createPage;
const LogIn = createLoginPage;

/**
 * The UI Component representing the navigation menu bar that spans the top of the page.
 *
 * @class
 */
export default class Taproom extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                {/*<Router>*/}
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
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/features" component={Features}/>
                            <Route path="/our-team" component={OurTeam}/>
                            <Route path="/news" component={News}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/log-in" component={LogIn}/>
                        </Switch>
                    </div>
                {/*</Router>*/}
            </MuiThemeProvider>
        );
    }
}

