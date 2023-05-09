import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"
import Head from "next/head"
function AllPostsPage(props){
    const{posts}=props
return(
    <>
     <Head>
      <title>all posts</title>
      <meta name="description" content="show all posts"/>
    </Head>
    <AllPosts posts={posts}/>
    </>
   
)
}

export function getStaticProps(){
    const allPosts=getAllPosts();
    return{
        props:{
            posts:allPosts
        }
    }
}

export default AllPostsPage