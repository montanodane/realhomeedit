import ReactMarkdown from "react-markdown";

export default function About({ about }) {
    return (
        <section className="newly-listed w-full relative bg-white text-[#202020] py-20">
            <div className="xl:container xl:mx-auto">
                <div className="flex flex-col justify-center items-center flex-wrap w-full lg:px-10 px-5 ">
                    <h1 className="">{about.title}</h1>
                    <div className="mb-10 content text-center">
                        <ReactMarkdown children={about.content} />
                    </div>
                </div>
            </div>
        </section>
    );
}
