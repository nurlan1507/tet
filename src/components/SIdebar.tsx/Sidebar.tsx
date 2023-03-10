import { observer } from "mobx-react-lite"
import htmlStates from "../../store/htmlStates"
import styles from './sidebar.module.css'
import './sidebar.module.css'
const Sidebar =observer(()=>{
    return <div className={`${styles.sideMenu} ${htmlStates.activeMenu ==false?styles.active:''}`}>
        <div className={styles.sidebarContent}>
        <img src={require('../../assets/logo.png')} alt="logo" className={styles.logo}/>
            <div className={styles.menu}>
                <li className={styles.headerItems}> 
                    <a className={styles.headerItemsA}>о компании</a>
                </li>
                <li className={styles.headerItems}>
                    <a href=""  className={styles.headerItemsA}>филиалы</a>
                </li>
                <li className={styles.headerItems}>
                    <a href=""  className={styles.headerItemsA}> услуги </a>
                </li>
                <li className={styles.headerItems}>
                    <a href="" className={styles.headerItemsA}>пресс-центр</a>
                </li  >
                <li className={styles.headerItems}>
                    <a href="" className={styles.headerItemsA}>ОТЗЫВЫ</a>
                </li>
                <li className={styles.headerItems}>
                    <a href="" className={styles.headerItemsA}>контакты</a>
                </li>
            </div>
            <hr/>
            <div className={styles.langList}>
                <div className={styles.langLogo}>
                    <img src={require("../../assets/lang.png")} className={styles.langLogoImg}/>
                </div>
                <a className={styles.langLink}>
                    KZ
                </a>
                <a className={styles.langLink}>RU</a>
                <a className={styles.langLink}>EN</a>
             </div>
        </div>
         
    </div>
})
export default Sidebar