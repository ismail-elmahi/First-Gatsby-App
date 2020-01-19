import React from "react"
import {Link} from "gatsby";
import Layout from "../Components/Layout";
import Head from '../Components/Head'
const IndexPage = () =>{
    return (
        <div>
            <Layout >
                <Head title="home"/>
            <h1>Hello!</h1>
            <h2>I am Ismail frontend developer from casablanca</h2>
            <p>Do you need a developer ? <Link to="/contact">Text me!</Link></p>
            </Layout>
        </div>
    )
}

export default IndexPage;