import { NavLink, Outlet } from 'react-router-dom'
import styles from './aboutUs.module.css'
import { useState } from 'react'
import React from 'react';
import { useLocation } from 'react-router-dom';
const AboutUs =()=>{
    const [current, setCurrent] = useState("")
    var location = useLocation()
    console.log(location.pathname)
    const changeUrl =(newPath:string)=>{
        setCurrent(newPath)
    }
    return (
        <section className={`${styles.aboutUs} main`}>
            <div className={styles.content}>
                <div className={`${styles.aboutUsBanner} main`}>
                <div className={styles.aboutUsContent}>
                    <h1 className={styles.header}>
                        О КОМПАНИИ
                    </h1>
                    <p className={styles.subHeader}>Общая информация</p>
                </div>
                <div className={`${styles.bannerBackground} ${styles.ibg}`}>
                 <img src={require("../../assets/aboutUs.png")}/>
                 </div>
                </div>
                <nav>
                    <ul className={styles.navbar}>
                        <li className={styles.navbarItem}><NavLink to={""} className={styles.link} onClick={()=> changeUrl("")}>Общая информация</NavLink></li>
                        <li className={styles.navbarItem}><NavLink to={"history"} className={styles.link} onClick={()=> changeUrl("history")} >История компании</NavLink></li>
                        <li className={styles.navbarItem}><NavLink to={"management"} className={styles.link}>Руководство</NavLink></li>
                        <li className={styles.navbarItem}><NavLink to={"partners"} className={styles.link}>Партнеры</NavLink></li>
                        <li className={styles.navbarItem}><NavLink to={"politics"} className={styles.link}>Политика компании</NavLink></li>
                    </ul>
                </nav>
            </div>
           
            <Outlet/>   
        </section>
    )
}
export default AboutUs