import "../components/safari-polyfill";
import Link from "next/link";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "../components/arrows";
import { Card } from "../components/card";

export default function NewlyListed({ newlylisted }) {
    return (
        <section className="newly-listed w-full relative bg-white text-[#202020] py-10">
            <div className="xl:container xl:mx-auto">
                <div className="flex justify-between items-center flex-wrap w-full lg:px-10 px-5 ">
                    <h1 className="h-underline">Newly Listed</h1>
                    <Link href="/buy">
                        <a className="button button-outline sm:w-auto w-full">
                            View all listings
                        </a>
                    </Link>
                </div>
                <div className="mb-20">
                    <ScrollMenu
                        LeftArrow={LeftArrow}
                        RightArrow={RightArrow}
                        options={{
                            ratio: 0.9,
                            rootMargin: "5px",
                            threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
                        }}
                    >
                        {newlylisted &&
                            newlylisted.map((item) => (
                                <Card
                                    title={item.title}
                                    itemId={item.id} // NOTE: itemId is required for track items
                                    key={item.id}
                                    price={item.price}
                                    image={item.image.formats.small.url}
                                    alt={item.image.alternativeText}
                                    url={`/buy/${item.slug}`}
                                />
                            ))}
                    </ScrollMenu>
                </div>
            </div>
        </section>
    );
}
