import { NextPage } from "next";
import Header from "./../components/Header";

const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <div>
      <Header />
      <p>Hello Next.js World! - userAgent: {userAgent}</p>
    </div>
  );
};

Index.getInitialProps = async ({ req }): Promise<{ userAgent: string }> => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Index;
