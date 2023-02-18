import Image from "next/image";
import IconFacebook from "../public/images/icons/icon-facebook.svg";
import IconTwitter from "../public/images/icons/icon-twitter.svg";
import IconInstagram from "../public/images/icons/icon-instagram.svg";

export default function Banner({ homepagesettings }) {
    return (
        <section className="relative w-full min-h-screen">
            <div className="absolute bg-gradient-to-r from-[#111] via-[#666] to-[#111] w-full h-full"></div>
            <Image
                src={homepagesettings.banner.image.formats.large.url}
                alt={homepagesettings.banner.image.alternativeText}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="z-0 mix-blend-multiply"
                placeholder="blur"
                blurDataURL={
                    homepagesettings.banner.image.formats.thumbnail.url
                }
            />
            <div className="absolute lg:bottom-0 bottom-10 lg:p-10 p-5 text-[#B4B5AC] text-sm">
                <ul>
                    <li className="py-5">
                        <a
                            href={
                                homepagesettings.banner.facebook_url
                                    ? homepagesettings.banner.facebook_url
                                    : "#"
                            }
                            className="block"
                        >
                            <Image
                                src={IconFacebook}
                                alt="The Real Home Edit Facebook Icon"
                                height={15}
                                width={15}
                            />
                        </a>
                    </li>
                    <li className="py-5">
                        <a
                            href={
                                homepagesettings.banner.instagram_url
                                    ? homepagesettings.banner.instagram_url
                                    : "#"
                            }
                            className="block"
                        >
                            <Image
                                src={IconInstagram}
                                alt="The Real Home Edit Instagram Icon"
                                height={15}
                                width={15}
                            />
                        </a>
                    </li>
                    <li className="py-5">
                        <a
                            href={
                                homepagesettings.banner.twitter_url
                                    ? homepagesettings.banner.twitter_url
                                    : "#"
                            }
                            className="block"
                        >
                            <Image
                                src={IconTwitter}
                                alt="The Real Home Edit Twitter Icon"
                                height={15}
                                width={15}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
