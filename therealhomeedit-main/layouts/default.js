import Header from "../components/headerdefault";
import Footer from "../components/footer";

export default function Layout({ children, locations, edits, sociallinks }) {
    return (
        <div className="flex flex-col items-between justify-between min-h-screen text-[#202020]">
            <Header locations={locations} edits={edits}></Header>
            <main className="flex flex-1 w-full flex-col">{children}</main>
            <Footer sociallinks={sociallinks}></Footer>
        </div>
    );
}
