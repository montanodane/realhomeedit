import React from "react";
import Link from "next/link";
import Image from "next/image";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { useQuery, useQueryClient } from "react-query";

export default function Listings({
    listings,
    propertyTypes,
    setTypeFilters,
    setBedroomFilters,
    setSortFilters,
    setSearchQuery,
    noResultsMessage,
}) {
    const queryClient = useQueryClient();
    const [value, setValue] = React.useState();

    const bedroomOptions = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5+" },
    ];

    const sortOptions = [
        { value: "asc", label: "Price Low to High" },
        { value: "desc", label: "Price High to Low" },
    ];

    const search = (s) => {
        setSearchQuery({
            s,
        });
        setValue(null);
    };

    const typeFilter = (types) => {
        if (types) {
            types = Object.values(types);
        }
        setTypeFilters({
            types,
        });
    };
    const bedroomFilter = (bedrooms) => {
        if (bedrooms) {
            bedrooms = Object.values(bedrooms);
        }
        setBedroomFilters({
            bedrooms,
        });
    };
    const sortFilter = (sort) => {
        if (sort) {
            sort = sort.value.value;
        }
        setSortFilters({
            sort,
        });
    };

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: "0.875rem",
            borderBottom: "1px solid #ddd",
            color: state.isSelected ? "yellow" : "#202020",
            backgroundColor: state.isSelected ? "green" : "white",
            ":hover": {
                ...provided[":hover"],
                backgroundColor: "#E3C344",
                cursor: "pointer",
            },
        }),
        control: (styles) => ({
            ...styles,
            backgroundColor: "white",
            borderRadius: 0,
            borderColor: "#ccc",
            padding: "5px",
            boxShadow: "none",
            fontSize: "14px",

            ":hover": {
                ...styles[":hover"],
                borderColor: "#E3C344",
            },
        }),
        multiValueRemove: (styles) => ({
            ...styles,
            color: "#202020",
            ":hover": {
                backgroundColor: "#E3C344",
                color: "white",
            },
        }),
        menu: (styles) => ({
            ...styles,
            color: "#202020",
            borderRadius: 0,
            borderColor: "#ccc",
            border: "1px solid #ccc",
            boxShadow: "none",
        }),
    };
    return (
        <>
            <div className="mb-12 flex justify-between items-center lg:flex-nowrap flex-wrap w-full">
                <input
                    type="text"
                    className="focus-visible:ring-[#E8CB2A] focus-visible:ring-1 block lg:w-[48.5%] lg:mb-0 mb-5 w-full lg:mr-5 mr-0 p-3 block sm:text-sm ring-1 ring-[#ccc] border-0 text-[#202020]"
                    placeholder="Search"
                    onKeyUp={(e) => search(e.target.value)}
                />
                <div className="flex flex-wrap lg:w-auto w-full">
                    <Select
                        styles={customStyles}
                        className="react-select sm:mr-5 mr-0 sm:w-auto w-full sm:mb-0 mb-5"
                        classNamePrefix="react-select"
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                        options={sortOptions}
                        instanceId="sortOptions"
                        value={value}
                        placeholder="Sort"
                        hideSelectedOptions
                        onChange={(value) => sortFilter({ value })}
                    />
                    <Select
                        styles={customStyles}
                        className="react-select sm:mr-5 mr-0 sm:w-auto w-full sm:mb-0 mb-5"
                        classNamePrefix="react-select"
                        getOptionLabel={(option) => option.title}
                        getOptionValue={(option) => option.id}
                        options={propertyTypes}
                        instanceId="propertyTypesFilter"
                        value={value}
                        isMulti
                        placeholder="Type"
                        onChange={(values) =>
                            typeFilter(values.map((type) => type.id, { value }))
                        }
                    />
                    <Select
                        styles={customStyles}
                        className="react-select mr-0 sm:w-auto w-full sm:mb-0 mb-5"
                        classNamePrefix="react-select"
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                        options={bedroomOptions}
                        instanceId="bedroomsFilter"
                        value={value}
                        isMulti
                        placeholder="Bedrooms"
                        onChange={(values) =>
                            bedroomFilter(
                                values.map((bedroom) => bedroom.value, {
                                    value,
                                })
                            )
                        }
                    />
                </div>
            </div>
            <div className="mb-20 grid sm:grid-cols-3 grid-cols-1 gap-10">
                {noResultsMessage}
                {listings.length > 0 &&
                    listings.map((listing) => (
                        <div key={listing.id}>
                            <Link href={`/buy/${listing.slug}`}>
                                <a>
                                    <div className="block mb-3">
                                        <Image
                                            src={
                                                listing.image.formats.xsmall.url
                                            }
                                            alt={listing.image.alternativeText}
                                            layout="responsive"
                                            height={158}
                                            width={200}
                                            objectFit="cover"
                                            objectPosition="center"
                                            placeholder="blur"
                                            blurDataURL={
                                                listing.image.formats.thumbnail
                                                    .url
                                            }
                                        />
                                    </div>
                                    <p className="tile-title">
                                        {listing.title}
                                    </p>
                                    <p className="tile-title">
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
                                    </p>
                                </a>
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
}
