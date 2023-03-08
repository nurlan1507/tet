import styles from "./ourPartners.module.css"
import { useState } from "react"

const OurPartners = () =>{
    const [currentPage, setCurrentPage] = useState<number>(1)
    const partners = [
        {url:"../../assets/partner2.png"},
        {url:"../../assets/partner3.png"},
        {url:"../../assets/partner4.png"},
        {url:"../../assets/partner5.png"},
        {url:"../../assets/partner2.png"},
        {url:"../../assets/partner2.png"},
        {url:"../../assets/partner3.png"},
        {url:"../../assets/partner4.png"},
        {url:"../../assets/partner5.png"},
        {url:"../../assets/partner2.png"}
    ]




    return (
        <div>
            <h1 className="header">наши ПАРТЕНРЫ</h1>
            <p className="infoSubHeader" style={{textAlign:"start"}}>С кем мы сотрудничаем</p>
            <div className={styles.partnersSlider}>
                {partners.map((partner)=>
                 <div className={styles.partnerCard}>
                    <img src={require(partner.url)} className={styles.partnerLogo}/>
                 </div>
                )}
            </div>
            <div className="carousel"/>
        </div>
    )
}


export default OurPartners