import styles from './Advantages.module.css'

function Advantages() {
    return (
      <div id='container'>
        <div className='advantages_main'>
            <h2 className={styles.advantages_tittle}>Почему именно мы</h2>
            <button className={styles.button_slider}><img className={styles.arrow_left} src='/icon_left.svg'/></button>
            <div className={styles.advantages}>
                <div className={styles.info}><img className={styles.icon} src='/Clock.svg'/><br/>Высокая и оперативная скорость обработки заявки</div>
                <div className={styles.info}><img className={styles.icon} src='/Glass.svg'/><br/>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</div>
                <div className={styles.info}><img className={styles.icon} src='/Lock.svg'/><br/>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
            </div>
            <button className={styles.button_slider}><img className={styles.arrow_right} src='/icon_right.svg'/></button>
            
          </div>
      </div>
    )
  }
  
  export default Advantages