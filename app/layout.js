import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata = {
  title: "Sweetfull",
  description: "Great Health - Better Body",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
