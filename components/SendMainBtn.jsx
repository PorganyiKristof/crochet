"use client";
import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

export default function SendMainBtn() {
  const { push } = useRouter();
  return (
    <div className="w-full mt-10 items-center text-center p-1 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500">
      <Button
        variant="contained"
        sx={{ color: "white", margin: "auto" }}
        onClick={() => push("/email")}
      >
        Send Custom Email
      </Button>
    </div>
  );
}
