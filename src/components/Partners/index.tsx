import styles from './partners.module.css'
import Partner from '../../models/Partner'
const Partners =()=>{
    const partners = [
        new Partner("АО 'Қазтеміртранс'","Предоставление в оперирование грузовых вагонов, передача в аренду специального подвижного состава, хранение и реализация металлолома.","http://localhost:3000/partner1.png"),
        new Partner("АО 'Қазтеміртранс'","Предоставление в оперирование грузовых вагонов, передача в аренду специального подвижного состава, хранение и реализация металлолома.","http://localhost:3000/partner1.png"),
        new Partner("АО 'Қазтеміртранс'","Предоставление в оперирование грузовых вагонов, передача в аренду специального подвижного состава, хранение и реализация металлолома.","http://localhost:3000/partner1.png"),
        new Partner("АО 'Қазтеміртранс'","Предоставление в оперирование грузовых вагонов, передача в аренду специального подвижного состава, хранение и реализация металлолома.","http://localhost:3000/partner1.png"),
        new Partner("АО 'Қазтеміртранс'","Предоставление в оперирование грузовых вагонов, передача в аренду специального подвижного состава, хранение и реализация металлолома.","http://localhost:3000/partner1.png"),
    ]
    return(
        <section className={styles.partners}>
            <div className={styles.partnersList}>
                {partners.map((partner)=>
                <div className={styles.partnerCard}>
                     <div className={styles.partnerImgContainer}>
                        <img className={styles.partnerImg} src={`${partner.photoUrl}`}/>        
                    </div>
                    <div className={styles.partnerInfoContainer}>
                        <h1 className={styles.partnerName}>{partner.name}</h1>
                        <p className={styles.partnerInfo}>{partner.info}</p>
                    </div>
           </div>)}
                
            </div>
        </section>
    )
}

export default  Partners