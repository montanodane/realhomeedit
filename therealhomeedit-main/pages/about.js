import Layout from "../layouts/default";
import Seo from "../components/seo";
import config from "../configs";
import ReactMarkdown from "react-markdown";

export default function About({ locations, edits, pagesettings, sociallinks }) {
    const seo = {
        ...pagesettings.SEO,
    };

    const shareImage = {
        ...seo.share_image.formats.small,
    };

    const seoSettings = {
        metaTitle: `${seo.page_title}`,
        metaDescription: `${seo.meta_description}`,
        shareImage: `${shareImage.url}`,
    };
    return (
        <Layout locations={locations} edits={edits} sociallinks={sociallinks}>
            <Seo seoSettings={seoSettings} />
            <section className="relative w-full relative bg-white py-10">
                <div className="xl:container xl:mx-auto lg:px-10 px-5 mb-20">
                    <div className="flex justify-between items-center flex-wrap w-full">
                        <h1 className="h-underline">{pagesettings.title}</h1>
                    </div>
                    <div className="mb-20 grid lg:grid-cols-2 grid-cols-1 gap-14">
                        <div>
                            <ReactMarkdown children={pagesettings.content} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const locations_res = await fetch(`${config.STRAPI_URL}/locations`);
    const locations = await locations_res.json();

    const posts_res = await fetch(`${config.STRAPI_URL}/posts`);
    const posts = await posts_res.json();

    const edits_res = await fetch(`${config.STRAPI_URL}/edits`);
    const edits = await edits_res.json();

    const page_res = await fetch(`${config.STRAPI_URL}/about`);
    const pagesettings = await page_res.json();

    return {
        props: { locations, posts, edits, pagesettings },
        revalidate: 1,
    };
}
