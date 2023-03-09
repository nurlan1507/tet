import styles from './sertificates.module.css'
import { useEffect, useState } from 'react'
const Sertificates=()=>{
    const [itemsPerPage, setItemPerPage] = useState(6)   
    useEffect(()=>{
        if(window.innerWidth <= 850){
            setItemPerPage(1)
        }
        if(window.innerWidth <= 1284 && window.innerWidth > 850 ){
            setItemPerPage(5)
        }
        if(window.innerWidth >= 1366){
            setItemPerPage(6)
        }
    },[])
    const Sertificates = [
        {url:"http://localhost:3000/Group 9772.png"},
        {url:"http://localhost:3000/Group 9772.png"},
        {url:"http://localhost:3000/Group 9772.png"},
        {url:"http://localhost:3000/Group 9772.png"},
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
    window.matchMedia("(max-width:1284px)").addEventListener('change', ()=>{setItemPerPage(5)})

        

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