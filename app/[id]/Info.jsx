import React from "react";
import uuid from "react-uuid";

export default function Info({ crochet }) {
  return (
    <section className="bg-custom2 py-5">
      <h1 className="text-center head_text mb-3 pb-5 border-b-2 border-custom4">
        {crochet.name}
      </h1>
      <h2 className="text-center font-bold text-xl">
        {crochet.price} <span className="text-sm">({crochet.size})</span>
      </h2>
      <h2 className="text-center font-bold text-lg">{crochet.timetomake}</h2>
      <div className="m-5">
        <div className="text-center justify-center justify-items-center mb-5 max-w-2xl m-auto">
          {crochet.text.map((m, index) => (
            <p key={index}>{m}</p>
          ))}
        </div>

        <div className="max-w-md m-auto">
          {crochet.colors.map((m, index) => (
            <div
              key={uuid()}
              className="grid grid-cols-2 gap-10 border-2 border-custom4 p-5 mb-2"
            >
              {m.title}
              <div className="grid grid-cols-2">
                <div
                  style={{ backgroundColor: m.color }}
                  className="w-5 h-5 rounded-full m-auto"
                ></div>
                - {m.color}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
