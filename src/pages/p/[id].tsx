import { NextPage } from "next";
import fetch from "isomorphic-unfetch";

import Layout from "../../components/MyLayout";
import { Show } from "./../index";

const Post: NextPage<{ show: Show }> = ({ show }) => {
  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, "")}</p>
      {show.image ? <img src={show.image.medium} /> : null}
    </Layout>
  );
};

Post.getInitialProps = async (context): Promise<{ show: Show }> => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = (await res.json()) as Show;

  return { show };
};

export default Post;
