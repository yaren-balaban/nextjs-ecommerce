import Header from "@/components/web/header";
import "./globals.css";
import Footer from "@/components/web/footer";

export const metadata = {
  title: "E-Ticaret",
  description: "Nextjs ile hazırlanmış E-Ticaret Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <div className="flex flex-col min-h-screen w-full overflow-y-auto">
          <Header />
          <div className="flex-1 flex w-full">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
