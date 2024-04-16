"use client";
import React from "react";
import { Rings } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <Rings
        visible={true}
        height="150"
        width="150"
        color="#e11d48"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
