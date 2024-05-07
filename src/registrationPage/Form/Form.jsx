import styles from './Form.module.css'


function Form(){
    return(
        <div className={styles.form}>
            <div className={styles.loginContainer}>
            <div className={styles.row}>
                <div className={styles.loginForm}>
                <form>
                    
                    <div className={styles.loginsignup}>
                    <button className={styles.login}>Войти</button>
                    <button className={styles.signup}>Зарегистрироваться</button>
                    </div>
                    <div className={styles.formGroup}>
                    <label>
                        Логин или номер телефона:
                        <input
                            // type="text"
                            // className={styles.FormControl}
                            // placeholder={userName}
                            // value={userName}
                            // onChange={(e) => setUserName(e.target.value)}
                        />
                    </label>
                    </div>
                    <div className={styles.formGroup}>
                    <label>
                        Пароль:
                        <input
                            // type="password"
                            // className={styles.FormControl}
                            // placeholder=""
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    </div>
                    <button className={styles.btnSubmit}>Войти</button>
                    <div className={styles.formGroup}>
                    <a href="" className={styles.recoverPwd}>Восстановить пароль</a>
                    <label>Войти через:</label>
                    <div className={styles.imgsvg}>
                        <img className={styles.Google} src='./Google.svg' alt="Google" />
                        <img className={styles.facebook} src='./facebook.svg' alt="Facebook" />
                        <img className={styles.yandex} src='./yandex.svg' alt="Yandex" />
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Form