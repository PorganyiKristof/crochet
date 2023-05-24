"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [isAdmin, setAdmin] = useState(false);
  const { data: session } = useSession();
  useEffect(() => {
    if (
      session?.user?.email === "porganyikristof@gmail.com" ||
      session?.user?.email === "betlehemdorka@gmail.com"
    ) {
      setAdmin(true);
    }
  }, [session]);
  return (
    <div>
      {!!isAdmin ? (
        <div className="text-center">
          <h1 className="head_text">Welcome in the Admin page</h1>
          <div>{children}</div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="head_text">You are not an Admin so please leave!</h1>
        </div>
      )}
    </div>
  );
}
