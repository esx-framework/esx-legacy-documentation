import React, { useEffect, useState } from "react";
import { LocaleSwitch, DocsThemeConfig } from "nextra-theme-docs";
import { EditLink } from "./components/theme/edit-link";
import { FeedbackLink } from "./components/theme/feedback-link";
import { SUPPORTED_LOCALES } from "./data/translations";
import { ThemedImage } from "./components/theme/themed-image";
import { TimeStamp } from "./components/theme/timestamp";
import { Footer } from "./components/theme/footer";
import { Head } from "./components/theme/head";
import { Toc } from "./components/theme/toc";
import { Search } from "./components/theme/search";
import { ScrollToTop } from "./components/theme/scroll-to-top";
import { TocWithAd } from "./components/theme/toc-with-ad";

const config: DocsThemeConfig = {
  color: {
    hue: {
      light: 29,
      dark: 29,
    },
  },
  editLink: {
    component: EditLink,
  },
  search: {
    placeholder: Search,
  },
  toc: {
    title: Toc,
    backToTop: false,
    extraContent: ScrollToTop,
    // extraContent: () => (
    //   <>
    //     <ScrollToTop />
    //     <TocWithAd />
    //   </>
    // ),
  },
  feedback: {
    content: FeedbackLink,
  },
  gitTimestamp: (props) => <TimeStamp timestamp={props.timestamp} />,
  // The docs are English only, so both language switchers (navbar and sidebar) are off.
  // Put these back once SUPPORTED_LOCALES has a second language.
  // i18n: SUPPORTED_LOCALES,
  logo: ThemedImage,
  navbar: {
    // extraContent: LocaleSwitch,
  },
  project: {
    link: "https://github.com/esx-framework",
  },
  chat: {
    link: "https://discord.esx-framework.org",
  },
  docsRepositoryBase: "https://github.com/esx-framework/esx-legacy-documenation",
  footer: {
    content: null,
  },
  head: Head,
};

export default config;
