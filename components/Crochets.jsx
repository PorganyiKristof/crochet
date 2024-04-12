import React, { Suspense } from "react";
import { data } from "@database/data.jsx";
import Crochet from "./Crochet";
import uuid from "react-uuid";
import styles from "@styles/loaderblock.module.css";

export default function Crochets() {
  return (
    <div className="bg-custom2 h-full px-10">
      <div className="pt-5">
        <h1 className="head_text  text-center mb-20 mt-0 md:w-3/5 m-auto md:pt-2">
          <span className="text-4xl lg:text-6xl">
            If you like my creations just in a few steps you can order one!
          </span>
        </h1>
        <div className="flex flex-col w-fit md:grid grid-cols-fluid gap-5 m-auto md:w-5/6 ">
          {data.crochets.map((crochet) => {
            return (
              <Suspense
                key={uuid()}
                fallback={<span className={styles.loader}></span>}
              >
                <Crochet crochet={crochet} />
              </Suspense>
            );
          })}
        </div>
      </div>
    </div>
  );
}
