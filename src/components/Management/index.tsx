import styles from './management.module.css'
import Manager from '../../models/Manager'
const Management = () =>{
    

    const managers = [
        new Manager("Тулебаев Сакен Коптлеуович", "Генеральный директор", "http://localhost:3000/manager.png"),
        new Manager("Абдрашев Болатказы Исагалиевич", "Директор по производству", "http://localhost:3000/manager.png" ),
        new Manager("Ысқақова Жанат Әлімқұлқызы", "Финансовый директор","http://localhost:3000/manager.png" ),
        new Manager("Айтжанов Аманбай Муталович", "Технический директор","http://localhost:3000/manager.png" ),
        new Manager("Жусупова Гульбану Калиаскаркызы", "Главный бухгалтер","http://localhost:3000/manager.png" )
    ]

    return(
        <section className={styles.management}>
            <div className={styles.content}>
            <div className='dashMainLeft'/>
            <div className={styles.managementContainer}>
                <h1 className={styles.managementHeader}>
                Руководство компании
                </h1>
                <div className={styles.managementList}>
                    {managers.map(manager=>
                        <div className={styles.managementCard}>
                           <img  className={styles.managerPhoto} src={manager.photoUrl}/>
                           <h3 className={styles.managerName}>{manager.name}</h3>
                           <p className={styles.managerJob}>{manager.job}</p>
                       </div>
                        )}
                 
                </div>
            </div>
            </div>

            <a className={styles.scrollDown}>топ менеджмент</a>
        </section>

    )
}


export default Management