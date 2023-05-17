"use client";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { colors as colorsFromData } from "@/database/colors.jsx";

export default function Form({ colors }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pickedColors, setPickedColors] = useState(colors);
  const [toggle, setToggle] = useState(false);
  const [selectedColorToggle, setSelectedColorToggle] = useState(0);

  return (
    <section className="w-4/5 md:w-96 m-auto min-h-screen">
      <h1 className="head_text text-center mb-5">
        Order one with your attributes
      </h1>
      <form action="" className="flex flex-col ">
        <fieldset className="text-center flex flex-col gap-2 md:flex-row">
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText="We'll never share your email."
            className="my-2"
            variant="outlined"
            required
          />
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            helperText="Just for the email."
            className="my-2"
            variant="outlined"
            required
          />
        </fieldset>
        <label className="text-center">
          Set the colors you would like to be in the crochet
        </label>
        <div className={`flex p-2 bg-custom3`}>
          {pickedColors.map((color, index) => (
            <div key={`${index}-${color}`} className="w-full relative">
              <div
                style={{ backgroundColor: color.color }}
                className="w-12 h-8 m-auto rounded-lg border-4 border-custom4"
                onClick={() => {
                  setToggle((prev) => !prev);
                  setSelectedColorToggle(index);
                }}
              ></div>
            </div>
          ))}
        </div>
        {!!toggle && (
          <div className="absolute right-1/2 translate-x-1/2 w-60 h-72 bg-custom3 rounded-2xl grid grid-cols-3 z-10 border-custom4 border-4">
            {colorsFromData.map((datacolor, index) => {
              return (
                <div
                  key={`${datacolor}-${index}`}
                  style={{ backgroundColor: datacolor }}
                  className="w-12 h-8 m-auto rounded-lg border-4 border-custom4"
                  onClick={() => {
                    setToggle(false);
                    console.log(pickedColors);
                    let helpColors = [...pickedColors];
                    console.log(helpColors);
                    helpColors[selectedColorToggle] = {
                      title: helpColors[selectedColorToggle].title,
                      color: datacolor,
                    };
                    setPickedColors((prev) => [...helpColors]);
                  }}
                ></div>
              );
            })}
          </div>
        )}
        <TextField
          id="desc"
          required
          label="Please enter you`re description or question!"
          multiline
          maxRows={20}
          sx={{
            backgroundColor: "var()",
            borderRadius: "15px 15px 0 0",
          }}
          variant="filled"
        />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </section>
  );
}
