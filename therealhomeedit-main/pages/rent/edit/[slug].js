import React from "react";
import Layout from "../../../layouts/default";
import Seo from "../../../components/seo";
import config from "../../../configs";
import Listings from "../../../components/listings";
import Image from "next/image";
import LogoBg from "../../../public/images/edits-gallery-logo-bg.png";
import ReactMarkdown from "react-markdown";

export default function SingleEdits({
    edit,
    locations,
    edits,
    propertyTypes,
    listings,
    sociallinks,
}) {
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

    const [allListings, setAllListings] = React.useState([]);
    const [filteredListings, setFilteredListings] = React.useState([]);
    const [noResultsMessage, setNoResultsMessage] = React.useState();

    const [typeFilters, setTypeFilters] = React.useState({
        types: [],
    });
    const [bedroomFilters, setBedroomFilters] = React.useState({
        bedrooms: [],
    });
    const [sortFilters, setSortFilters] = React.useState({
        sort: "",
    });

    const [searchQuery, setSearchQuery] = React.useState({
        s: "",
    });

    React.useEffect(() => {
        (async () => {
            setAllListings(listings);
        })();
    }, []);

    React.useEffect(() => {
        (async () => {
            const filterArr = [];
            if (typeFilters.types && typeFilters.types.length > 0) {
                typeFilters.types.map((id) =>
                    filterArr.push(`property_type.id=${id}`)
                );
            }
            if (bedroomFilters.bedrooms && bedroomFilters.bedrooms.length > 0) {
                bedroomFilters.bedrooms.map((b) =>
                    filterArr.push(`bedrooms=${b}`)
                );
            }
            if (sortFilters.sort && sortFilters.sort === "asc") {
                filterArr.push("_sort=price:ASC");
            }
            if (sortFilters.sort && sortFilters.sort === "desc") {
                filterArr.push("_sort=price:DESC");
            }
            const listings_res = await fetch(
                `${config.STRAPI_URL}/listings/?edits.slug=${
                    edit.slug
                }&listing_type=rent&${filterArr.join("&")}`
            );
            const listings_content = await listings_res.json();
            if (listings_content.length == 0) {
                setNoResultsMessage("No results found.");
            } else {
                setNoResultsMessage("");
            }
            setFilteredListings(listings_content);
        })();
    }, [typeFilters]);

    React.useEffect(() => {
        (async () => {
            const filterArr = [];
            if (typeFilters.types && typeFilters.types.length > 0) {
                typeFilters.types.map((id) =>
                    filterArr.push(`property_type.id=${id}`)
                );
            }
            if (bedroomFilters.bedrooms && bedroomFilters.bedrooms.length > 0) {
                bedroomFilters.bedrooms.map((b) =>
                    filterArr.push(`bedrooms=${b}`)
                );
            }
            if (sortFilters.sort && sortFilters.sort === "asc") {
                filterArr.push("_sort=price:ASC");
            }
            if (sortFilters.sort && sortFilters.sort === "desc") {
                filterArr.push("_sort=price:DESC");
            }
            const listings_res = await fetch(
                `${config.STRAPI_URL}/listings/?edits.slug=${
                    edit.slug
                }&listing_type=rent&${filterArr.join("&")}`
            );
            const listings_content = await listings_res.json();
            if (listings_content.length == 0) {
                setNoResultsMessage("No results found.");
            } else {
                setNoResultsMessage("");
            }
            setFilteredListings(listings_content);
        })();
    }, [bedroomFilters]);

    React.useEffect(() => {
        (async () => {
            const filterArr = [];
            if (typeFilters.types && typeFilters.types.length > 0) {
                typeFilters.types.map((id) =>
                    filterArr.push(`property_type.id=${id}`)
                );
            }
            if (bedroomFilters.bedrooms && bedroomFilters.bedrooms.length > 0) {
                bedroomFilters.bedrooms.map((b) =>
                    filterArr.push(`bedrooms=${b}`)
                );
            }
            if (sortFilters.sort && sortFilters.sort === "asc") {
                filterArr.push("_sort=price:ASC");
            }
            if (sortFilters.sort && sortFilters.sort === "desc") {
                filterArr.push("_sort=price:DESC");
            }
            const listings_res = await fetch(
                `${config.STRAPI_URL}/listings/?edits.slug=${
                    edit.slug
                }&listing_type=rent&${filterArr.join("&")}`
            );
            const listings_content = await listings_res.json();

            if (listings_content.length == 0) {
                setNoResultsMessage("No results found.");
            } else {
                setNoResultsMessage("");
            }
            setFilteredListings(listings_content);
        })();
    }, [sortFilters]);

    React.useEffect(() => {
        if (searchQuery.s) {
            let listings = allListings.filter(
                (l) =>
                    l.title
                        .toLowerCase()
                        .indexOf(searchQuery.s.toLowerCase()) >= 0
            );
            setFilteredListings(listings);
        } else {
            let listings = allListings;
            setFilteredListings(listings);
        }
    }, [searchQuery]);
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
            <section className="relative w-full relative bg-white py-10">
                <div className="xl:container xl:mx-auto lg:px-10 px-5 mb-20">
                    <div className="flex justify-between items-center flex-wrap w-full">
                        <h1 className="h-underline">Rent</h1>
                        <h2>{edit.title} listings for rent</h2>
                    </div>
                    <Listings
                        listings={filteredListings}
                        setSearchQuery={setSearchQuery}
                        setTypeFilters={setTypeFilters}
                        setBedroomFilters={setBedroomFilters}
                        setSortFilters={setSortFilters}
                        propertyTypes={propertyTypes}
                        listingType="rent"
                        noResultsMessage={noResultsMessage}
                    />
                </div>
            </section>
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

    const resPropertyType = await fetch(`${config.STRAPI_URL}/property-types`);
    const propertyTypeData = await resPropertyType.json();

    const resListings = await fetch(
        `${config.STRAPI_URL}/listings/?edits.slug=${edit[0].slug}&listing_type=rent`
    );
    const listings = await resListings.json();

    return {
        props: {
            edit: edit[0],
            propertyTypes: propertyTypeData,
            listings: listings,
        },
        revalidate: 1,
    };
}
