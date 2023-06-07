import client from "@/lib/Contentful/client";
import Image from "next/image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const Details = ({ post }) => {
  const { title, longsummary, coverImage, author } = post.fields;
  const options = {
    renderMark: {},
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file } = node.data.target.fields;
        const imageUrl = "https:" + file.url;

        return (
          <Image
            src={imageUrl}
            width={300}
            height={300}
            className="grid place-items-center"
          />
        );
      },
    },
  };

  const richTextField = longsummary;
  const renderedContent = documentToReactComponents(richTextField, options);

  return (
    <div className="grid place-items-center">
      <Image
        src={"https:" + coverImage.fields.file.url}
        width={700}
        height={300}
        className="object-cover object-center rounded-2xl mt-5"
      />
      <span className="text-xl font-bold m-12">{title}</span>
      <span className="px-[150px]">{renderedContent}</span>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });
  return {
    props: {
      post: res.items[0],
    },
  };
};

export default Details;
