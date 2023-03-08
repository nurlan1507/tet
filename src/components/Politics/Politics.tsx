import styles from './poitics.module.css'

const Politics =()=>{
    return (
    <section className={styles.section}>
        <div className={styles.magazine}>
        <div className={styles.contentContainer}>
            <div className={styles.imageContainer}>
                <img src={require("../../assets/politics.png")} className={styles.politicsImg}/>
            </div>
            <div className={styles.containerContent}>
                <div className='dashMainLeft'></div>
                <h1 className={styles.header} style={{paddingTop:"30px"}}>ПОЛИТИКА УСТОЙЧИВОГО <br/> РАЗВИТИЯ ТОО <br/>"КАМКОР ВАГОН"</h1>
                <p className={styles.text}>ESG (Environmental, Social and Corporate Governance)</p>
                <button className={styles.btn}>ЧИТАТЬ ДОКУМЕНТ</button>
            </div>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.containerContent}>
                <div className='dashMainLeft'></div>
                <h1 className={styles.header} style={{paddingTop:"30px"}}>Миссия компании</h1>
                <p className={styles.text}>Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе основную информацию о деятельности Вашей компании. </p>
                <button className={styles.btn}>ЧИТАТЬ ДОКУМЕНТ</button>
            </div>
            <div className={styles.imageContainer}>
            <img src={require("../../assets/politics.png")} className={styles.politicsImg}/>
            </div>
        </div>

        </div>
      

        <div className='dashMain'></div>
        <div className={styles.companyGoals}>
            <h1 className={`${styles.headerGoals} ${styles.header}`}>Цели компании:</h1>
            <div className={styles.goalList}>
                <div className={styles.goalCard}>
                    <img src={require('../../assets/goal.png')}/>
                    <p className={styles.goalCardText}>Это текст о компании.<br/> Он необходим для дальнейшего <br></br> продвижения </p>
                </div>
                <div className={styles.goalCard}>
                    <img src={require('../../assets/goal.png')}/>
                    <p className={styles.goalCardText}>Это текст о компании.<br/> Он необходим для дальнейшего <br></br> продвижения </p>
                </div>
                <div className={styles.goalCard}>
                    <img src={require('../../assets/goal.png')}/>
                    <p className={styles.goalCardText}>Это текст о компании.<br/> Он необходим для дальнейшего <br></br> продвижения </p>
                </div>
            </div>
        </div>
    </section>)
}

export default Politics