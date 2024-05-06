import styles from './Advantages.module.css'

function Advantages() {
    return (
     <div className='advantages_main'>
        <h2 className={styles.advantages_tittle}>Почему именно мы</h2>
        <img className={styles.arrow_left} src='/icon_left.svg'/>
        <div className={styles.advantages}>
            <div className={styles.info}><img className={styles.icon} src='/Clock.svg'/><br/>Высокая и оперативная скорость обработки заявки</div>
            <div className={styles.info}><img className={styles.icon} src='/Glass.svg'/><br/>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</div>
            <div className={styles.info}><img className={styles.icon} src='/Lock.svg'/><br/>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
        </div>
        <img className={styles.arrow_right} src='/icon_right.svg'/>
        
      </div>
    )
  }
  
  export default Advantages