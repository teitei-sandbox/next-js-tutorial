import { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/MyLayout";

const PostLink: NextPage<{ id: string }> = ({ id }) => {
  return (
    <li>
      <Link href="/p/[id]" as={`/p/${id}`}>
        <a>{id}</a>
      </Link>
    </li>
  );
};

const Index: NextPage<{}> = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async ({ req }): Promise<{ userAgent: string }> => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Index;
