import "../globals.css";
import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import Navbar from "../components/Navbars/Navbar";
import MobileNavbar from "../components/Navbars/MobileNavbar";
import LangSelect from "app/components/LangSelect";

export const metadata: Metadata = {
  title: "KLTP",
  description: "KLTP ",
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  let messages: Record<string, any>;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    return;
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LangSelect locale={locale} />
          <Navbar />
          <MobileNavbar locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
