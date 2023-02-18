import Link from "next/link";
import Image from "next/image";
import LogoBg from "../public/images/edits-gallery-logo-bg.png";

export default function EditsGallery({ edits }) {
    return (
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
            <div className="xl:container xl:mx-auto lg:px-10 px-5">
                <div className="flex justify-between items-center flex-wrap w-full mb-10">
                    <h1 className="h-underline">Edits</h1>
                </div>
                <div className="mb-56 grid sm:grid-cols-2 grid-cols-1 gap-10">
                    {edits &&
                        edits.map((edit, index) => (
                            <Link key={index} href={`/edits/${edit.slug}`}>
                                <a className="block">
                                    <div
                                        className="block mb-3 relative"
                                        key={edit.id}
                                    >
                                        <div className="absolute top-0 bottom-0 left-0 right-0 m-auto z-10 text-white flex justify-center items-center xl:p-20 ">
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
    );
}
