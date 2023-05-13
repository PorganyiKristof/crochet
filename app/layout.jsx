import Header from "@components/Header";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import Loading from "./loading";

export default function layout({ children }) {
  return (
    <html>
      <Suspense fallback={<Loading />}>
        <body className="max-w-screen overflow-x-hidden">
          <Provider>
            <Header />
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="w-full m-auto md:mt-8">{children}</main>
          </Provider>
        </body>
      </Suspense>
    </html>
  );
}
