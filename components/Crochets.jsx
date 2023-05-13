import React from "react";
import { data } from "@database/data.jsx";
import Crochet from "./Crochet";

export default function Crochets() {
  return (
    <div className="w-3/4 grid grid-cols-fluid gap-10 mt-20 m-auto">
      {data.crochets.map((crochet) => (
        <Crochet key={crochet.id} crochet={crochet} />
      ))}
    </div>
  );
}
