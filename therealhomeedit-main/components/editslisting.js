import Link from "next/link";
import Image from "next/image";

export default function EditsListing({ posts }) {
    return (
        <section className="relative w-full relative bg-white py-10">
            <div className="xl:container xl:mx-auto md:px-[4.5rem] px-10 mb-20">
                <div className="flex justify-between items-center flex-wrap w-full">
                    <h1 className="h-underline">Edits</h1>
                </div>
                <div className="mb-20 grid sm:grid-cols-4 grid-cols-1 gap-10">
                    {posts &&
                        posts.map((post) => (
                            <div key={post.id}>
                                <Link href="#">
                                    <a>
                                        <div className="block mb-3">
                                            <Image
                                                src={
                                                    post.image.formats.xsmall
                                                        .url
                                                }
                                                alt={post.image.alternativeText}
                                                layout="responsive"
                                                height={158}
                                                width={200}
                                                objectFit="cover"
                                                objectPosition="center"
                                                placeholder="blur"
                                                blurDataURL={
                                                    post.image.formats.thumbnail
                                                        .url
                                                }
                                            />
                                        </div>
                                        <p className="tile-title">
                                            {post.title}
                                        </p>
                                        <p className="tile-subheading">
                                            {post.subheading}
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        ))}
                </div>
                <Link href="#">
                    <a className="button button-black">Explore All</a>
                </Link>
            </div>
        </section>
    );
}
