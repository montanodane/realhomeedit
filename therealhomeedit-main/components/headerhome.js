import Menu1 from "../components/menu1";
import Menu2 from "../components/menu2";
import Image from "next/image";
import Logo from "../public/images/the-real-home-edit-logo-light.svg";
import IconSearch from "../public/images/icons/icon-search.svg";
import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";

export default function HeaderHome({ locations, edits }) {
    const header = "home";
    return (
        <header className="absolute top-0 flex items-center justify-between text-[#B4B5AC] h-28 w-full z-20 border-b border-[#707070] lg:px-10 px-5">
            <Disclosure>
                {({ open }) => (
                    <>
                        <nav className="hidden lg:block sm:flex-1 flex-none">
                            <Menu1
                                locations={locations}
                                edits={edits}
                                header={header}
                            />
                        </nav>
                        <div className="flex lg:mx-8 mx-0 ">
                            <Image
                                src={Logo}
                                alt="Picture of the author"
                                height={40}
                                width={280}
                            />
                        </div>
                        <div className="flex sm:flex-1 flex-none items-center justify-end border-b border-transparent lg:pb-[0.2rem] overflow-hidden">
                            <nav className="hidden lg:block ">
                                <Menu2 edits={edits} header={header} />
                            </nav>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-500"
                            enterFrom="transform opacity-0 scale-100"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-100"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-100"
                        >
                            <Disclosure.Panel className="absolute top-[112px] left-0 right-0 bg-white w-full lg:hidden">
                                <nav className="py-10">
                                    <Menu1
                                        locations={locations}
                                        edits={edits}
                                    />
                                    <Menu2 edits={edits} />
                                </nav>
                            </Disclosure.Panel>
                        </Transition>
                        <Disclosure.Button className="lg:hidden sm:flex-1 flex ml-10 justify-end">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </Disclosure.Button>
                    </>
                )}
            </Disclosure>
        </header>
    );
}
