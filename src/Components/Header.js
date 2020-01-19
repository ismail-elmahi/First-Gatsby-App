import React from 'react';
import {Link, graphql , useStaticQuery} from "gatsby";
import classes from "./Header.module.scss"
const Header = () => {

    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `)

    return (
        <header>
            <h1>
                <Link to="/">
                  {data.site.siteMetadata.title}
                </Link>
            </h1>
            <ul className={classes.navLink}>
                <li><Link activeClassName={classes.active} to="/">Home</Link></li>
                <li><Link activeClassName={classes.active} to="/about">About</Link></li>
                <li><Link activeClassName={classes.active}  to="/blog">Blog</Link></li>
                <li><Link activeClassName={classes.active} to="/contact">Contact</Link></li>
            </ul>
        </header>
    );
};

export default Header;