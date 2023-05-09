import PostContent from "../../components/posts/post-detail/post-content";
import {getPostData, getPostsFiles} from "../../lib/posts-util";
import Head from "next/head";
function PostDetailPage(props) {
  const {post} = props;
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export function getStaticProps(context) {
  const {params} = context;
  const {slug} = params;

  const post = getPostData(slug);
  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}
export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map(postFile => postFile.replace(/\.md$/, ""));
  return {
    paths: slugs.map(slug => ({params: {slug}})),
    fallback: false,
  };
}

export default PostDetailPage;
