import styles from './Registration.module.css'
import Form from './Form/Form.jsx'
function Registration(){
    return(
        <div id="container">
            <div className={styles.registr}>
                <div className={styles.registr_page}>
                    <div className={styles.registr_info}>Для оформления подписки на тариф, необходимо авторизоваться.</div>
                    <div className={styles.registr_img}><img src='./Characters.svg'></img></div>
                </div>
                <Form />
            </div>
        </div>
    )
}
export default Registration