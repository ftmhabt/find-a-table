import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { Metadata } from "next";
import AuthContext from "./context/AuthContext";

export const metadata: Metadata = {
  title: {
    template: "%s | Find a table",
    default: "Find a table",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" m-0 p-0 text-primary">
        <AuthContext>
          <div className="min-h-[100vh]">{children}</div>
        </AuthContext>
      </body>
    </html>
  );
}
