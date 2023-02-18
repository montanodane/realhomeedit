import Layout from "../layouts/home";
import Seo from "../components/seo";
import Banner from "../components/banner";
import About from "../components/about";
import FeatureEdit from "../components/featureedit";
import NewlyListed from "../components/newlylisted";
import Cta from "../components/cta";
import EditsGallery from "../components/editsgallery";
import config from "../configs";

export default function Home({
    locations,
    edits,
    newlylisted,
    homepagesettings,
    sociallinks,
}) {
    const seo = {
        ...homepagesettings.SEO,
    };

    const about = {
        ...homepagesettings.About,
    };

    const galleryEdit1 = {
        ...homepagesettings.edits_gallery.edit_1,
    };
    const galleryEdit2 = {
        ...homepagesettings.edits_gallery.edit_2,
    };
    const galleryEdit3 = {
        ...homepagesettings.edits_gallery.edit_3,
    };
    const galleryEdit4 = {
        ...homepagesettings.edits_gallery.edit_4,
    };
    const galleryEdit5 = {
        ...homepagesettings.edits_gallery.edit_5,
    };
    const galleryEdit6 = {
        ...homepagesettings.edits_gallery.edit_6,
    };

    const editGalleryItems = [];

    editGalleryItems.push(galleryEdit1);
    editGalleryItems.push(galleryEdit2);
    editGalleryItems.push(galleryEdit3);
    editGalleryItems.push(galleryEdit4);
    editGalleryItems.push(galleryEdit5);
    editGalleryItems.push(galleryEdit6);

    const shareImage = {
        ...seo.share_image.formats.small,
    };

    const seoSettings = {
        metaTitle: `${seo.page_title}`,
        metaDescription: `${seo.meta_description}`,
        shareImage: `${shareImage.url}`,
    };

    return (
        <Layout locations={locations} edits={edits} sociallinks={sociallinks}>
            <Seo seoSettings={seoSettings} />
            <Banner homepagesettings={homepagesettings} />
            <About about={about} />
            <FeatureEdit homepagesettings={homepagesettings} />
            <EditsGallery edits={editGalleryItems} />
            <Cta />
            <NewlyListed newlylisted={newlylisted} />
        </Layout>
    );
}

export async function getStaticProps() {
    const newlylisted_res = await fetch(
        `${config.STRAPI_URL}/listings/?newly_listed=true&_limit=9`
    );
    const newlylisted = await newlylisted_res.json();

    const homepagesettings_res = await fetch(`${config.STRAPI_URL}/homepage`);
    const homepagesettings = await homepagesettings_res.json();

    return {
        props: { newlylisted, homepagesettings },
        revalidate: 1,
    };
}
