import { FC } from "react";
import Banner from "../../components/Banner/Banner";
import Info from "../../components/KamkorInfo/Info";
import AboutCompany from "../../components/AboutCompany";
import PressCenter from "../../components/PressCenter";
import Sertificates from "../../components/Sertificates";
import Footer from "../../components/Footer";
const Home = () => {
    return  (
        <> 
        <Banner/>
        <Info/>
        <AboutCompany/>
        <PressCenter/>
        <Sertificates/>
       
        </>
       
    )

    ;
}
export default Home;