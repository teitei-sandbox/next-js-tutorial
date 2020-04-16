import { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/MyLayout";

export type Post = {
  id: string;
  title: string;
};

const getPosts = (): Post[] => {
  return [
    {
      id: "hello-nextjs",
      title: "Hello Next.js",
    },
    {
      id: "leran-nextjs",
      title: "Leran Next.js is awesome",
    },
    {
      id: "deploy-nextjs",
      title: "Deploy Apps with ZEIT",
    },
  ];
};

const PostLink: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <li key={post.id}>
      <Link href="/p/[id]" as={`/p/${post.id}`}>
        <a>{post.title}</a>
      </Link>
      <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
          font-family: "Arial";
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </li>
  );
};

const Index: NextPage = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map((post) => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
