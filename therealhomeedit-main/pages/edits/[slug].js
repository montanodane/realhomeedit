import Layout from "../../layouts/default";
import PropertyListing from "../../components/propertylisting";
import Cta from "../../components/cta";
import Seo from "../../components/seo";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import LogoBg from "../../public/images/edits-gallery-logo-bg.png";
import ReactMarkdown from "react-markdown";
import config from "../../configs";

export default function SingleEdits({
    edit,
    locations,
    edits,
    listings,
    sociallinks,
}) {
    const router = useRouter();

    const seo = {
        ...edit.SEO,
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
            <section className="feature-edit flex justify-center w-full relative">
                <div className="flex justify-center md:max-w-[800px] md:w-2/4 w-full relative text-white my-52 z-10 px-32">
                    <div className="absolute top-0 w-full h-full bg-[#202020] bg-opacity-80 z-0"></div>
                    <div className="flex-col z-10 my-16 px-10">
                        <h1 className="h-underline mb-2 mt-0">{edit.title}</h1>
                    </div>
                </div>
                <Image
                    src={edit.image.formats.large.url}
                    alt={edit.image.alternativeText}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="z-0"
                    placeholder="blur"
                    blurDataURL={edit.image.formats.thumbnail.url}
                />
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
                <div className="mb-56 xl:container xl:mx-auto lg:px-10 px-5 flex justify-center">
                    <div className="content text-center mt-20">
                        <ReactMarkdown children={edit.content} />
                    </div>
                </div>
            </section>
            <Cta />
            <PropertyListing listings={listings} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`${config.STRAPI_URL}/edits`);
    const edits = await res.json();
    const paths = edits.map((item) => ({
        params: { slug: item.slug },
    }));

    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params: { slug } }) {
    const edit_res = await fetch(`${config.STRAPI_URL}/edits/?slug=${slug}`);
    const edit = await edit_res.json();

    const listings_res = await fetch(
        `${config.STRAPI_URL}/listings/?edits.slug=${slug}`
    );
    const listings = await listings_res.json();
    return {
        props: {
            edit: edit[0],
            listings: listings,
        },
        revalidate: 1,
    };
}
