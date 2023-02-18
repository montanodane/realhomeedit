import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

const navitems = [
    {
        name: "Buy",
    },
    {
        name: "Rent",
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

export default function Menu1({ locations, edits, header }) {
    const router = useRouter();
    return (
        <ul className="flex justify-left items-stretch flex-wrap lg:flex-no-wrap">
            {navitems.map((item) => (
                <li
                    key={item.name}
                    className="mx-5 lg:first:ml-0 border-b border-transparent overflow-hidden lg:pb-[0.2rem] w-full lg:w-auto"
                >
                    <Menu>
                        {({ open }) => (
                            <>
                                {header != "default" ? (
                                    <>
                                        {item && item.name != "Rent" ? (
                                            <Menu.Button
                                                className={classNames(
                                                    open ||
                                                        router.pathname ==
                                                            "/buy" ||
                                                        router.pathname ==
                                                            "/buy/[slug]"
                                                        ? "border-b border-[#E3C344] text-[#202020] lg:text-white"
                                                        : "text-[#202020] lg:text-[#B3B5AC] lg:hover:border-b lg:hover:border-[#E3C344] lg:hover:text-white",
                                                    "tracking-[0.3rem] uppercase text-[0.5rem] pb-[0.2rem] mr-[-0.3rem] font-source-sans font-semibold"
                                                )}
                                            >
                                                {item.name}
                                            </Menu.Button>
                                        ) : (
                                            <Menu.Button
                                                className={classNames(
                                                    open ||
                                                        router.pathname ==
                                                            "/rent" ||
                                                        router.pathname ==
                                                            "/rent/[slug]"
                                                        ? "border-b border-[#E3C344] text-[#202020] lg:text-white"
                                                        : "text-[#202020] lg:text-[#B3B5AC] lg:hover:border-b lg:hover:border-[#E3C344] lg:hover:text-white",
                                                    "tracking-[0.3rem] uppercase text-[0.5rem] pb-[0.2rem] mr-[-0.3rem] font-source-sans font-semibold"
                                                )}
                                            >
                                                {item.name}
                                            </Menu.Button>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {item && item.name != "Rent" ? (
                                            <Menu.Button
                                                className={classNames(
                                                    open ||
                                                        router.pathname ==
                                                            "/buy" ||
                                                        router.pathname ==
                                                            "/buy/[slug]"
                                                        ? "border-b border-[#E3C344] text-[#000000] lg:text-black"
                                                        : "text-[#202020] lg:text-[#202020] lg:hover:border-b lg:hover:border-[#E3C344] lg:hover:text-black",
                                                    "tracking-[0.3rem] uppercase text-[0.5rem] pb-[0.2rem] mr-[-0.3rem] font-source-sans font-semibold"
                                                )}
                                            >
                                                {item.name}
                                            </Menu.Button>
                                        ) : (
                                            <Menu.Button
                                                className={classNames(
                                                    open ||
                                                        router.pathname ==
                                                            "/rent" ||
                                                        router.pathname ==
                                                            "/rent/[slug]"
                                                        ? "border-b border-[#E3C344] text-[#000000] lg:text-black"
                                                        : "text-[#202020] lg:text-[#202020] lg:hover:border-b lg:hover:border-[#E3C344] lg:hover:text-black",
                                                    "tracking-[0.3rem] uppercase text-[0.5rem] pb-[0.2rem] mr-[-0.3rem] font-source-sans font-semibold"
                                                )}
                                            >
                                                {item.name}
                                            </Menu.Button>
                                        )}
                                    </>
                                )}
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-500"
                                    enterFrom="transform opacity-0 scale-100"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-100"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-100"
                                >
                                    <Menu.Items className="lg:grid lg:grid-cols-3 origin-top relative lg:top-[112px] lg:absolute lg:left-0 w-full shadow-lg bg-white focus:outline-none p-5 lg:p-10 tracking-[0.1rem] uppercase text-[0.5rem] text-[#202020] font-semibold">
                                        <div>
                                            <ul>
                                                <p className="pb-7 tracking-[0.3rem] uppercase text-[0.6rem] text-[#202020] font-source-sans font-bold">
                                                    Locations
                                                </p>
                                                {item && item.name != "Rent" ? (
                                                    <>
                                                        {locations &&
                                                            locations
                                                                .slice(0, 10)
                                                                .map((item) => (
                                                                    <Menu.Item
                                                                        as="li"
                                                                        key={
                                                                            item.title
                                                                        }
                                                                        className="pb-[0.8rem]"
                                                                    >
                                                                        {({
                                                                            active,
                                                                        }) => (
                                                                            <MyLink
                                                                                className={classNames(
                                                                                    active
                                                                                        ? "border-b border-[#E3C344]"
                                                                                        : "",
                                                                                    "pb-[0.2rem]"
                                                                                )}
                                                                                href={`/buy/location/${item.slug}`}
                                                                            >
                                                                                {
                                                                                    item.title
                                                                                }
                                                                            </MyLink>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))}
                                                    </>
                                                ) : (
                                                    <>
                                                        {locations &&
                                                            locations
                                                                .slice(0, 10)
                                                                .map((item) => (
                                                                    <Menu.Item
                                                                        as="li"
                                                                        key={
                                                                            item.title
                                                                        }
                                                                        className="pb-[0.8rem]"
                                                                    >
                                                                        {({
                                                                            active,
                                                                        }) => (
                                                                            <MyLink
                                                                                className={classNames(
                                                                                    active
                                                                                        ? "border-b border-[#E3C344]"
                                                                                        : "",
                                                                                    "pb-[0.2rem]"
                                                                                )}
                                                                                href={`/rent/location/${item.slug}`}
                                                                            >
                                                                                {
                                                                                    item.title
                                                                                }
                                                                            </MyLink>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))}
                                                    </>
                                                )}
                                            </ul>
                                            {item && item.name != "Rent" ? (
                                                <p className="pb-[0.8rem] text-[0.6rem] text-[#202020] font-source-sans">
                                                    <MyLink
                                                        className={
                                                            (router.pathname ==
                                                            "/buy"
                                                                ? "border-b border-[#E3C344]"
                                                                : "",
                                                            "pb-[0.2rem] hover:border-b hover:border-[#E3C344]")
                                                        }
                                                        href="/buy"
                                                    >
                                                        View All
                                                    </MyLink>
                                                </p>
                                            ) : (
                                                <p className="pb-[0.8rem] text-[0.6rem] text-[#202020] font-source-sans">
                                                    <MyLink
                                                        className={
                                                            (router.pathname ==
                                                            "/rent"
                                                                ? "border-b border-[#E3C344]"
                                                                : "",
                                                            "pb-[0.2rem] hover:border-b hover:border-[#E3C344]")
                                                        }
                                                        href="/rent"
                                                    >
                                                        View All
                                                    </MyLink>
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <ul>
                                                <p className="pb-7 tracking-[0.3rem] uppercase text-[0.6rem] text-[#202020] font-source-sans font-bold">
                                                    Edits
                                                </p>
                                                {item && item.name != "Rent" ? (
                                                    <>
                                                        {edits &&
                                                            edits
                                                                .slice(0, 10)
                                                                .map((item) => (
                                                                    <Menu.Item
                                                                        as="li"
                                                                        key={
                                                                            item.title
                                                                        }
                                                                        className="pb-[0.8rem] text-[0.6rem] font-source-sans"
                                                                    >
                                                                        {({
                                                                            active,
                                                                        }) => (
                                                                            <MyLink
                                                                                className={classNames(
                                                                                    active
                                                                                        ? "border-b border-[#E3C344]"
                                                                                        : "",
                                                                                    "pb-[0.2rem]"
                                                                                )}
                                                                                href={`/buy/edit/${item.slug}`}
                                                                            >
                                                                                {
                                                                                    item.title
                                                                                }
                                                                            </MyLink>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))}
                                                    </>
                                                ) : (
                                                    <>
                                                        {edits &&
                                                            edits
                                                                .slice(0, 10)
                                                                .map((item) => (
                                                                    <Menu.Item
                                                                        as="li"
                                                                        key={
                                                                            item.title
                                                                        }
                                                                        className="pb-[0.8rem] text-[0.6rem] font-source-sans"
                                                                    >
                                                                        {({
                                                                            active,
                                                                        }) => (
                                                                            <MyLink
                                                                                className={classNames(
                                                                                    active
                                                                                        ? "border-b border-[#E3C344]"
                                                                                        : "",
                                                                                    "pb-[0.2rem]"
                                                                                )}
                                                                                href={`/rent/edit/${item.slug}`}
                                                                            >
                                                                                {
                                                                                    item.title
                                                                                }
                                                                            </MyLink>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))}
                                                    </>
                                                )}
                                            </ul>
                                            {item && item.name != "Rent" ? (
                                                <p className="pb-[0.8rem] text-[0.6rem] text-[#202020] font-source-sans">
                                                    <MyLink
                                                        className={
                                                            (router.pathname ==
                                                            "/buy"
                                                                ? "border-b border-[#E3C344]"
                                                                : "",
                                                            "pb-[0.2rem] hover:border-b hover:border-[#E3C344]")
                                                        }
                                                        href="/buy"
                                                    >
                                                        View All
                                                    </MyLink>
                                                </p>
                                            ) : (
                                                <p className="pb-[0.8rem] text-[0.6rem] text-[#202020] font-source-sans">
                                                    <MyLink
                                                        className={
                                                            (router.pathname ==
                                                            "/rent"
                                                                ? "border-b border-[#E3C344]"
                                                                : "",
                                                            "pb-[0.2rem] hover:border-b hover:border-[#E3C344]")
                                                        }
                                                        href="/rent"
                                                    >
                                                        View All
                                                    </MyLink>
                                                </p>
                                            )}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </li>
            ))}
            <li className="mx-5 border-b border-transparent overflow-hidden lg:pb-[0.2rem] w-full lg:w-auto">
                <Menu>
                    {({ open }) => (
                        <>
                            {header != "default" ? (
                                <Menu.Button
                                    className={classNames(
                                        open ||
                                            router.pathname ==
                                                "/edits/[slug]" ||
                                            router.pathname == "/edits"
                                            ? "border-b border-[#E3C344] text-[#202020] lg:text-white"
                                            : "text-[#202020] lg:text-[#B3B5AC] lg:hover:border-b lg:hover:border-[#E3C344] lg:hover:text-white",
                                        "tracking-[0.3rem] uppercase text-[0.5rem] pb-[0.2rem] mr-[-0.3rem] font-source-sans font-semibold"
                                    )}
                                >
                                    Edits
                                </Menu.Button>
                            ) : (
                                <Menu.Button
                                    className={classNames(
                                        open ||
                                            router.pathname ==
                                                "/edits/[slug]" ||
                                            router.pathname == "/edits"
                                            ? "border-b border-[#E3C344] text-[#000000] lg:text-black"
                                            : "text-[#202020] lg:text-[#202020] lg:hover:border-b lg:hover:border-[#E3C344] lg:hover:text-black",
                                        "tracking-[0.3rem] uppercase text-[0.5rem] pb-[0.2rem] mr-[-0.3rem] font-source-sans font-semibold"
                                    )}
                                >
                                    Edits
                                </Menu.Button>
                            )}
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-500"
                                enterFrom="transform opacity-0 scale-100"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-100"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-100"
                            >
                                <Menu.Items className="lg:grid lg:grid-cols-3 origin-top relative lg:top-[112px] lg:absolute lg:left-0  w-full shadow-lg bg-white focus:outline-none p-5 lg:p-10 tracking-[0.1rem] uppercase text-[0.5rem] text-[#202020] font-semibold">
                                    <div>
                                        <ul>
                                            {edits &&
                                                edits
                                                    .slice(0, 10)
                                                    .map((item) => (
                                                        <Menu.Item
                                                            as="li"
                                                            key={item.id}
                                                            className="pb-[0.8rem] text-[0.6rem] font-source-sans"
                                                        >
                                                            {({ active }) => (
                                                                <MyLink
                                                                    className={classNames(
                                                                        active
                                                                            ? "border-b border-[#E3C344]"
                                                                            : "",
                                                                        "pb-[0.2rem]"
                                                                    )}
                                                                    href={`/edits/${item.slug}`}
                                                                >
                                                                    {item.title}
                                                                </MyLink>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                        </ul>
                                        <p className="pb-[0.8rem] text-[0.6rem] text-[#202020] font-source-sans">
                                            <MyLink
                                                className={
                                                    (router.pathname == "/edits"
                                                        ? "border-b border-[#E3C344]"
                                                        : "",
                                                    "pb-[0.2rem] hover:border-b hover:border-[#E3C344]")
                                                }
                                                href="/edits"
                                            >
                                                View All
                                            </MyLink>
                                        </p>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </li>
        </ul>
    );
}
