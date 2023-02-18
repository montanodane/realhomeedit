import Layout from "../layouts/default";
import Seo from "../components/seo";
import config from "../configs";
import HubspotContactForm from "../components/hubspotcontactform";
import LogoBg from "../public/images/edits-gallery-logo-bg.png";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function Contact({
    locations,
    edits,
    pagesettings,
    sociallinks,
}) {
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
            <section className="relative w-full relative bg-[#B4B5AC] text-[#202020] py-10">
                <div className="absolute bottom-0 left-0 flex items-end">
                    <Image
                        src={LogoBg}
                        alt="alt"
                        height={207}
                        width={115}
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                    />
                </div>
                <div className="xl:container xl:mx-auto lg:px-10 px-5">
                    <div className="mb-24 max-w-[600px] mx-auto ">
                        <h2>Get in touch</h2>
                        <HubspotContactForm />
                    </div>
                    <div className="h-[5rem] w-full"></div>
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

    const page_res = await fetch(`${config.STRAPI_URL}/contact`);
    const pagesettings = await page_res.json();

    return {
        props: { locations, posts, edits, pagesettings },
        revalidate: 1,
    };
}
