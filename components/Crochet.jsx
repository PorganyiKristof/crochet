"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Crochet({ crochet }) {
  return (
    <Link
      href={`/${crochet.id}`}
      className="grid grid-cols-2 bg-slate-200 bg-opacity-30 overflow-hidden group md:rounded-xl"
    >
      <Image
        className="w-max h-auto object-scale-down group-hover:scale-150 ease-in-out transition-all duration-500 delay-100 md:rounded-xl  opacity-0 "
        src={crochet.img.main}
        alt={crochet.name}
        width={500}
        height={200}
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <div className="text-center flex justify-center items-center m-5 border-2 border-custom3 md:rounded-xl">
        <div>
          <h1>{crochet.name}</h1>
          <h2>{crochet.price}</h2>
          <div>{crochet.timetomake}</div>
        </div>
      </div>
    </Link>
  );
}
