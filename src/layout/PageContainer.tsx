import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return <div style={{ margin: "10px 10px" }}>{children}</div>;
};

export default PageContainer;
