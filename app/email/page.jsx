/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import EmailIsSending from "@components/EmailIsSending";
import { Button, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function emailPage() {
  const { data: session } = useSession();
  const [email, setEmail] = useState();
  const [email_error, setEmail_Error] = useState(false);
  const { push } = useRouter();
  const [emilaSending, setEmailSending] = useState(false);

  useEffect(() => {
    setEmail(session?.user?.email);
  }, [session]);
  const submit = async (e) => {
    e.preventDefault();
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
      setEmail_Error(true);
      return false;
    }
    setEmailSending(true);
    const dataMail = {
      email: email,
      name: e.target.name.value,
      desc: e.target.desc.value,
      route: "singlepage",
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
      setEmailSending(false);
      push("/");
    } else {
      console.log(response.statusText);
      setEmailSending(false);
    }
  };
  const emailOnChange = (e) => {
    setEmail(e);
  };

  return (
    <section>
      <form onSubmit={submit} className="flex flex-col">
        <fieldset className="text-center flex flex-col gap-2 md:flex-row">
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(e) => emailOnChange(e.target.value)}
            helperText="We'll never share your email."
            className="my-2"
            variant="outlined"
            {...(!!email_error && { error: true })}
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
      {emilaSending ? <EmailIsSending /> : <></>}
    </section>
  );
}
