import Link from "next/link";

export default function Cta() {
    return (
        <section className="w-full relative bg-[#202020] text-white py-10 px-10">
            <div className="xl:container xl:mx-auto flex justify-center">
                <div className="cta flex items-center justify-center flex-col max-w-[790px] text-center">
                    <h2>
                        T.RHE sells the most incredible design-led homes across
                        urban and rural locations in New York
                    </h2>
                    <Link href="/sell">
                        <a className="button button-outline-white mt-0">
                            Value My Property
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}
