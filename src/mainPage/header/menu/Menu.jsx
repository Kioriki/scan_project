import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import store from "../../../store/store.jsx";
import styles from "../Header.module.css";
import { authReset } from "../../../func/authReset.jsx";
import Header_nav from "../Header.jsx";


function Menu() {
    // Ref для меню
    const menuRef = useRef(null);
  
    // Хук для навигации
    const navigate = useNavigate();
  
    // Состояния меню и статуса аутентификации
    const [menuStatus, setMenuStatus] = useState(store.getState().menuStatus);
    const [authStatus, setAuthStatus] = useState(localStorage.getItem("AuthStatus"));
  
    // Обработчик открытия/закрытия меню
    function handleMenu() {
      store.dispatch({ type: "CHANGE_MENU_STATUS" });
      setMenuStatus(!menuStatus);
    }
  
    // // Обработчик входа
    // function enterHandler() {
    //   handleMenu();
    //   navigate("/auth");
    // }
  
    
    function clear(){
      console.log('clear');
      authClear();
      navigate("/");
      window.location.reload();
  }

    
    // // Обработчик выхода
    // function exitHandler() {
    //   authReset(setAuthStatus, navigate);
    //   handleMenu();
    // }
  
    return (
        <>
          {/* Кнопка меню */}
          <div
              className={menuStatus ? styles.menuButtonOpened : styles.menuButton}
              onClick={handleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
  
          {/* Мобильное меню */}
          <div
              ref={menuRef}
              className={menuStatus ? styles.mobileMenuVisible : styles.mobileMenuHidden}
          >
            {/* Навигационное меню */} 
            {/* <nav className={styles.navMobile}>
              <Header_nav handler={handleMenu} />
    </nav>*/}
            <div className={styles.header_nav}>
                <Link to="/" className={styles.button_nav}>Главная</Link>
                <Link to="/" className={styles.button_nav}>Тарифы</Link>
                <Link to="/" className={styles.button_nav}>FAQ</Link>
            </div>
  
            {/* Аутентификация на мобильном устройстве */}
            <div className={styles.mobileAuth}>
              <Link to={"/"} className={styles.mobileRegister}>
                Зарегистрироваться
              </Link>
              {authStatus === "false" ? (
                  <div className={styles.login}><Link to="/registr" className={styles.mobileEnter}>Войти</Link></div>
              ) : (
                <div onClick={clear} className={styles.mobileEnter}>Выйти</div>
              )}
            </div>
          </div>
        </>
    );
  }
  
  export default Menu;