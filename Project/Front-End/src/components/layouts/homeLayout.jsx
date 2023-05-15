import NavBar from "../controls/navBar";
import Footer from "../controls/footer";

export default function HomeLayout({children}) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}