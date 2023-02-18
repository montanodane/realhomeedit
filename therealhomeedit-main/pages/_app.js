import Head from "next/head";
import "../styles/global.css";
import config from "../configs";
import React from "react";
import { useRouter } from "next/router";

import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

React.useLayoutEffect = React.useEffect; //Handle useLayoutEffect warning.

export default function MyApp({ Component, pageProps }) {
    const { global } = pageProps;
    const [locations, setLocations] = React.useState([]);
    const [edits, setEdits] = React.useState([]);
    const [sociallinks, setSocialLinks] = React.useState([]);
    const router = useRouter();

    React.useEffect(() => {
        (async () => {
            const locations_res = await fetch(`${config.STRAPI_URL}/locations`);
            const locations_content = await locations_res.json();
            setLocations(locations_content);

            const edits_res = await fetch(`${config.STRAPI_URL}/edits`);
            const edits_content = await edits_res.json();
            setEdits(edits_content);

            const sociallinks_res = await fetch(
                `${config.STRAPI_URL}/homepage`
            );
            const sociallinks_content = await sociallinks_res.json();
            const sociallinks_banner = {
                ...sociallinks_content.banner,
            };

            setSocialLinks(sociallinks_banner);
        })();
    }, []);

    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Source+Serif+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <script
                    charSet="utf-8"
                    type="text/javascript"
                    src="//js-eu1.hsforms.net/forms/shell.js"
                ></script>
            </Head>

            <QueryClientProvider client={queryClient}>
                <Component
                    {...pageProps}
                    locations={locations}
                    edits={edits}
                    sociallinks={sociallinks}
                    key={router.asPath}
                />
            </QueryClientProvider>
        </>
    );
}
