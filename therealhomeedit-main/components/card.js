import React from "react";
import Image from "next/image";
import Link from "next/link";
import NumberFormat from "react-number-format";

export function Card({ title, image, price, url, alt }) {
    return (
        <Link href={url}>
            <a>
                <div
                    role="button"
                    tabIndex={0}
                    className="card inline-block mx-5 my-10 2xl:w-[435px] xl:w-[353px] lg:w-[265px] md:w-[180px] w-[180px] select-none"
                >
                    <div className="relative">
                        <div className="absolute xl:bottom-[5.5rem] bottom-28 z-10 right-0 button button-small">
                            New Listing
                        </div>
                        <div className="block mb-3">
                            <Image
                                src={image}
                                alt={alt}
                                layout="responsive"
                                height={158}
                                width={200}
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                        <p className="tile-title">{title}</p>
                        <p className="tile-title">
                            <NumberFormat
                                thousandsGroupStyle="thousand"
                                value={price}
                                prefix="$"
                                decimalSeparator="."
                                displayType="text"
                                type="text"
                                thousandSeparator={true}
                                allowNegative={true}
                            />
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
}
