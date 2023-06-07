import client from "@/lib/Contentful/client";

import PostCard from "@/components/posts/PostCard";

const index = ({ posts }) => {
  return (
    <div className="grid place-items-center">
      <ul>
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default index;
export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: "post" });

  return {
    props: { posts: res.items, revalidate: 60 },
  };
};
