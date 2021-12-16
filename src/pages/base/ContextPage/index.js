import React, { useState } from "react";
import { ThemeProvider, UserProvider } from "./Context";
import ConsumerPage from "./ConsumerPage";
import UseContextPage from "./UseContextPage";

const ContextPage = () => {
  const [value] = useState({
    theme: {
      themeColor: "red",
    },
    user: { name: "xiaoping" },
  });

  return (
    <div>
      <h3>ContextPage</h3>
      <ThemeProvider value={value.theme}>
        <UserProvider value={value.user}>
          <ConsumerPage />
          <UseContextPage />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
};

export default ContextPage;
