import { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/MyLayout";

const PostLink: NextPage<{ title: string }> = ({ title }) => {
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const Index: NextPage<{}> = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Lern Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async ({ req }): Promise<{ userAgent: string }> => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Index;
