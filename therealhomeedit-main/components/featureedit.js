import Link from "next/link";
import Image from "next/image";

export default function FeatureEdit({ homepagesettings }) {
    return (
        <section className="feature-edit flex justify-end w-full relative">
            <div className="flex justify-center md:w-2/4 w-full relative text-white lg:py-20 py-10 p-5 z-10 ">
                <div className="absolute top-0 w-full h-full bg-[#202020] bg-opacity-80 z-0"></div>
                <div className="max-w-[359px] flex-col z-10">
                    <p className="title">Feature Edit</p>
                    <h1 className="h-underline">
                        {homepagesettings.feature_edit.edit.title}
                    </h1>
                    <h2>{homepagesettings.feature_edit.edit.sub_heading}</h2>
                    <p>{homepagesettings.feature_edit.edit.description}</p>
                    <Link
                        href={`/edits/${homepagesettings.feature_edit.edit.slug}`}
                    >
                        <a className="button block">Read Feature Edit</a>
                    </Link>
                </div>
            </div>
            <Image
                src={homepagesettings.feature_edit.edit.image.formats.large.url}
                alt={homepagesettings.feature_edit.edit.image.alternativeText}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="z-0"
                placeholder="blur"
                blurDataURL={
                    homepagesettings.feature_edit.edit.image.formats.thumbnail
                        .url
                }
            />
        </section>
    );
}
