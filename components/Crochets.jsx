import React, { Suspense } from "react";
import { data } from "@database/data.jsx";
import Crochet from "./Crochet";
import uuid from "react-uuid";
import styles from "@styles/loaderblock.module.css";

export default function Crochets() {
  return (
    <div className="bg-custom2 min-h-screen pb-20">
      <div className="pt-5">
        <h1 className="head_text text-center mb-20 mt-0 md:w-3/5 m-auto md:pt-2">
          If you like my creations just in a few steps you can order one!
        </h1>
        <div className="w-screen grid grid-cols-fluid gap-x-5 gap-y-10 md:m-auto md:w-5/6 ">
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
