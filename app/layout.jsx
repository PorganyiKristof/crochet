import Header from "@components/Header";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function layout({ children }) {
  return (
    <html>
      <body>
        <Provider>
          <Header />
          <div className="main ">
            <div className="gradient" />
          </div>
          <main className="app w-full m-auto md:mt-8">{children}</main>
          
        </Provider>
      </body>
    </html>
  );
}
