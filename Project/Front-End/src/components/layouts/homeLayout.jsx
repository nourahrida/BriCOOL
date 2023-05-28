import NavBar from "../controls/navBar";
import Footer from "../controls/footer";
import React ,{lazy , Suspense} from "react";

const LazyNavBar = lazy(() => import("../controls/navBar"));
const HomeLayout = ({children,socket}) => {
    return (
        <Suspense fallback={null}>
            <LazyNavBar socket={socket} />
            {children}
            <Footer />
        </Suspense>
    );
};
export default HomeLayout;