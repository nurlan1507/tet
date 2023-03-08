import styles from "./ourPartners.module.css"
import { useState } from "react"

const OurPartners = () =>{
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 5
    const partners = [
        {url:"http://localhost:3000/partner1.png"},
        {url:"http://localhost:3000/partner2.png"},
        {url:"http://localhost:3000/partner3.png"},
        {url:"http://localhost:3000/partner4.png"},
        {url:"http://localhost:3000/partner5.png"},
        {url:"http://localhost:3000/partner5.png"},
        {url:"http://localhost:3000/partner4.png"},
        {url:"http://localhost:3000/partner3.png"},
        {url:"http://localhost:3000/partner2.png"},
        {url:"http://localhost:3000/partner1.png"},
      
    ]

    const paginate=(array:Array<any>)=>{
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return array.slice(startIndex,endIndex)
    }


    const changePage= (page:number)=>{
        setCurrentPage(page)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>наши ПАРТЕНРЫ</h1>
            <p className={styles.subHeader} style={{textAlign:"start"}}>С кем мы сотрудничаем</p>
            <div className={styles.partnersSlider}>
                {paginate(partners).map((partner)=>
                 <div className={styles.partnerCard}>
                    <img src={partner.url} className={styles.partnerLogo}/>
                 </div>
                )}
            </div>
            <div className="carousel" style={{paddingBottom:"64px"}}>
                <button className={`${(currentPage==1)?'btnActive':'carouselBtn'}`} onClick={()=>changePage(1)}/>
                <button className={`${(currentPage==2)?'btnActive':'carouselBtn'}`}  onClick={()=>changePage(2)}/>
                <button className={`${(currentPage==3)?'btnActive':'carouselBtn'}`}  onClick={()=>changePage(3)}/>
            </div>
        </div>
    )
}


export default OurPartners