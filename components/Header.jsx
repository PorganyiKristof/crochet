"use client";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";

export default function Header() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <nav className="w-full">
      <div></div>
      {session ? (
        <div className="w-full">
          <Avatar
            alt={session.user.name}
            src={session.user.image}
            sx={{
              width: 50,
              height: 50,
              position: "absolute",
              top: 0,
              right: 0,
              padding: 5,
            }}
          />
          {/* <Button onClick={() => signOut()} variant="outlined">
            Sign out
          </Button> */}
        </div>
      ) : (
        <div>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      )}
    </nav>
  );
}
