import "@styles/globals.css";

export default function layout({ children }) {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app w-full m-auto">{children}</main>
      </body>
    </html>
  );
}
