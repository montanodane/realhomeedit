import Layout from "../../layouts/default";
import { useRouter } from "next/router";
import config from "../../configs";
import Link from "next/link";
import Seo from "../../components/seo";
import Image from "next/image";
import NumberFormat from "react-number-format";
import ReactMarkdown from "react-markdown";

export default function SingleListings({
    listing,
    locations,
    edits,
    sociallinks,
}) {
    const router = useRouter();

    const seo = {
        ...listing.SEO,
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
            <section className="relative w-full relative bg-[#B4B5AC] py-10">
                <div className="xl:container xl:mx-auto lg:px-10 px-5 mb-20">
                    <div className="flex justify-between items-center flex-wrap w-full">
                        <h1 className="h-underline">{listing.title}</h1>
                        <Link href="/contact">
                            <a className="button button-outline">
                                Request Viewing
                            </a>
                        </Link>
                    </div>
                    <div className="block mb-3">
                        <Image
                            src={listing.image.formats.medium.url}
                            alt={listing.image.alternativeText}
                            layout="responsive"
                            height={158}
                            width={200}
                            objectFit="cover"
                            objectPosition="center"
                            placeholder="blur"
                            blurDataURL={listing.image.formats.thumbnail.url}
                        />
                    </div>
                    {listing.gallery.length > 0 && (
                        <>
                            <div className="my-14 grid md:grid-cols-2 grid-cols-1 gap-14">
                                {listing.gallery.map((item) => (
                                    <div key={item.id}>
                                        <div className="block mb-3">
                                            <Image
                                                src={item.formats.xsmall.url}
                                                alt={item.alternativeText}
                                                layout="responsive"
                                                height={158}
                                                width={200}
                                                objectFit="cover"
                                                objectPosition="center"
                                                placeholder="blur"
                                                blurDataURL={
                                                    item.formats.thumbnail.url
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <div className="my-20 grid lg:grid-cols-4 grid-cols-1 gap-14">
                        <div className="col-span-2">
                            <ReactMarkdown children={listing.content} />
                        </div>
                        <div className="flex flex-wrap items-start justify-between content-start">
                            <div>
                                <p className="capitalize">
                                    <b>Price: </b>
                                    <NumberFormat
                                        thousandsGroupStyle="thousand"
                                        value={listing.price}
                                        prefix="$"
                                        decimalSeparator="."
                                        displayType="text"
                                        type="text"
                                        thousandSeparator={true}
                                        allowNegative={true}
                                    />
                                    <br />
                                    <b>Bedrooms: </b>
                                    {listing.bedrooms}
                                    <br />
                                    <b>Location: </b>
                                    {listing.location.title}
                                    <br />
                                    <b>Property Type: </b>
                                    {listing.property_type.title}
                                </p>
                            </div>
                            <div className="mt-7">
                                <Link href="/contact">
                                    <a className="button button-outline">
                                        Request Viewing
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`${config.STRAPI_URL}/listings`);
    const listings = await res.json();
    const paths = listings.map((item) => ({
        params: { slug: item.slug },
    }));

    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params: { slug } }) {
    const listings_res = await fetch(
        `${config.STRAPI_URL}/listings/?slug=${slug}`
    );
    const listing = await listings_res.json();

    return {
        props: {
            listing: listing[0],
        },
        revalidate: 1,
    };
}
