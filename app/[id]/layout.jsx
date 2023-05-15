import React from "react";
import SwiperPage from "./Swiper";
import { data } from "@database/data.jsx";
import Form from "./Form";
import Info from "./Info";

export default function layout({ children, params }) {
  const { id } = params;
  const crochet = data.crochets.filter((f) => f.id === id)[0];
  return (
    <section className="w-full min-h-screen absolute top-0">
      <SwiperPage images={crochet.img.slider} />
      {children}
      <Info crochet={crochet} />
      <Form />
    </section>
  );
}
