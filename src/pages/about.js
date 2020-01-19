import React from 'react';
import {Link} from "gatsby"
import Layout from '../Components/Layout';
import Head from '../Components/Head'
const About = () => {
    return (
        <div>
            <Layout>
                <Head title="about"/>
             <h1>This page for me</h1>
            <p>
                about me : am ismail el mahi frontend developer from morocco
            </p>
            <h2>If you want to see my blogs clicke here <Link to="/blog">Blogs</Link></h2>
            </Layout>
         </div>
    )
}
export default About;