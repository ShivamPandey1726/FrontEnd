import React from "react";
import {Route, Switch} from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import ServicePage from "./ServicePage";
const WebsiteRouter = () =>
{
    return(
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/service" component={ServicePage}/>
                <Route path="/contact" component={ContactPage}/>
            </Switch>
        </>
    );
}
export default WebsiteRouter;