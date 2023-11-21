"use client";

import { useTranslations } from "next-intl";
import { lazy } from "react";

const LazyMain = lazy(() => import("./sections/Main"));
const LazyAbout = lazy(() => import("./sections/About"));
const LazyForm = lazy(() => import("./sections/Form"));
const LazyServices = lazy(() => import("./sections/Services"));
const LazyFooter = lazy(() => import("./sections/Footer"));

export default function Home() {
  const main = useTranslations("Main");
  const mainText = [main("p1"), main("p2"), main("button")];

  const form = useTranslations("Form");
  const formText = [
    form("give"),
    form("get"),
    form("sum"),
    form("button"),
    form("town"),
    form("reciever"),
  ];

  const about = useTranslations("About");
  const aboutText = [
    about("h1"),
    about("p"),
    about("l1"),
    about("l2-"),
    about("l2"),
    about("l3"),
    about("l4"),
    about("l5"),
  ];

  const services = useTranslations("Services");
  const servicesText = [
    services("h1"),
    services("l1"),
    services("l1-"),
    services("l2"),
    services("l3"),
    services("l3-"),
    services("l4"),
    services("l4-"),
    services("l5"),
    services("l6"),
    services("l7"),
    services("l7-"),
    services("l8"),
  ];

  return (
    <>
      <LazyMain text={mainText} />
      <LazyForm text={formText} />
      <LazyAbout text={aboutText} />
      <LazyServices text={servicesText} />
      <LazyFooter />
    </>
  );
}
