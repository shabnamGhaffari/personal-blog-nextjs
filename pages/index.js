import FeaturedPosts from "../components/home-page/featured-posts"
import Hero from "../components/home-page/hero"
import Head from "next/head"
import { getFeaturedPosts } from "../lib/posts-util"

function HomePage(props){
 const {posts}=props
  return(
    <>
    <Head>
      <title>Shabnam's Blog</title>
      <meta name="description" content="programming and web developements"/>
    </Head>
      <Hero/>
      <FeaturedPosts posts={posts}/>
    </>
  )


}
export async function getStaticProps(){
  const featuredPosts=getFeaturedPosts();

  return{
    props:{
      posts:featuredPosts
    }
  }
}
export default HomePage