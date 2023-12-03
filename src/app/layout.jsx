import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import SiteNavBar from "@/components/SiteNavBar";
import Subscribe from "@/components/Subscribe";
import SiteFooter from "@/components/SiteFooter";
export async function generateMetadata() {
  return {
    title: "home",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#2669669" height={3} speed={200} />
        <SiteNavBar />
        {children}
        <Subscribe />
        <SiteFooter />
      </body>
    </html>
  );
}
