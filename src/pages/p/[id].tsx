import { NextPage } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

import Layout from "../../components/MyLayout";

const Post: NextPage<{}> = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
      `}
        />
      </div>
    </Layout>
  );
};

export default Post;
