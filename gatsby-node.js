const path = require('path')
// I use onCreateNode if i want to fetch the slug from the local server 
// module.exports.onCreateNode = ({node, actions}) =>{
//     const {createNodeField} = actions
//     if(node.internal.type === 'MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/template/blogs.js')
    const res = await graphql(`
    query{
      allContentfulBlogPost {
          edges {
            node{
                slug
            }
          }
        }
      }
    `)
    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component:blogTemplate,
            path:`/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    });
}

