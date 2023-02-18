import Link from "next/link";
import { Fragment } from "react";
import { Menu, Disclosure, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

const navitems = [
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

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function MyLink(props) {
    let { href, children, ...rest } = props;
    return (
        <Link href={href}>
            <a {...rest}>{children}</a>
        </Link>
    );
}

export default function Menu2({ edits, header }) {
    const router = useRouter();
    return (
        <ul className="flex justify-end items-stretch flex-wrap lg:flex-no-wrap">
            {navitems.map((item) => (
                <li
                    key={item.name}
                    className="mx-5 lg:last:mr-0 border-b border-transparent overflow-hidden pb-[0.2rem] w-full lg:w-auto"
                >
                    <Link href={item.href}>
                        {header != "default" ? (
                            <a
                                className={
                                    router.pathname == item.href
                                        ? "tracking-[0.3rem] uppercase text-[0.5rem] pb-[0.2rem] mr-[-0.3rem] font-source-sans font-semibold lg:hover:border-b lg:hover:border-[#E3C344] lg:hover:text-white border-b border-[#E3C344] text-[#B3B5AC] lg:text-white"
                                        : "tracking-[0.3rem] uppercase text-[0.5rem] pb-[0.2rem] mr-[-0.3rem] font-source-sans font-semibold lg:hover:border-b lg:hover:border-[#E3C344] lg:hover:text-white lg:text-[#B3B5AC] text-[#202020]"
                                }
                            >
                                {item.name}
                            </a>
                        ) : (
                            <a
                                className={
                                    router.pathname == item.href
                                        ? "tracking-[0.3rem] uppercase text-[0.5rem] pb-[0.2rem] mr-[-0.3rem] font-source-sans font-semibold lg:hover:border-b lg:hover:border-[#E3C344] lg:hover:text-black border-b border-[#E3C344] text-[#B3B5AC] lg:text-black"
                                        : "tracking-[0.3rem] uppercase text-[0.5rem] pb-[0.2rem] mr-[-0.3rem] font-source-sans font-semibold lg:hover:border-b lg:hover:border-[#E3C344] lg:hover:text-black lg:text-[#202020]"
                                }
                            >
                                {item.name}
                            </a>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
