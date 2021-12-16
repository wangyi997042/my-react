import React, { useContext } from "react";
import { ThemeConsumer, UserConsumer } from "./Context";

const ConsumerPage = (props) => {
  const { name } = useContext(UserConsumer);
  console.log("consumer====", props, name);

  return <div>ConsumerPage{name}</div>;
};

export default ConsumerPage;
