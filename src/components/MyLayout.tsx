import { NextPage } from "next";

import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={layoutStyle}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
