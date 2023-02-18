import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/the-real-home-edit-logo-light.svg";
import IconFacebook from "../public/images/icons/icon-facebook-dark.svg";
import IconTwitter from "../public/images/icons/icon-twitter-dark.svg";
import IconInstagram from "../public/images/icons/icon-instagram-dark.svg";

const navitems = [
    {
        name: "Buy",
        href: "/buy",
    },
    {
        name: "Rent",
        href: "/rent",
    },
    {
        name: "Sell",
        href: "/sell",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export default function Footer({ sociallinks }) {
    return (
        <footer className="flex flex-wrap justify-between bg-[#202020] py-10 lg:px-10 px-5 sm:flex-row flex-col">
            <div className="text-left mr-10 py-3">
                <Image
                    src={Logo}
                    alt="Picture of the author"
                    height={40}
                    width={280}
                />
                <p className="uppercase text-[0.875rem] tracking-[0.0375rem] text-[#909090] font-source-sans font-semibold mt-10">
                    &copy; {new Date().getFullYear()}. The Real Estate Edits
                    Group. New York City. USA.
                </p>
            </div>
            <nav className="flex-1 w-full ">
                <ul className="flex sm:flex-nowrap flex-wrap sm:mb-0 mb-5">
                    {navitems.map((item) => (
                        <li
                            key={item.name}
                            className="sm:mr-10 sm:w-auto w-full sm:my-5 my-3 uppercase text-[0.875rem] tracking-[0.0375rem] font-source-sans font-semibold text-[#909090] hover:text-white"
                        >
                            <Link href={item.href}>
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex flex-col justify-between">
                <ul className="flex my-2">
                    <li className="flex justify-center items-center bg-white text-[#909090] mr-1">
                        <a
                            href={
                                sociallinks.instagram_url
                                    ? sociallinks.instagram_url
                                    : "#"
                            }
                            className="block flex justify-center items-center h-12 w-12"
                        >
                            <Image
                                src={IconInstagram}
                                alt="Picture of the author"
                                height={20}
                                width={20}
                            />
                        </a>
                    </li>
                    <li className="flex justify-center items-center bg-white text-[#909090] mx-1">
                        <a
                            href={
                                sociallinks.facebook_url
                                    ? sociallinks.facebook_url
                                    : "#"
                            }
                            className="block flex justify-center items-center h-12 w-12"
                        >
                            <Image
                                src={IconFacebook}
                                alt="Picture of the author"
                                height={20}
                                width={20}
                            />
                        </a>
                    </li>
                    <li className="flex justify-center items-center bg-white text-[#909090] ml-1">
                        <a
                            href={
                                sociallinks.twitter_url
                                    ? sociallinks.twitter_url
                                    : "#"
                            }
                            className="block flex justify-center items-center h-12 w-12"
                        >
                            <Image
                                src={IconTwitter}
                                alt="Picture of the author"
                                height={20}
                                width={20}
                            />
                        </a>
                    </li>
                </ul>
                <p className="text-[#909090] text-xs text-right mb-2">
                    Built by <a href="https://mattmoore.co">mattmoore.co</a>
                </p>
            </div>
        </footer>
    );
}
