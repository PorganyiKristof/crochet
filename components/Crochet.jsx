"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Crochet({ crochet }) {
  return (
    <Link
      href={"/"}
      className="grid grid-cols-2 bg-custom2 rounded-xl overflow-hidden group"
    >
      <Image
        className="w-max h-auto object-scale-down rounded-xl group-hover:scale-150 ease-in-out transition duration-500 delay-100"
        src={crochet.img[0]}
        alt={crochet.name}
        width={500}
        height={200}
      />
      <div className="text-center flex justify-center items-center m-5 border-2 border-custom3 rounded-xl">
        <div>
          <h1>{crochet.name}</h1>
          <h2>{crochet.price}</h2>
          <div>{crochet.timetomake}</div>
        </div>
      </div>
    </Link>
  );
}
