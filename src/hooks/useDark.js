import React, { useContext } from "react";
import { DarkCtx } from "../context/darkCtx";

const useDark = () => {
  return useContext(DarkCtx);
};

export default useDark;
