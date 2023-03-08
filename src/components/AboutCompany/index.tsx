import styles from './aboutCompany.module.css'


const AboutCompany =()=>{
    return (
        <section className={`${styles.aboutCompanyContainer} main`}>
            <span className={styles.borderTextLeft}></span>
            <span className={styles.borderTextRight}>Қамқор Вагон</span>
            <div className="dashMain"/>
            <h1 className={styles.header}> 
                О КОМПАНИИ
            </h1>
            <p className={styles.subHeader}>
            ТОО «Қамқор Вагон» (далее - Товарищество) образовано в 2010 году и на сегодняшний день является ведущей <br/> организацией на рынке Республики Казахстан в части предоставления услуг по ремонту грузовых вагонов, имеющее <br/> филиальную сеть из шести вагоноремонтных предприятий и одной вагоноколесной мастерской.
            </p>
            <div className={styles.photosContainer}>
                <img src={require("../../assets/companyPhoto1.png")} className={styles.photoF}/>
                <img src={require("../../assets/companyPhoto2.png")} className={styles.photoS}/>
            </div>
            <div className="dashMainLeft"/>
            <h1 className={styles.header} style={{textAlign:"start"}}>География присутствия</h1>
            <p className={styles.subHeader2}>
                ТОО «Қамқор Вагон» в Казахстане
            </p>
            <div className={styles.mapContainer}>
                <img src={require("../../assets/map.png")} className={styles.map}/>
            </div>

        </section>
        
    )
}

export default AboutCompany