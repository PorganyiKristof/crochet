import Image from "next/image";
import React from "react";

export default function Swiper({ images }) {
  return (
    <div className="w-full">
      {images.map((image) => {
        return (
          <Image
            key={image}
            src={image}
            width={"auto"}
            height={"auto"}
            alt="asd"
            className="h-1/2 w-auto object-scale-down"
          />
        );
      })}
    </div>
  );
}
