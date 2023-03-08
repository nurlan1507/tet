import '../../App.css'
import styles from './press.module.css'
import PressCente from '../../models/PressCenter'
import { useEffect, useState } from 'react'
const PressCenter =()=>{
    const [itemsPerPage, setItemPerPage] = useState(3)    
    useEffect(()=>{
        if(window.innerWidth>=1800){
            setItemPerPage(6)
        }
        if(window.innerWidth <= 1366 && window.innerWidth > 1284){
            setItemPerPage(3)
        }
        if(window.innerWidth <= 1284 && window.innerWidth > 850){
            setItemPerPage(3)
        }else{
            setItemPerPage(1)
        }
    })
    window.matchMedia("(max-width: 850px)").addEventListener('change',()=>{
        console.log("LLLL")
        setItemPerPage(1)   
    })
    window.matchMedia("(max-width:1284px)").addEventListener('change', ()=>{setItemPerPage(3)})
    window.matchMedia("(max-width:1800px)").addEventListener('change', ()=>{setItemPerPage(6)})
        
        

    const [currentPage, setCurrentPage] = useState(1)
    var pressCenters = [
        new PressCente("Заверше ремонт Теміржол жөндеу","Подразделения ТОО «Теміржол жөндеу» завершают капитальный ремонт железнодорожного пути на северных участках.","http://localhost:3000/press.png" ),
        new PressCente("Теміржол жөндеу","Подразделения ТОО «Теміржол жөндеу» завершают капитальный ремонт железнодорожного пути на северных участках.","http://localhost:3000/press.png" ),
        new PressCente("Завершен капитальный <br/> ремонт Теміржол жөндеу","Подразделения ТОО «Теміржол жөндеу» завершают капитальный ремонт железнодорожного пути на северных участках.","http://localhost:3000/press.png" ),
        new PressCente("Завершен капитальный","Подразделения ТОО «Теміржол жөндеу» завершают капитальный ремонт железнодорожного пути на северных участках.","http://localhost:3000/press.png" ),
        new PressCente("Завершенеміржол жөндеу","Подразделения ТОО «Теміржол жөндеу» завершают капитальный ремонт железнодорожного пути на северных участках.","http://localhost:3000/press.png" ),
        new PressCente("Завершен капитальный <br/> ремонт Теміржол жөндеу","Подразделения ТОО «Теміржол жөндеу» завершают капитальный ремонт железнодорожного пути на северных участках.","http://localhost:3000/press.png" ),
        new PressCente("Завершен капитальный","Подразделения ТОО «Теміржол жөндеу» завершают капитальный ремонт железнодорожного пути на северных участках.","http://localhost:3000/press.png" ),
        new PressCente("Завершенеміржол жөндеу","Подразделения ТОО «Теміржол жөндеу» завершают капитальный ремонт железнодорожного пути на северных участках.","http://localhost:3000/press.png" ),
        new PressCente("Завершен капитальный <br/> ремонт Теміржол жөндеу","Подразделения ТОО «Теміржол жөндеу» завершают капитальный ремонт железнодорожного пути на северных участках.","http://localhost:3000/press.png" ),
        new PressCente("Завершен капитальный","Подразделения ТОО «Теміржол жөндеу» завершают капитальный ремонт железнодорожного пути на северных участках.","http://localhost:3000/press.png" ),
        new PressCente("Завершенеміржол жөндеу","Подразделения ТОО «Теміржол жөндеу» завершают капитальный ремонт железнодорожного пути на северных участках.","http://localhost:3000/press.png" ),

    ]

    const paginate=(array:Array<any>)=>{
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return array.slice(startIndex,endIndex)
    }


    const changePage= (page:number)=>{
        setCurrentPage(page)
    }

    const buttons = Array.from({length:Math.ceil(pressCenters.length/itemsPerPage)} , (_,index)=>(
        <button className={`${(currentPage==index+1)?`${styles.btnActive}`:`${styles.carouselBtn}`}`} onClick={()=>changePage(index+1)}/>
    ))
    return(
        <section className='main'>
            <h1 className='header'>Пресс центр</h1>
            <p className='subHeader'> Новости, события, объявления</p>
                <div className={styles.pressCenters}>
                    {paginate(pressCenters).map((center)=>
                    <div className={styles.pressCenter}>
                    <div className={styles.imageContainer}>
                        <img src={`${center.url}`} className={styles.pressCenterImg}/>
                        </div>
                        <div className={styles.pressCenterContent}>
                        <h3 className={styles.pressCenterTitle}>{center.title}</h3>
                        <p className={styles.pressCenterText}>
                              {center.description}
                        </p>
                        </div>
                    </div>
                )}
            
            </div>
            
            <div className="carousel" >
                {buttons}
             </div>
            <div className="dashMain"/>
        </section>
        
    )
    
}

export default PressCenter