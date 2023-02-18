import React from "react";
import Layout from "../../../layouts/default";
import Seo from "../../../components/seo";
import config from "../../../configs";
import Image from "next/image";
import LogoBg from "../../../public/images/edits-gallery-logo-bg.png";
import ReactMarkdown from "react-markdown";
import Listings from "../../../components/listings";
import { Tab } from "@headlessui/react";

export default function SingleLocations({
    location,
    locations,
    edits,
    propertyTypes,
    listings,
    sociallinks,
}) {
    const seo = {
        ...location.SEO,
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
                `${config.STRAPI_URL}/listings/?location.slug=${
                    location.slug
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
                `${config.STRAPI_URL}/listings/?location.slug=${
                    location.slug
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
                `${config.STRAPI_URL}/listings/?location.slug=${
                    location.slug
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

    const tabItems = [
        {
            name: "Eat",
        },
        {
            name: "Drink",
        },
        {
            name: "See",
        },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <Layout locations={locations} edits={edits} sociallinks={sociallinks}>
            <Seo seoSettings={seoSettings} />
            <section className="feature-edit flex justify-end w-full relative">
                <div className="flex justify-center md:w-2/4 w-full relative text-white py-[6.66rem] z-10">
                    <div className="absolute top-0 w-full h-full bg-[#202020] bg-opacity-80 z-0"></div>
                    <div className="max-w-[500px] flex-col z-10 lg:my-32 px-10">
                        <h1 className="h-underline mb-7 mt-0">
                            {location.title}
                        </h1>
                        <span className="text-sm font-source-serif leading-7">
                            {location.description}
                        </span>
                    </div>
                </div>
                <Image
                    src={location.image.formats.large.url}
                    alt={location.image.alternativeText}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="z-0"
                    placeholder="blur"
                    blurDataURL={location.image.formats.thumbnail.url}
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
                <div className="mb-56 xl:container xl:mx-auto lg:px-10 px-5">
                    <div className="flex justify-between items-center flex-wrap w-full">
                        <h1 className="h-underline">{location.title}</h1>
                    </div>
                    <div>
                        <Tab.Group>
                            <Tab.List className="flex justify-start border-b border-[#707070] pb-5">
                                {tabItems.map((item) => (
                                    <Tab
                                        key={item.name}
                                        className={({ selected }) =>
                                            classNames(
                                                " py-3 px-[1rem] uppercase text-[0.5rem] font-source-sans font-semibold tracking-[0.3rem] pl-[1.3rem] overflow-hidden",
                                                selected
                                                    ? "bg-[#202020] text-white"
                                                    : "text-[#202020] hover:bg-white/[0.12] hover:text-white"
                                            )
                                        }
                                    >
                                        {item.name}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2 pt-10 content">
                                <Tab.Panel>
                                    <ReactMarkdown children={location.eat} />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <ReactMarkdown children={location.drink} />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <ReactMarkdown children={location.see} />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </section>
            <section className="relative w-full relative bg-white py-10">
                <div className="xl:container xl:mx-auto lg:px-10 px-5 mb-20">
                    <div className="flex justify-between items-center flex-wrap w-full">
                        <h1 className="h-underline">Rent</h1>
                        <h2>Listings for rent in {location.title}</h2>
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
    const res = await fetch(`${config.STRAPI_URL}/locations`);
    const locations = await res.json();
    const paths = locations.map((item) => ({
        params: { slug: item.slug },
    }));

    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params: { slug } }) {
    const location_res = await fetch(
        `${config.STRAPI_URL}/locations/?slug=${slug}`
    );
    const location = await location_res.json();

    const resPropertyType = await fetch(`${config.STRAPI_URL}/property-types`);
    const propertyTypeData = await resPropertyType.json();

    const resListings = await fetch(
        `${config.STRAPI_URL}/listings/?location.slug=${location[0].slug}&listing_type=rent`
    );
    const listings = await resListings.json();

    return {
        props: {
            location: location[0],
            propertyTypes: propertyTypeData,
            listings: listings,
        },
        revalidate: 1,
    };
}
