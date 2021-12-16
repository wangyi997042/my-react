import React, { useContext } from "react";
import { ThemeConsumer } from "./Context";

const UseContextPage = () => {
  const { themeColor } = useContext(ThemeConsumer);

  return <div style={{ color: themeColor }}>UseContextPage</div>;
};

export default UseContextPage;
