"use client";
import { Button, Slider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors as colorsFromData } from "@/database/colors.jsx";
import uuid from "react-uuid";
import { useSession } from "next-auth/react";
import EmailIsSending from "@components/EmailIsSending";
const marks = [
  {
    value: 10,
    label: "6 mm",
    label2: "Skinny",
  },
  {
    value: 30,
    label: "8 mm",
    label2: "Name",
  },
  {
    value: 60,
    label: "12 mm",
    label2: "name",
  },
  {
    value: 100,
    label: "16 mm",
    label2: "Bulky",
  },
];
function valueLabelFormat(value) {
  const res = marks.filter((mark) => {
    if (mark.value === value) {
      return mark;
    }
  })[0];
  console.log(res);
  return res.label2;
}
export default function Form({ colors }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [range, setRange] = useState();
  const [emilaSending, setEmailSending] = useState(true);
  const [pickedColors, setPickedColors] = useState(colors);
  const [toggle, setToggle] = useState(false);
  const [selectedColorToggle, setSelectedColorToggle] = useState(0);
  const { data: session } = useSession();
  useEffect(() => {
    setEmail(session?.user?.email);
  }, [session]);
  const submit = async (e) => {
    e.preventDefault();
    setEmailSending(true);
    const emailData = {
      email: email,
      name: name,
      colors: JSON.stringify(pickedColors),
      desc: text,
      route: "dynamicpage",
      yarn: range,
    };
    console.log(emailData);
    const response = await fetch("/api/mailer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });
    if (response.ok) {
      console.log(response.statusText);
      setEmailSending(false);
    } else {
      console.log(response.statusText);
      setEmailSending(false);
    }
  };

  return (
    <div className="relative">
      <section className="w-4/5 md:w-96 m-auto min-h-screen">
        <h1 className="head_text text-center mb-5 !mt-0 pt-5">
          Order one with your attributes
        </h1>
        <form onSubmit={submit} className="flex flex-col ">
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

          <label className="text-center">Set the width of the yarn</label>

          <Slider
            aria-label="Restricted values"
            defaultValue={100}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={(e) => setRange(e)}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
            color="secondary"
            className="w-2/3 m-auto mb-6"
          />
          <label className="text-center m-3">
            Set the colors you would like to be in the crochet
          </label>
          <div className={`flex p-2 bg-custom3`}>
            {pickedColors.map((color, index) => (
              <div key={uuid()} className="w-full relative">
                <div
                  role="button"
                  style={{ backgroundColor: color.color }}
                  className="w-12 h-8 m-auto rounded-lg border-4 border-custom4 hover:scale-110 transition-all duration-150"
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
                    key={uuid()}
                    style={{ backgroundColor: datacolor }}
                    className="w-12 h-8 m-auto rounded-lg border-4 border-custom4 hover:scale-110 transition-all duration-150"
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
            value={text}
            onChange={(e) => setText(e.target.value)}
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
      {emilaSending ? <EmailIsSending /> : <></>}
    </div>
  );
}
