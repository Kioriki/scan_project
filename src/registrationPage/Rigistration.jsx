import styles from './Registration.module.css'

function Registration(){
    return(
        <div id="container">
            <div className={styles.registr_page}>
                <div className={styles.registr_info}>Для оформления подписки на тариф, необходимо авторизоваться.</div>
                <img src='./Characters.svg'></img>
            </div>
            <Form />
        </div>
    )
}
export default Registration