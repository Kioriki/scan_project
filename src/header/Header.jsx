import styles from './Header.module.css'


function Header() {
  return (
   <div id='container'>
       <div className={styles.header}>
            <div className={styles.logo_header}><img src='./logo-scan-header.svg'></img></div>
            <div className={styles.header_nav}>
                <button className={styles.button_nav}>Главная</button>
                <button className={styles.button_nav}>Тарифы</button>
                <button className={styles.button_nav}>FAQ</button>
            </div>
            <div className={styles.profile}>
                <div className={styles.registration}><button className={styles.button_registration}>Зарегестрироваться</button></div>
                <div className={styles.login}><button className={styles.button_login}>Войти</button></div>
            </div>
        </div>
    </div>
  )
}

export default Header