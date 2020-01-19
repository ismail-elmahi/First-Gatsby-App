import React from 'react';
import Layout from '../Components/Layout';
import {graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from '../Components/Head'
 export const query = graphql`
query(
  $slug: String!
){
  contentfulBlogPost(
    slug:{
      eq:$slug
    }
  ){
    title
    publishedDate(formatString:"MMM Do. YYYY")
    body {
      json
    }
  }
}
`;


  

const blogs = (props) => {
   const options = {
     renderNode:{
       "embedded-asset-block": (node) =>{
         const alt = node.data.target.fields.title['en-US'];
         const url = node.data.target.fields.file['en-US'].url ;
          
          return <img src={url} alt={alt} />
       }
     }
   }
   
    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title}/>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <h2>{props.data.contentfulBlogPost.publishedDate}</h2>
        {/* here how we show the content when we have a markdown file in our local server */}
        {/* <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div> */}
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        
        </Layout>
    );
};

export default blogs;