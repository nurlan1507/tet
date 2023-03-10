import styles from './banner.module.css'


var rotate = `{
    -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -o-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg)
}`
const Banner =()=>{
    return(
        <div className={'main'}>
             <div className={styles.banner}>
            <div className={styles.bannerContent}>
                <h1 className={styles.bannerHeader}>
                    Капитальный <br/> ремонт вагонов
                </h1>
                <p className={styles.bannerText}>
                    Капитальный ремонт с продлением срока <br /> службы грузовых вагонов (КРП)
                </p>
                <button className={styles.bannerBtn}>
                    ОБРАТНЫЙ ЗВОНОК
                </button>
            </div>

            <button className={styles.scrollDown} onClick={()=>{
                 const element = document.getElementById('footer');
                 element?.scrollIntoView({ behavior: 'smooth' });
            }}>
             scroll down
            </button>
            <div className={styles.phoneIcon}>
                <img src={require("../../assets/contact.png")}/>
            </div>
        </div>  
        <div className={`${styles.bannerBackground} ${styles.ibg}`}>
            <img src={require("../../assets/banner.png")}/>
        </div>
        </div>
       
    )
}
export default Banner