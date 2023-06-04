"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function EmailToUser() {
  const [email, setEmail] = useState();
  const [title, setTitle] = useState();

  const submit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <form onSubmit={submit} className="flex flex-col w-2/5 m-auto">
        <fieldset className="text-center flex flex-col gap-2 md:flex-row">
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-2"
            variant="outlined"
            required
          />
          <TextField
            id="title"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="my-2"
            variant="outlined"
            required
          />
        </fieldset>
        <TextField
          id="desc"
          required
          label="Description"
          multiline
          maxRows={20}
          sx={{
            borderRadius: "15px 15px 0 0",
          }}
          variant="filled"
        />
      </form>
    </div>
  );
}
