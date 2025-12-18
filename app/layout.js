import Header from "@/components/web/header";
import "./globals.css";

export const metadata = {
  title: "E-Ticaret",
  description: "Nextjs ile hazırlanmış E-Ticaret Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header /> 
        {children}
      </body>
    </html>
  );
}
