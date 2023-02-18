import Head from "next/head";

export default function Seo({ seoSettings }) {
    return (
        <Head>
            {seoSettings.metaTitle && (
                <>
                    <title>{seoSettings.metaTitle}</title>
                    <meta property="og:title" content={seoSettings.metaTitle} />
                    <meta
                        name="twitter:title"
                        content={seoSettings.metaTitle}
                    />
                </>
            )}
            {seoSettings.metaDescription && (
                <>
                    <meta
                        name="description"
                        content={seoSettings.metaDescription}
                    />
                    <meta
                        property="og:description"
                        content={seoSettings.metaDescription}
                    />
                    <meta
                        name="twitter:description"
                        content={seoSettings.metaDescription}
                    />
                </>
            )}
            {seoSettings.shareImage && (
                <>
                    <meta
                        property="og:image"
                        content={seoSettings.shareImage}
                    />
                    <meta
                        name="twitter:image"
                        content={seoSettings.shareImage}
                    />
                    <meta name="image" content={seoSettings.shareImage} />
                </>
            )}
        </Head>
    );
}
