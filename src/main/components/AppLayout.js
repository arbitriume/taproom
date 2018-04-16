import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import { Link } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { LoginForm } from "./LoginForm";
import Paper from "material-ui/Paper";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

//import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

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
 * Creates the Contact Us page.
 *
 * @function
 */
const ContactPage = () => (
    <div className = "bp--login-wrapper">
        <Paper className="bp--page-content" style={style} zdepth={3} rounded={"false"}>
            <ContactForm/>
        </Paper>
    </div>);

/**
 * Creates the Login/Sign-up page.
 *
 * @function
 */
const LoginPage = () => (
    <div className = "bp--login-wrapper">
        <Paper className="bp--page-content" style={style} zdepth={3} rounded={"false"}>
            <LoginForm/>
        </Paper>
    </div>);

const Home = createPage;
const Features = createPage;
const Help = createPage;
const News = createPage;
const Contact = ContactPage;
const LogIn = LoginPage;

function ClippedDrawer(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap>
                        Brewyah
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    <Link to="/">
                        <ListItem button>
                            <ListItemText primary="Home"/>
                        </ListItem>
                    </Link>
                    <Link to="/features">
                        <ListItem button >
                            <ListItemText primary="Features"/>
                        </ListItem>
                    </Link>
                    <Link to="/help">
                        <ListItem button >
                            <ListItemText primary="Help"/>
                        </ListItem>
                    </Link>
                    <Link to="/news">
                        <ListItem button >
                            <ListItemText primary="News"/>
                        </ListItem>
                    </Link>
                    <Link to="/contact">
                        <ListItem button >
                            <ListItemText primary="Contact"/>
                        </ListItem>
                    </Link>
                    <Link to="/login">
                        <ListItem button >
                            <ListItemText primary="Log In"/>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            {/* Content */}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/features" component={Features}/>
                <Route path="/help" component={Help}/>
                <Route path="/news" component={News}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={LogIn}/>
            </Switch>
        </div>
    );
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClippedDrawer);