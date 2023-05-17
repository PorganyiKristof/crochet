"use client";
import React, { useState } from "react";
import { colors } from "@database/colors.jsx";

export default function Color({ colorAttr }) {
  const [color, setColor] = useState(colorAttr);
  const [toggle, setToggle] = useState(false);
  console.log(color);
  return (
    <div className="w-full relative">
      <div
        style={{ backgroundColor: color.color }}
        className="w-12 h-8 m-auto rounded-lg border-4 border-custom4"
        onClick={() => setToggle((prev) => !prev)}
      ></div>
      {!!toggle && (
        <div className="absolute w-52 h-52 bg-custom3 rounded-2xl grid grid-cols-3 z-10 border-custom4 border-4">
          {colors.map((datacolor, index) => {
            return (
              <div
                key={`${datacolor}-${index}`}
                style={{ backgroundColor: datacolor }}
                className="w-12 h-8 m-auto rounded-lg border-4 border-custom4"
                onClick={() => setToggle(false)}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
}
