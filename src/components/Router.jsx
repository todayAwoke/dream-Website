
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx'
import Home from '../components/Hero/Hero.jsx'
// import Programs from './components/Services/Services.jsx'
import Title from '../components/title/Title.jsx'
import About from '../components/About/About.jsx'
import Services from '../components/Services/Services.jsx'
import Testimonail from '../components/Testimonials/Testimonail.jsx'
import Contact from '../components/Contacts/Contact.jsx'
import Footer from '../components/footer/Footer.jsx'

const AppRouter = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default AppRouter;