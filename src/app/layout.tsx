import "./globals.css";
import { Header } from "../components/Header"
import { SideBar } from "@/components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SideBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
