import Layout from "../../layouts/default";
import Seo from "../../components/seo";
import config from "../../configs";
import Link from "next/link";
import Image from "next/image";

export default function Edits({ locations, edits, pagesettings, sociallinks }) {
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
                    <div className="flex justify-between items-center flex-wrap w-full lg:flex-row flex-col mb-10">
                        <h1 className="h-underline">Edits</h1>
                    </div>
                    <div className="mb-20 grid sm:grid-cols-3 grid-cols-1 gap-10">
                        {edits.map((edit) => (
                            <Link key={edit.id} href={`/edits/${edit.slug}`}>
                                <a className="block">
                                    <div
                                        className="block mb-3 relative"
                                        key={edit.id}
                                    >
                                        <div className="absolute top-0 bottom-0 left-0 right-0 m-auto z-10 text-white flex justify-center items-center 2xl:p-10">
                                            <div className="bg-[#202020] bg-opacity-80 z-10 text-white px-10 w-full text-center">
                                                <h2 className="pb-0">
                                                    {edit.title}
                                                </h2>
                                            </div>
                                        </div>
                                        <Image
                                            src={edit.image.formats.small.url}
                                            alt={edit.image.alternativeText}
                                            layout="responsive"
                                            height={158}
                                            width={200}
                                            objectFit="cover"
                                            objectPosition="center"
                                            placeholder="blur"
                                            blurDataURL={
                                                edit.image.formats.thumbnail.url
                                            }
                                        />
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const pagesettings_res = await fetch(`${config.STRAPI_URL}/edits-page`);
    const pagesettings = await pagesettings_res.json();

    return {
        props: {
            pagesettings: pagesettings,
        },
        revalidate: 1,
    };
}
