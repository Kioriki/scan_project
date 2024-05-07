import styles from './Header.module.css'
import { Routes, Route, Link} from 'react-router-dom'
function Header() {
  return (
   <div id='container'>
       <div className={styles.header}>
            <div className={styles.logo_header}><img src='./logo-scan-header.svg'></img></div>
            <div className={styles.header_nav}>
                <Link to="/" className={styles.button_nav}>Главная</Link>
                <Link to="/" className={styles.button_nav}>Тарифы</Link>
                <Link to="/" className={styles.button_nav}>FAQ</Link>
            </div>
            <div className={styles.profile}>
                <div className={styles.registration}><Link to="/" className={styles.button_registration}>Зарегистрироваться</Link></div>
                <div className={styles.login}><Link to="/registr" className={styles.button_login}>Войти</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Header