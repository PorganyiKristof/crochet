/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Button, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function emailPage() {
  const { data: session } = useSession();
  console.log(session);
  const [email, setEmail] = useState();
  useEffect(() => {
    setEmail(session?.user?.email);
  }, [session]);

  const submit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.email.value);
    const emailData = {
      email: email,
      name: e.target.name.value,
      desc: e.target.desc.value,
    };
  };
  return (
    <section>
      <form onSubmit={submit} className="flex flex-col">
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
        <TextField
          id="desc"
          required
          label="Please enter you`re description or question!"
          multiline
          maxRows={20}
          variant="filled"
        />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </section>
  );
}
