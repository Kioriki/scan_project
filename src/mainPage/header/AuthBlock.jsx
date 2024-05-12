import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { isAuth, authClear } from "../../func/authControl.jsx";
import { useNavigate } from "react-router-dom";


function AuthBlock() { 
    const navigate = useNavigate();
    
    function clear(){
        console.log('clear');
        authClear();
        navigate("/");
    }

    if(isAuth()){
        console.log('isAuth');
        
        
       
        return (
            <>
                <div className={styles.profileAuth}>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileName}>Алексей А. </div>
                        <div onClick={clear} className={styles.profileLogout}>Выйти</div>
                    </div>
                    <div className={styles.profileIcon}>
                        <img src='./logo-scan-header.svg'></img>
                    </div>
                </div>
            </>
        )
    }else{
        console.log('notAuth');
        return (
            <>
                <div className={styles.profile}>
                    <div className={styles.registration}><Link to="/" className={styles.button_registration}>Зарегистрироваться</Link></div>
                    <div className={styles.login}><Link to="/registr" className={styles.button_login}>Войти</Link></div>
                </div>
            </>
        )
    }
}

export default AuthBlock;