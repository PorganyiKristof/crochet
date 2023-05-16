"use client";
import Color from "@components/Color";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ colors }) {
  const [email, setEmail] = useState("");

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
          {colors.map((color, index) => (
            <Color key={index} colorAttr={color} />
          ))}
        </div>
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
