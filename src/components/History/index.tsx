import styles from './history.module.css'
import { useState } from 'react'
const History =()=>{
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 5
    // const partners = [
    //     {url:"http://localhost:3000/partner1.png"},
    //     {url:"http://localhost:3000/partner2.png"},
    //     {url:"http://localhost:3000/partner3.png"},
    //     {url:"http://localhost:3000/partner4.png"},
    //     {url:"http://localhost:3000/partner5.png"},
    //     {url:"http://localhost:3000/partner5.png"},
    //     {url:"http://localhost:3000/partner4.png"},
    //     {url:"http://localhost:3000/partner3.png"},
    //     {url:"http://localhost:3000/partner2.png"},
    //     {url:"http://localhost:3000/partner1.png"},
      
    // ]

    const paginate=(array:Array<any>)=>{
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return array.slice(startIndex,endIndex)
    }


    const changePage= (page:number)=>{
        setCurrentPage(page)
    }


    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div>
                <img src={require('../../assets/historyCompany.png')} />
                <div className='dashMainLeft'/>
                </div>
             
            
                <div className={styles.containerContent}>
                    <div className={styles.dash}/>
                    <h1 className={styles.header}>о компании</h1>
                    <p className={styles.text}>ТОО «Қамқор Вагон» (далее - Товарищество) образовано в 2010 году и на сегодняшний день является ведущей организацией на рынке Республики Казахстан в части предоставления услуг по ремонту грузовых вагонов, имеющее филиальную сеть из шести вагоноремонтных предприятий и одной вагоноколесной мастерской.</p>

                </div>
            </div>
             <div className={styles.dateSection} >
            <h1 className={`${styles.header} ${styles.dateHeader}`}>
                Ключевые даты
            </h1>
                <div className={styles.line}>
                    <div className={styles.dateCardContainer}>
                        <div className={styles.dateCard}>
                            <h1 className={styles.dateCardHeader}>2022</h1>
                            <p className={styles.dateCardText}>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта</p>
                        </div>
                        <div className={styles.dateCard}>
                            <h1 className={styles.dateCardHeader}>2022</h1>
                            <p className={styles.dateCardText}>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта</p>
                        </div>
                        <div className={styles.dateCard}>
                            <h1 className={styles.dateCardHeader}>2022</h1>
                            <p className={styles.dateCardText}>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel" style={{paddingBottom:"74px"}}>
                    <button className={`${(currentPage==1)?'btnActive':'carouselBtn'}`} onClick={()=>changePage(1)}/>
                    <button className={`${(currentPage==2)?'btnActive':'carouselBtn'}`}  onClick={()=>changePage(2)}/>
                    <button className={`${(currentPage==3)?'btnActive':'carouselBtn'}`}  onClick={()=>changePage(3)}/>
                </div>
        </div>
    )
}


export default History