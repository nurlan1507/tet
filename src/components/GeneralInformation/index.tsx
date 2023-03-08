import OurPartners from '../OurPartners'
import styles from './genInfo.module.css'

const GeneralInforamation =()=>{

    return (
        <section>
            <div className={styles.container}>
                <div>
                <img src={require('../../assets/generalInformation.png')} />
                <div className='dashMainLeft'/>
                </div>
             
                
                <div className={styles.containerContent}>
                    <div className={styles.dash}/>
                    <h1 className={styles.header}>о компании</h1>
                    <p className={styles.text}>ТОО «Қамқор Вагон» (далее - Товарищество) образовано в 2010 году и на сегодняшний день является ведущей организацией на рынке Республики Казахстан в части предоставления услуг по ремонту грузовых вагонов, имеющее филиальную сеть из шести вагоноремонтных предприятий и одной вагоноколесной мастерской.</p>

                </div>
            </div>
            <div className={styles.kamkorStatsContainer}>
                <h1 className={styles.statsHeader} style={{textAlign:"start"}}>КАМКОР В ЦИФРАХ</h1>
                <p className={styles.statsText}>Факторы привлекательности:</p>
                <div className={styles.kamkorStats}>
                    <div className={styles.kamkorCard}>
                        <h2 className={styles.cardHeader}>01</h2>
                        <h3 className={styles.cardSubHeader}>7 филиалов</h3>
                        <p className={styles.text}>Разветвленная сеть, состоящая из 7 филиалов</p>
                    </div>
                    <div className={styles.kamkorCard}>
                        <h2 className={styles.cardHeader}>02</h2>
                        <h3 className={styles.cardSubHeader}> Мастерские</h3>
                        <p className={styles.text}>Наличие Вагоноколесных мастерских в городах Павлодар, Усть-Каменогорск и Алматы</p>
                    </div>
                    <div className={styles.kamkorCard}>
                        <h2 className={styles.cardHeader}>03</h2>
                        <h3 className={styles.cardSubHeader}>Комплаенс</h3>
                        <p className={styles.text}>РРазработан Внешний акт антимонопольного комплаенса, подтверждающий соответствие деятельности компании нормам законодательства Республики Казахстан в области защиты конкуренции</p>
                    </div>
                    <div className={styles.kamkorCard}>
                        <h2 className={styles.cardHeader}>04</h2>
                        <h3 className={styles.cardSubHeader}>Менеджмента качества</h3>
                        <p className={styles.text}>Наличие Интегрированной системы менеджмента качества ISO 9001:2016, безопасности труда и охраны здоровья ISO 45001:2019, экологии ISO 14001:2016 и энергоменеджмента ISO 50001:2019</p>
                    </div>
                    <div className={styles.kamkorCard}>
                        <h2 className={styles.cardHeader}>05</h2>
                        <h3 className={styles.cardSubHeader}>Аккредитация</h3>
                        <p className={styles.text}>Аккредитованные цеха неразрушающего контроля</p>
                    </div>
                    <div className={styles.kamkorCard}>
                        <h2 className={styles.cardHeader}>06</h2>
                        <h3 className={styles.cardSubHeader}>Управление</h3>
                        <p className={styles.text}>Централизация и корпоративное управление</p>
                    </div>
                    <div className={styles.kamkorCard}>
                        <h2 className={styles.cardHeader}>07</h2>
                        <h3 className={styles.cardSubHeader}>Многолетний опыт</h3>
                        <p className={styles.text}>Многолетний опыт работы на рынке работ и услуг в железнодорожной отрасли</p>
                    </div>
                    <div className={styles.kamkorCard}>
                        <h2 className={styles.cardHeader}>08</h2>
                        <h3 className={styles.cardSubHeader}></h3>
                        <p className={styles.text}>Высокий уровень оснащенности депо и качества работы</p>
                    </div>
                </div>
            </div>
            <div className='dashMainLeft'/>
            <OurPartners/>


        </section>
    
    )
}



export default GeneralInforamation