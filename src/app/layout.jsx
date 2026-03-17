import Script from "next/script"
import "./globals.css";
import { Header } from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-17952923120"
  strategy="afterInteractive"
/>

<Script id="google-ads">
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-17952923120');
`}
</Script>
        <Header />
        {children}
      </body>
    </html>
  );
}

