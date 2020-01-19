import React from 'react';
import {Link} from 'gatsby'
import Layout from '../Components/Layout';
import Head from '../Components/Head'
const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>Page Not Found</h1>
            <Link to="/"> Back Home</Link>            
        </Layout>
    );
};

export default NotFound;