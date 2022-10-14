// import Footer from "../components/footer";
// import NavigationBar from "../components/navigationBar";
// import ResponsiveNavbar from "../components/responsiveNavbar";

function LayoutMainAdmin(props){
    return(
        <>
            {/* <NavigationBar />
            <ResponsiveNavbar />
                {props.children}
            <Footer /> */}
            Layout Admin
            {props.children}
        </>
    )
}

export default LayoutMainAdmin;