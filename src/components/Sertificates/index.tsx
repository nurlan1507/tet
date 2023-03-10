import styles from './sertificates.module.css'
import { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Sertificates=()=>{
    const [itemsPerPage, setItemPerPage] = useState(6)   
    useEffect(()=>{
        if(window.innerWidth >= 1366){
            setItemPerPage(6)
        }
        else if(window.innerWidth <= 1510 && window.innerWidth > 1146 ){
            setItemPerPage(5)
        }
        else if(window.innerWidth <= 1146 && window.innerWidth > 957){
            setItemPerPage(4)
        }
        else if(window.innerWidth <= 957 && window.innerWidth>850){
            setItemPerPage(2)
        }
        else if(window.innerWidth <= 850){
            setItemPerPage(1)
        }
        
    },[window.innerWidth ])
    const Sertificates = [
        {url:"http://localhost:3000/Group 9772.png"},
        {url:"http://localhost:3000/Group 9772.png"},
        {url:"http://localhost:3000/Group 9772.png"},
        {url:"http://localhost:3000/Group 9772.png"},
        {url:"http://localhost:3000/Group 9772.png"},
        {url:"http://localhost:3000/Group 9772.png"},
        {url:"http://localhost:3000/Group 9772.png"},
    ]
     

    window.matchMedia("(max-width: 850px)").addEventListener('change',()=>{
        console.log("LLLL")
        setItemPerPage(1)
    })
    window.matchMedia("(max-width:1510px)").addEventListener('change', ()=>{setItemPerPage(5)})
    window.matchMedia("(max-width:1140px)").addEventListener('change', ()=>{setItemPerPage(4)})
    window.matchMedia("(min-width:1285)").addEventListener('change', ()=>{setItemPerPage(6)})
        

    const [currentPage, setCurrentPage] = useState(1)


    const paginate=(array:Array<any>)=>{
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return array.slice(startIndex,endIndex)
    }


    const changePage= (page:number)=>{
        setCurrentPage(page)
    }

    const buttons = Array.from({length:Math.ceil(Sertificates.length/itemsPerPage)} , (_,index)=>(
        <button className={`${(currentPage==index+1)?`${styles.btnActive}`:`${styles.carouselBtn}`}`} onClick={()=>changePage(index+1)}/>
    ))
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };        
    return (
        <section className='main'>
            <h1 className='header'>
            Сертификаты
            </h1>
            <p className='subHeader'>
            Сертификаты и лицензии
            </p>
            
            <div className={styles.sertificates}>
                {paginate(Sertificates).map((s)=><img src={`${s.url}`} className={styles.sertificate}/>)}
            </div>
            
           
            <div className="carousel" style={{marginBottom:"120px"}}>
                {buttons}
             </div>
        </section>
        )
}


export default Sertificates