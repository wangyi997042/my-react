import React from "react";

import "./index.css";
import ContextPage from "./ContextPage";
import AntdFormPage from "./AntdFormPage"
import Test from "./AntdFormPage/test"
import MyRcForm from "./MyRcForm"
import MyRcFieldForm from "./MyRcFieldForm"

function Base() {
  return (
    <div className='base-page'>
      {/* <ContextPage /> */}
      {/* <AntdFormPage /> */}
      <Test />
      {/* <MyRcForm /> */}
      {/* <MyRcFieldForm /> */}
    </div>
  );
}

export default Base;
