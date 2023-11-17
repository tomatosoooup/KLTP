import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ua", "pl", "ru"],

  defaultLocale: "",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
