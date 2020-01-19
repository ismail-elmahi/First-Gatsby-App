import React from 'react';
import { graphql , useStaticQuery} from "gatsby";
import footerStyle from './Footer.module.scss'
const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    return (
        <footer className={footerStyle.footer}>
            <h2>Created by {data.site.siteMetadata.author} 2020</h2>
        </footer>
    );
};

export default Footer;