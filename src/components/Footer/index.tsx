import styles from './footer.module.css'


const Footer =()=>{
    return(
        <footer className={styles.footer} id="footer">
            <div className={styles.footerContainer}>
                <div className={styles.footerItem}>
                    <h3 className={styles.footerItemHeader}>О компании</h3>
                    <ul className={styles.footerItemList}>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Общая информация</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>История компании</a></li>
                        <li  className={styles.footerListItem}><a className={styles.footerListItem}>Руководство</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Партнеры</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Политика компании</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className={`${styles.footerItemHeader} ${styles.branch}`}>Филиалы</h3>
                    <ul className={`${styles.footerItemList} ${styles.filials}`}>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Аякозское вагоноремонтное депоя</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Карагандинское вагоноремонтное депо</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Казалинское вагоноремонтное депо</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Павлодарское вагоноремонтное депо</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Шалкарское вагоноремонтное депо</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Усть-Каменогорское вагоноремонтное депо</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Вагоноколесные мастерские станции Алматы-1</a></li>
                    </ul>
                </div>


                <div>
                    <h3 className={`${styles.footerItemHeader} ${styles.offer}`}>
                        Услуги
                    </h3>
                    <div className={styles.footerItemDouble}>
                    <ul className={styles.footerItemList}>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Деповской ремонт грузовых вагонов (ДР)</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Капитальный ремонт грузовых вагонов (КР)</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Капитальный ремонт с продлением срока службы грузовых вагонов (КРП)</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Текущий отцепочный ремонт грузовых вагонов</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Ремонт колесных пар со сменой элементов грузовых и пассажирских вагонов</a></li>
                    </ul>
                    <ul className={styles.footerItemList} style={{marginLeft:"28px"}}>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Участковый ремонт колесных пар грузовых и пассажирских вагонов</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Ремонт узлов и деталей грузовых и пассажирских вагонов</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Услуги по подаче сжатого воздуха</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Услуги по санитарно-противоэпидемической обработке объектов</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>Деповской ремонт грузовых вагонов (ДР)</a></li>
                    </ul>
                    </div>
                    
                </div>

                <div>
                    <h3 className={styles.footerItemHeaderContact}>Пресс центр</h3>
                    <h3 className={styles.footerItemHeaderContact}>отзывы</h3>
                    <h3 className={styles.footerItemHeaderContact}>контакты</h3>
                    <ul className={styles.footerItemList} style={{paddingTop:"15px"}}>
                        <li  className={styles.footerListItem}><a className={styles.footerListItem}>г. Астана, ул. Кунаева 10, 18 этаж</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>8 (7172) 612–206</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}> 8 (7172) 612–235</a></li>
                        <li className={styles.footerListItem}><a className={styles.footerListItem}>avpm@mail.ru</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <h4 className={styles.footerLogo}>ABC DESIGN</h4>
        </footer>
    )
}
export default Footer