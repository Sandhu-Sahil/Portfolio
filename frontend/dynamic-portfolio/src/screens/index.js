import Footer from "../components/footer";
import NavigationBar from "../components/navigationBar";
import ResponsiveNavbar from "../components/responsiveNavbar";

function LayoutMain(props){
    return(
        <>
            <NavigationBar />
            <ResponsiveNavbar />
                {props.children}
            <Footer />
        </>
    )
}

export default LayoutMain;