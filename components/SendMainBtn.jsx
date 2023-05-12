"use client";
import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

export default function SendMainBtn() {
  const { push } = useRouter();
  return (
    <div className="w-full content-center text-center mt-10 p-1 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500">
      <div className="w-60 m-auto">
        <Button
          variant="contained"
          sx={{ color: "white", position: "relative", margin: "auto" }}
          onClick={() => push("/email")}
        >
          Send Custom Email
        </Button>
      </div>
    </div>
  );
}
