"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const { data: session } = useSession();
  const { push } = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (
      session?.user?.email === "porganyikristof@gmail.com" ||
      session?.user?.email === "betlehemdorka@gmail.com"
    )
      setIsAdmin(true);
  }, [session]);
  return (
    <nav className="grid grid-cols-4 gap-5 z-30 items-center md:absolute top-0 right-0 pt-4 mx-5 md:grid-cols-1 ">
      {session ? (
        !!isAdmin ? (
          <div className="col-span-3 grid grid-cols-3 gap-5 md:hidden">
            <Button
              variant="outlined"
              sx={{
                border: "1px solid var(--deepest)",
                color: "var(--deepest)",
              }}
              onClick={() => push("/")}
            >
              Home
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid var(--deepest)",
                color: "var(--deepest)",
              }}
              onClick={() => push("/admin/emailToUser")}
            >
              Send Mail to User
            </Button>
            <Button
              onClick={() => signOut()}
              variant="outlined"
              sx={{
                border: "1px solid var(--deepest)",
                color: "var(--deepest)",
              }}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="col-span-3 grid grid-cols-2 gap-5 md:hidden">
            <Button
              variant="outlined"
              sx={{
                border: "1px solid var(--deepest)",
                color: "var(--deepest)",
              }}
              onClick={() => push("/")}
            >
              Home
            </Button>

            <Button
              onClick={() => signOut()}
              variant="outlined"
              sx={{
                border: "1px solid var(--deepest)",
                color: "var(--deepest)",
              }}
            >
              Sign Out
            </Button>
          </div>
        )
      ) : (
        <div className="col-span-4 grid grid-cols-2 gap-5 md:hidden">
          <Button
            variant="outlined"
            sx={{ border: "1px solid var(--deepest)", color: "var(--deepest)" }}
            onClick={() => push("/")}
          >
            Home
          </Button>

          <Button
            onClick={() => signIn("google")}
            sx={{ border: "1px solid var(--deepest)", color: "var(--deepest)" }}
            variant="outlined"
          >
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

            <div className=" rounded-lg justify-center self-center">
              <Button
                onClick={() => push("/")}
                variant="text"
                sx={{
                  color: "white",
                  justifyContent: "center",
                  border: "1px solid var(--deepest)",
                  color: "var(--deepest)",
                }}
              >
                Home
              </Button>
            </div>
            {toggleDropDown && (
              <div className="rounded-lg justify-center self-center gap-2">
                <Button
                  onClick={() => signOut()}
                  variant="text"
                  sx={{
                    color: "white",
                    justifyContent: "center",
                    border: "1px solid var(--deepest)",
                    color: "var(--deepest)",
                  }}
                >
                  Sign Out
                </Button>
                {!!isAdmin && (
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      justifyContent: "center",
                      border: "1px solid var(--deepest)",
                      color: "var(--deepest)",
                      marginLeft: "10px",
                    }}
                    onClick={() => push("/admin/emailToUser")}
                  >
                    Send Mail to User
                  </Button>
                )}
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
        <div className="md:flex gap-4 hidden">
          <Button
            onClick={() => push("/")}
            variant="text"
            sx={{
              color: "white",
              justifyContent: "center",
              border: "1px solid var(--deepest)",
              color: "var(--deepest)",
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => signIn()}
            variant="outlined"
            sx={{
              color: "white",
              justifyContent: "center",
              border: "1px solid var(--deepest)",
              color: "var(--deepest)",
            }}
          >
            Sign In with Google
          </Button>
        </div>
      )}
    </nav>
  );
}
