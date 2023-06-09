import client from "@/lib/Contentful/client";

import PostCard from "@/components/posts/PostCard";

const index = ({ posts }) => {
  return (
    <div className="flex flex-wrap justify-center  ">
      {posts.map((post, i) => (
        <div key={i * 0} className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <PostCard key={i} post={post} />
        </div>
      ))}
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
