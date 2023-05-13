/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Button, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const submit = async (e) => {
  e.preventDefault();
  const dataMail = {
    email: email.value,
    name: e.target.name.value,
    desc: e.target.desc.value,
  };
  console.log(dataMail);
  const response = await fetch("/api/mailer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataMail),
  });
  if (response.ok) {
    console.log("yes");
  } else {
    console.log(response.statusText);
  }
};

export default function emailPage() {
  const { data: session } = useSession();
  const [email, setEmail] = useState();
  useEffect(() => {
    setEmail(session?.user?.email);
  }, [session]);

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
