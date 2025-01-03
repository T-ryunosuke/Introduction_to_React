import { add } from "./add";

import React from "react";

const Example = () => {
  import("./add").then(module => {
    console.log(module)
  });
  console.log(add(1,2));
};

export default Example;
