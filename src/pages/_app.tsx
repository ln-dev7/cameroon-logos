import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import "./../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Cameroonian Logos"
        description="Cameroon Logos, an open source collection of high quality, pixel perfect Cameroonian company logos for free use."
        canonical="https://cameroon-logos.vercel.app/"
        openGraph={{
          url: "https://cameroon-logos.vercel.app/",
          title: "Cameroonian Portfolios",
          description:
            "Cameroon Logos, an open source collection of high quality, pixel perfect Cameroonian company logos for free use.",
          images: [
            {
              url: "https://cameroon-logos.vercel.app/assets/images/banner.png",
              alt: "Cameroonian Logos",
              type: "image/jpeg",
              secureUrl:
                "https://cameroon-logos.vercel.app/assets/images/banner.png",
            },
          ],
          siteName: "Cameroonian Logos",
        }}
        twitter={{
          handle: "@ln_dev7",
          site: "@ln_dev7",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
