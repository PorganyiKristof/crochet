"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const { data: session } = useSession();
  const { push } = useRouter();
  return (
    <nav className="grid grid-cols-4 gap-5 z-30 items-center md:absolute top-0 right-0 pt-4 mx-5 md:grid-cols-1 ">
      {session ? (
        <div className="col-span-3 grid grid-cols-2 gap-5 md:hidden">
          <Button variant="outlined" onClick={() => push("/")}>
            Home
          </Button>

          <Button onClick={() => signOut()} variant="outlined">
            Sign Out
          </Button>
        </div>
      ) : (
        <div className="col-span-4 grid grid-cols-2 gap-5 md:hidden">
          <Button variant="outlined" onClick={() => push("/")}>
            Home
          </Button>

          <Button onClick={() => signIn("google")} variant="outlined">
            Sign In
          </Button>
        </div>
      )}
      {session ? (
        <div className="items-center justify-center text-center">
          <div className="md:flex flex-row-reverse gap-3 hidden">
            <Image
              src={session.user.image}
              width={40}
              height={40}
              alt={session.user.name}
              className="rounded-full m-auto"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />

            <div className="bg-gray-700 rounded-lg justify-center self-center">
              <Button
                onClick={() => push("/")}
                variant="text"
                sx={{ color: "white", justifyContent: "center" }}
              >
                Home
              </Button>
            </div>
            {toggleDropDown && (
              <div className="bg-gray-700 rounded-lg justify-center self-center">
                <Button
                  onClick={() => signOut()}
                  variant="text"
                  sx={{ color: "white", justifyContent: "center" }}
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
          <div className="md:hidden">
            <Image
              src={session.user.image}
              width={40}
              height={40}
              alt={session.user.name}
              className="rounded-full m-auto"
            />
          </div>
        </div>
      ) : (
        <div className="md:flex hidden">
          <Button onClick={() => signIn()} variant="outlined">
            Sign In with Google
          </Button>
        </div>
      )}
    </nav>
  );
}
