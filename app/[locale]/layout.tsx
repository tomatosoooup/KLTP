import "../globals.css";
import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import Navbar from "../components/Navbars/Navbar";
import MobileNavbar from "../components/Navbars/MobileNavbar";
import LangSelect from "app/components/LangSelect";

export const metadata: Metadata = {
  title: "KLTP",
  description: `Our company constantly monitors market trends in order to implement the most advanced and secure solutions in the field of finance.
                Safety - is not just a word, but out basic principle of work.
                We combine the best traditions of banking services with innovative solutions in the field of finance and cryptocurrencies.
                We provide services for buying/selling cryptocurrency for cash in more than 52 countries around the world.
                KLTP EXCHANGE - is a certified cryptocurrency exchange service with a European license.`,
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
