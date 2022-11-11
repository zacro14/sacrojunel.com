import Head from "next/head";
import React from "react";
interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Seo({ title, description, children }: Props) {
  return (
    <>
      <Head>
        <title>{title || "Junel Sacro | Porfolio"}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <meta
          name="description"
          content={description || "Junell Sacro Portfolio"}
        />
      </Head>
      {children}
    </>
  );
}
