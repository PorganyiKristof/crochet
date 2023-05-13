import React from "react";
import { data } from "@database/data.jsx";
import Crochet from "./Crochet";

export default function Crochets() {
  return (
    <div className="mt-10">
      <h1 className="head_text text-center mb-20 md:w-3/5 m-auto">
        If you like my creations just in a few steps you can order one!
      </h1>
      <div className="w-screen grid grid-cols-fluid gap-5 md:m-auto md:w-3/4 ">
        {data.crochets.map((crochet) => (
          <Crochet key={crochet.id} crochet={crochet} />
        ))}
      </div>
    </div>
  );
}
