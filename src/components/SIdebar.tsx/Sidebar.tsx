import { observer } from "mobx-react-lite"
import htmlStates from "../../store/htmlStates"
import styles from './sidebar.module.css'
import './sidebar.module.css'
const Sidebar =observer(()=>{
    return <div className={`${styles.sideMenu} ${styles.active}`}>
        <div className={styles.sidebarContent}>
        <img src={require('../../assets/logo.png')} alt="logo" className={styles.logo}/>
            <div className={styles.menu}>
                <li className={styles.headerItems}> 
                    <a href="">о компании</a>
                </li>
                <li className={styles.headerItems}>
                    <a href="">филиалы</a>
                </li>
                <li className={styles.headerItems}>
                    <a href=""> услуги </a>
                </li>
                <li className={styles.headerItems}>
                    <a href="">пресс-центр</a>
                </li  >
                <li className={styles.headerItems}>
                    <a href="">ОТЗЫВЫ</a>
                </li>
                <li className={styles.headerItems}>
                    <a href="">контакты</a>
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