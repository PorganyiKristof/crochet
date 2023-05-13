"use client";
import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

export default function SendMainBtn() {
  const { push } = useRouter();
  return (
    <div className="custom_gradient2 w-full content-center text-center mt-10 p-1">
      <div className="w-60 m-auto">
        <Button
          variant="contained"
          sx={{
            color: "white",
            position: "relative",
            margin: "auto",
            "&:hover": {
              backgroundColor: "var(--mostused)",
              color: "var(--deepest)",
            },
          }}
          onClick={() => push("/email")}
        >
          Send Custom Email
        </Button>
      </div>
    </div>
  );
}
