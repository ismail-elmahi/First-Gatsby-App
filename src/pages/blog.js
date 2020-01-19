import React from 'react';
import Layout from "../Components/Layout"
import {Link, graphql , useStaticQuery} from "gatsby";
import blogStyle from './blog.module.scss';
import Head from '../Components/Head'
const BlogPage = (props) => {
   const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost (
        sort:{
          fields:publishedDate
          order: DESC
        }
      ){
        edges{
          node{
            title
            slug
            id
            publishedDate(formatString:"MMMM Do. YYYY")
          }
        }
      }
    }
    `)
  
    return (
        <div>
            <Layout >
              <Head title="blog"/>
            <h1>My blog</h1>
             <ol className={blogStyle.blog}>
            {data.allContentfulBlogPost.edges.map((edge) => {
                return (
                <li className={blogStyle.links}>
                <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
                <p>{edge.node.publishedDate}</p> 
                </li>
                )
            })}
            </ol>
            </Layout>
        </div>
    )
}
export default BlogPage;