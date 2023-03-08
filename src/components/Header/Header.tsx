import { observable } from 'mobx'
import { useState } from 'react'
import styles from './header.module.css'
import HtmlStates from '../../store/htmlStates'
const Header =()=>{

        // console.log(document.querySelector(`.${styles.langLink}`))
    
    const [menuOpen, setSetMenuOpen] = useState(false)
    const [isSideMenuOpened, setSetMenuOpened] = useState(false)
    const burger = document.querySelector(`.${styles.menuBtn}`)
    const onBurgerClicked = ()=>{
        setSetMenuOpen(!menuOpen)
        
        HtmlStates.toggleActiveMenu()
        
    }



    return(
        <div className={styles.header}>
            <img src={require('../../assets/logo.png')} alt="logo" className={styles.logo}/>
            <div className={styles.menu}>
                <li className={styles.headerItems}> 
                    <a href="">о компании  <i style={{paddingLeft:"2px"}} className={`${styles.arrow} ${styles.down}`}></i></a>
                </li>
                <li className={styles.headerItems}>
                    <a  href="">филиалы <i style={{paddingLeft:"2px"}} className={`${styles.arrow} ${styles.down}`}></i></a>
                </li>
                <li className={styles.headerItems}>
                    <a href=""> услуги <i  style={{paddingLeft:"2px"}} className={`${styles.arrow} ${styles.down}`}></i> </a>
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
            {<div className={`menuBtn ${menuOpen==true?'open':''}`} onClick={()=>{onBurgerClicked()}}>
                <div className='burger'></div>
            </div>}
            

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
    
    )
}

export default Header