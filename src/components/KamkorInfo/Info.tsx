import styles from './info.module.css'

const Info =()=>{
    return(
        <div className='main'>
            <div className={styles.dashMain}/>
            <h2 className={styles.infoHeader}>
            КАМКОР В ЦИФРАХ
            </h2>
            <p className={styles.infoSubHeader}>
            Показатели ТОО «Қамқор Вагон» за 2021 год
            </p>
            <div className={styles.infoCardContainer}>
                <div className={styles.infoCard}>
                    <div className={styles.infoCardHeader}>
                        <h3 className={styles.number}>617</h3>
                        <p>ЕДИНИЦ</p>
                    </div>
                    <p className={styles.infoCardText}>
                        сервисного обслуживания<br/>  локомотивов за 2021 год
                    </p>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoCardHeader}>
                        <h3 className={styles.number}> 5 493</h3>
                        <p>ЕДИНИЦ</p>
                       
                    </div>
                    <p className={styles.infoCardText}>
                        технического обслуживания <br/> локомотивов за 2021 год
                    </p>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoCardHeader}>
                        <h3 className={styles.number}>56</h3>
                        <p>ЕДИНИЦ</p>
                        
                    </div>
                    <p className={styles.infoCardText}>
                    капитального ремонта <br/> локомотивов за 2021 год
                    </p>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoCardHeader}>
                        <h3 className={styles.number}>14 367</h3>
                        <p>вагонов</p>
                
                    </div>
                    <p className={styles.infoCardText}>
                    отремонтировано за 2021 год
                    </p>
                </div>
            </div>
            <div className={styles.carousel}>
                <button className={` ${styles.btnActive}`}/>
                <button className={`${styles.carouselBtn}`}/>
                <button className={styles.carouselBtn}/> 
             </div>
             <div className={styles.dashMain}/>
            <h2 className={styles.infoHeader}>
                Наши услуги
            </h2>
            <p className={styles.infoSubHeader}>
                Основные виды деятельности компании
            </p>
            <div className={styles.offersCardContainer}>
                <div className={`${styles.offersCard}`}>
                    <img src={require("../../assets/info1.png")} className={styles.infoImg}/>
                    <p className={styles.offerText}>Деповской ремонт <br/> грузовых вагонов (ДР)</p>
                    <div className={styles.infoCardEnd}/>
                </div>
                <div className={styles.offersCard}>
                    <img src={require("../../assets/info2.png")} className={styles.infoImg}/>
                    <p className={styles.offerText}>Капитальный ремонт <br/> грузовых вагонов (КР)</p>
                <div className={styles.infoCardEnd}/>
                </div>
                <div className={styles.offersCard}>
                    <img src={require("../../assets/info3.png")} className={styles.infoImg}/>
                    <p className={styles.offerText}>Капитальный ремонт<br/> с продлением срока службы <br/> грузовых вагонов (КРП)</p>
                    <div className={styles.infoCardEnd}/>
                </div>
                <div className={styles.offersCard}>
                    <img src={require("../../assets/info4.png")} className={styles.infoImg}/>
                    <p className={styles.offerText}>Текущий отцепочный <br/> ремонт грузовых вагонов</p>
                    <div className={styles.infoCardEnd}/>
                </div>
               
            </div>
            <div className={styles.carousel}>
                <button className={` ${styles.btnActive}`}/>
                <button className={`${styles.carouselBtn}`}/>
                <button className={styles.carouselBtn}/> 
             </div>
        </div>

    
    )
}


export default Info