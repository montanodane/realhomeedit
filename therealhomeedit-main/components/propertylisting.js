import Link from "next/link";
import Image from "next/image";
import NumberFormat from "react-number-format";

export default function PropertyListing({ listings }) {
    return (
        <section className="relative w-full relative bg-white py-10">
            <div className="xl:container xl:mx-auto lg:px-10 px-5 mb-20">
                <div className="flex justify-between items-center flex-wrap w-full mb-10">
                    <h1 className="h-underline">Listings</h1>
                    <Link href="#">
                        <a className="button button-outline">
                            View All Listings
                        </a>
                    </Link>
                </div>
                <div className="mb-20 grid sm:grid-cols-3 grid-cols-1 gap-10">
                    {listings &&
                        listings.map((listing) => (
                            <div key={listing.id}>
                                <Link href={`/buy/${listing.slug}`}>
                                    <a>
                                        <div className="block mb-3">
                                            <Image
                                                src={
                                                    listing.image.formats.xsmall
                                                        .url
                                                }
                                                alt={
                                                    listing.image
                                                        .alternativeText
                                                }
                                                layout="responsive"
                                                height={158}
                                                width={200}
                                                objectFit="cover"
                                                objectPosition="center"
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
            </div>
        </section>
    );
}
