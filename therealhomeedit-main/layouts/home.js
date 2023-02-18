import Header from "../components/headerhome";
import Footer from "../components/footer";

export default function Layout({ locations, children, edits, sociallinks }) {
    return (
        <div className="relative flex flex-col items-between justify-between min-h-screen text-[#202020]">
            <Header locations={locations} edits={edits}></Header>
            <main className="flex flex-1 w-full flex-col">{children}</main>
            <Footer sociallinks={sociallinks}></Footer>
        </div>
    );
}
