import Layout from "../../layouts/default";
import config from "../../configs";
import Listings from "../../components/listings";
import Seo from "../../components/seo";
import React from "react";

export default function Rent({
    locations,
    edits,
    propertyTypes,
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
            const listings_res = await fetch(
                `${config.STRAPI_URL}/listings?listing_type=rent`
            );
            const listings_content = await listings_res.json();
            setAllListings(listings_content);
            setFilteredListings(listings_content);
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
                `${
                    config.STRAPI_URL
                }/listings?listing_type=rent&${filterArr.join("&")}`
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
                `${
                    config.STRAPI_URL
                }/listings?listing_type=rent&${filterArr.join("&")}`
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
                `${
                    config.STRAPI_URL
                }/listings?listing_type=rent&${filterArr.join("&")}`
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
            <section className="relative w-full relative bg-white py-10">
                <div className="xl:container xl:mx-auto lg:px-10 px-5 mb-20">
                    <div className="flex justify-between items-center flex-wrap w-full lg:flex-row flex-col">
                        <h1 className="h-underline">Rent</h1>
                        <h2>Listings for rent</h2>
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

export async function getStaticProps() {
    const resPropertyType = await fetch(`${config.STRAPI_URL}/property-types`);
    const propertyTypeData = await resPropertyType.json();

    const pagesettings_res = await fetch(`${config.STRAPI_URL}/rent`);
    const pagesettings = await pagesettings_res.json();

    return {
        props: {
            propertyTypes: propertyTypeData,
            pagesettings: pagesettings,
        },
        revalidate: 1,
    };
}
