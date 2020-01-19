import React from 'react';
import Footer from './Footer';
import Header from './Header'
import classes from './Layout.module.scss'
const Layout = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
            <Header />
            {props.children}
            <Footer />
            </div>
        </div>
    );
};
export default Layout;