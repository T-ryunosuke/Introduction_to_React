"use client"

import { useEffect, useState } from "react";

export default function SSR() {
  const [state, setState] = useState(undefined);
  useEffect(() => {
    setState("CL");
  }, []);
  return (
    <>
      <div>{state}</div>
    </>
  );
}
