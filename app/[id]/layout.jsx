import React from "react";
import Swiper from "./Swiper";
import { data } from "@database/data.jsx";
import Form from "./Form";
import Info from "./Info";

export default function layout({ children, params }) {
  const { id } = params;
  const crochet = data.crochets.filter((f) => f.id === id)[0];
  return (
    <section className="w-full min-h-screen absolute top-0">
      <Swiper />
      {children}
      <Info crochet={crochet} />
      <Form />
      feje bubija :{" "}
      <input type="color" name="" id="" className="rounded-lg w-10 h-10" />
    </section>
  );
}
